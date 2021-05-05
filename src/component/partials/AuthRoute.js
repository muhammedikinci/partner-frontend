import React from "react";
import { Redirect, Route } from "react-router";
import { getToken } from "../../helper/token";

const AuthRoute = props => {
    let token = getToken();

    if (!token) return <Redirect to="/giris" />;

    return <Route {...props} />;
};

export default AuthRoute;