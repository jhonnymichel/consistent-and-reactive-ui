/* THIS IS THE DATA MOCK. THERE IS NO REAL API. DO YOU THINK I'M STUPID? */

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

/* ---------------------------------------------------------------------- */
const perPage = 10;
const pages = data.length / perPage;
let requestCount = 0;

export default {
  getData(page) {
    requestCount++;
    const trimStart = (page - 1) * perPage;
    const trimEnd = trimStart + perPage;
    const delay = window.latency || 100;

    const okResponse = {
      meta: {
        page,
        perPage,
        pages
      },
      data: data.slice(trimStart, trimEnd)
    };

    const errorResponse = {
      message: 'We had a problem processing your request'
    };

    // eslint-disable-next-line promise/avoid-new
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          if (requestCount % 2 === 0) {
            reject(errorResponse);
          } else {
            resolve(okResponse);
          }
        },
        delay
      );
    });
  }
};
