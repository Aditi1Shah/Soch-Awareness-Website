export const LoginStart = (useCredentials) => ({
  type: "LOGIN_START",
});
export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user, //to update our user we need payload:user
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

//To dispatch data and update our state we need Reducer
