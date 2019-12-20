import * as actions from './actions';
import produce from 'immer';

const initialState = {
  loading: false,
  token: null,
};

export default produce((draft = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      draft.loading = true;
      break;
    case actions.LOGIN_SUCCESS:
      draft.loading = false;
      draft.token = action.payload;
      break;
    case actions.LOGIN_FAILURE:
    case actions.LOGOUT:
      draft.loading = false;
      draft.token = null;
      break;
    default:
      return draft;
  }
});
