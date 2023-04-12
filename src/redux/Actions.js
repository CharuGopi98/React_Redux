import axios from "axios";
import * as types from "../redux/ActionTypes";
const getusers = (users) => {
  return {
    type: types.GET_USER_REQUEST,
    payload: users,
  };
};

const deleteuser = (id) => {
  return {
    type: types.DELETE_USER,
  };
};

const adduser = () => {
  return {
    type: types.ADD_USER,
  };
};
export const loadUsers = () => {
  return (dispatch) => {
    axios
      .get("  http://localhost:5000/user")
      //   .get(`${process.env.REACT_APP_API}`)
      .then((res) => {
        console.log("Response", res);
        dispatch(getusers(res.data));
      })
      .catch((err) => console.log(err));
  };
};
export const deleteUser = (id) => {
  return (dispatch) => {
    // axios.delete(`http://localhost:5000/user/%{id}`)
    axios.delete(`http://localhost:5000/user/${id}`).then((res) => {
      console.log("Response", res);
      dispatch(deleteuser());
      dispatch(loadUsers());
    });
  };
};

export const addUser = (user) => {
  return (dispatch) => {
    debugger;
    axios
      .post("  http://localhost:5000/user", user)
      .then((res) => {
        console.log(res);
        dispatch(adduser());
      })
      .catch((error) => console.log(error));
  };
};
