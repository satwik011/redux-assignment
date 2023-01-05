import { SINGLE } from "../../constants/types";

export default (state = { single: [] }, action) => {
  switch (action.type) {
    case SINGLE:
      return { ...state, single: action.payload.data };

    default:
      return state;
  }
};
