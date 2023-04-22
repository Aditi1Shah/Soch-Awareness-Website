//React CONTEXT APIS allows us to easily access data at different levels of
//the component tree, without passing props to each level

import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

//Lets create the Initial state
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null, //in the beginning user is not logged in
  isFetching: false,
  error: false,
};

//To use context api we need to create three things :
//CreateContext()....which is the data we need to transfer b/w the producer and consumer
//Producer
//Consumer

//We need to access the user after user has successfully logged in so we are passing
//initial_state
export const Context = createContext(INITIAL_STATE);

//Creating context provider

//children is all the components
export const ContextProvider = ({ children }) => {
  //reducer ginna use the inital state to dispatch data
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
