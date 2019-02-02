import status from './status';
import { callHistoryActions } from './actions';

const initialState = {
  isInitalState: true,
  status: status.OK,
  data: [],
  error: {},
  pagination: {}
};

export default function callHistoryReducer(state = initialState, action) {
  switch (action.type) {
    case callHistoryActions.DATA_LOADED:
      return {
        status: status.OK,
        data: action.payload.data,
        pagination: action.payload.meta,
        error: null,
        isInitialState: false
      };
    case callHistoryActions.DATA_REQUESTED:
      return {
        ...state,
        status: status.LOADING,
        error: null
      };
    case callHistoryActions.DATA_ERROR:
      return {
        ...state,
        status: status.ERROR,
        error: action.payload.error
      };
    case 'reset':
      return initialState;
  }

  return state;
}
