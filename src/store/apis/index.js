import axios from "axios";

export const fetchUserData = () =>
  axios.get(`https://reqres.in/api/users?page=1`, {});
export const fetchSingle = (id) =>
  axios.get(`https://reqres.in/api/users/${id}`, {});
