import * as types from "../actions/types";
import initialState from "./initialState";

export default function authReducer(state = initialState.accessToken, action) {
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return action.token;
    case types.LOGOUT_USER:
      return "";
    default:
      return state;
  }
}
