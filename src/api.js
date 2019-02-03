import queryString from 'query-string';
window.queryString = queryString;
/* THIS IS THE DATA MOCK. THERE IS NO REAL API. I'M SO SORRY  */

const data = new Array(100).fill().map((_, i) => ({
  to: String(Math.random()).substring(2, 12),
  date: Date.now() + 100000 * i,
  type: [
    'call_missed',
    'call_missed_outgoing',
    'call_made',
    'call_received'
  ][Math.floor(Math.random() * 4)]
}));

const perPage = 10;
const totalPages = data.length / perPage;

window.networkConditions = {
  offline: false,
  serverIntermitent: false,
  latency: 400,
};

/* I'M MOCKING FETCH AS WELL. fetch-mock WOULDNT HANDLE QUERY PARAMS
   THE WAY I NEEDED. DIDNT BOTHER LOOKING FOR OTHER OPTIONS */


const fetch = (url) => new Promise((resolve, reject) => {
  if (!url.startsWith('https://api.fakevox.com/callhistory')) {
    window.fetch(url).then(resolve).catch(reject);
    return;
  }

  if (window.networkConditions.offline) {
    reject(new TypeError('Failed to fetch'));
    return;
  }

  setTimeout(() => {
    if (window.networkConditions.serverIntermitent) {
      if (Math.round(Math.random())) {
        resolve(
          new Response(
            JSON.stringify({ message: 'Internal Server Error. Please try again'}),
            { status: 500 }
          )
        );
      }
    }

    const [ baseUrl, qs ] = url.split('?');
    const { page } = queryString.parse(qs);
    const trimStart = (page - 1) * perPage;
    const trimEnd = trimStart + perPage;

    const body = {
      meta: {
        page: parseInt(page),
        perPage,
        pages: totalPages
      },
      data: data.slice(trimStart, trimEnd)
    };

    resolve(new Response(JSON.stringify(body), { type: 'text/json' }))
  }, window.networkConditions.latency || 400);

});

/* ---------------------------------------------------------------------- */
/*         THIS IS WHERE A NORMAL API WRAPPER FILE WOULD START            */
/* ---------------------------------------------------------------------- */

class APIResponseError extends Error {};

export default {
  async getData(page) {
    const url = `https://api.fakevox.com/callhistory?page=${page}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        const error = await response.json();
        // here, I know that the error response has a message property.
        // you need to know how to handle the errors the service returns.
        throw new APIResponseError(error.message);
      }

      return response.json();
    } catch (e) {
      if (e instanceof APIResponseError) {
        // just rethrow the error we created up there
        throw e;
      }

      // fetch only throws TypeError: Failed to fetch.
      // either the URL was not resolved by any DNS or
      // the client has connection problem. You know
      // the service exists (otherwise why would you be expecting to use it?)
      // so it's probably a problem in the client
      throw new Error(
        'We couldn\'t connect to the service. Check your internet connection'
      );
    }
  }
};
