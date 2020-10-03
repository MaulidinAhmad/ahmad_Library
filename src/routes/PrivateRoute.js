import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { LoginContext } from "../context/loginContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [state] = useContext(LoginContext);
  console.log(state);
  return (
    <Route
      {...rest}
      render={(props) =>
        state.isLogin === "true" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
