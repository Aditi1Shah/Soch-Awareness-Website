const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true, //we have to begin the process of login
        error: false, //As we are still fetching there can be no error
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false, //User has successfully logged in no more need to fetch info
        error: false, //As we are still fetching there can be no error
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false, //we have to begin the process of login
        error: true,
      };
    case "LOGOUT":
      return {
        user: null,
        isFetching: false, //we have to begin the process of login
        error: false,
      };
    default:
      return state;
  }
};
export default Reducer;
//"proxy": "http://127.0.0.1:5000/",
