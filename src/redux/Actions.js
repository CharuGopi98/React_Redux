import axios from "axios";
import * as types from "../redux/ActionTypes";
const getUsers = (users) => {
  return {
    type: types.GET_USER_REQUEST,
    payload: users,
  };
};

const loadUsers = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:5000/user")
      .then((res) => {
        console.log("Response", res);
        dispatch(getUsers(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export default loadUsers;
