import * as types from "../redux/ActionTypes";
const initialState = {
  users: [],
  user: {},
  loading: true,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_REQUEST:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case types.DELETE_USER:
      return {
        ...state,
        loading: false,
      };
    case types.ADD_USER:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
export default userReducer;
