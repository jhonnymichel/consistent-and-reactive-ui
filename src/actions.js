import API from './api';

export const callHistoryActions = {
  DATA_LOADED: 'loaded',
  DATA_REQUESTED: 'requested',
  DATA_ERROR: 'error'
};

const dataError = (error) => ({
  type: callHistoryActions.DATA_ERROR,
  payload: { error }
});

const dataRequested = () => ({
  type: callHistoryActions.DATA_REQUESTED,
  payload: {}
});

const dataLoaded = (response) => ({
  type: callHistoryActions.DATA_LOADED,
  payload: response
});

export const getCallHistory = (page = 1) => async (dispatch) => {
  dispatch(dataRequested());

  try {
    const response = await API.getData(page);
    dispatch(dataLoaded(response));
  } catch (e) {
    dispatch(dataError(e));
  }
};
