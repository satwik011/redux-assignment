import * as ty from "../apis";
import { SINGLE } from "../constants/types";

export const getSingleUser = (id, setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const { data } = await ty.fetchSingle(id);

    dispatch({ type: SINGLE, payload: data });
    setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};
