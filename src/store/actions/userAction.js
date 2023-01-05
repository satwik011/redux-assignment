import * as ty from "../apis";
import { USER_DATA } from "../constants/types";

export const getUser = () => async (dispatch) => {
  try {
    const { data } = await ty.fetchUserData();

    dispatch({ type: USER_DATA, payload: data });

    // navigate(`/`);
  } catch (error) {
    console.log(error);
  }
};

// export const signUpRequest = (formData) => async (dispatch) => {
//   try {
//   } catch (error) {}
// };
