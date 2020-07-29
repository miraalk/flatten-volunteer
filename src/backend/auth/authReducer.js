import {
  AUTH_AUTHENTICATED,
  AUTH_UNINITIALISED,
  AUTH_UNAUTHENTICATED,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_EXPECT_AUTHENTICATED,
} from "./authActions";

const authReducer = (state = { status: AUTH_UNINITIALISED }, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return { ...state, status: AUTH_AUTHENTICATED, user: action.payload };
    case SET_UNAUTHENTICATED:
      return { ...state, status: AUTH_UNAUTHENTICATED, user: undefined };
    case SET_EXPECT_AUTHENTICATED:
      return { ...state, expectAuthenticated: action.payload };
    default:
      return state;
  }
};

export default authReducer;
