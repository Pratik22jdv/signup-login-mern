import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";

import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Router>
        <div style={{ paddingTop: "120px" }}>
          {/* <Menu /> */}
        </div>
        <Switch>
          <Route exact path="/">
          {user ? <Redirect to="/" /> : <Login />}
          </Route>

          <Route path="/profile">
             <Profile />
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
