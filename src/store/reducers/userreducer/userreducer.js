import { ADD_ADULT, USER, USER_DATA } from "../../constants/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { user: [] }, action) => {
  switch (action.type) {
    case USER_DATA:
      state = { user: [] };
      return { ...state, user: [...state.user, action.payload.data] };
      break;
    // case SIGNUP:
    //   break;

    default:
      return state;
  }
};
