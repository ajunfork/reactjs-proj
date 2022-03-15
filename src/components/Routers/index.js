import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import Dashboard from "../../pages/Dashboard/index";
import Error404 from "../../pages/Error404/index";
import Header from "../Header/index";
import React from "react";
import SignIn from "../../pages/SignIn/index";
import SignUp from "../../pages/SignUp/index";
import Styles from "./style.module.scss";

const Routers = () => {
  return (
    <div>
      <Router>
        <ul className={Styles.navLinks}>
          {/* <li> */}
          <NavLink to='/dashboard' activeClassName={Styles.active}>
            Dashboard
          </NavLink>
          <NavLink to='/sign-in' activeClassName={Styles.active}>
            Sign In
          </NavLink>
          <NavLink to='/sign-up' activeClassName={Styles.active}>
            Sign Up
          </NavLink>
        </ul>
        <Header />
        <Switch>
          <Route path='/reactjs-proj' exact>
            <SignUp />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/sign-in'>
            <SignIn />
          </Route>
          <Route path='/sign-up'>
            <SignUp />
          </Route>
          <Route path='/' exact>
            <Dashboard />
          </Route>
          <Route>
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routers;
