import "./App.css";
import AMdashboard from "./components/Dashboards/AMdashboard";
import NavbarHeader from "./components/Layout/NavbarHeader";
import Sidebar from "./components/Layout/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddAsset from "./components/Assets/AddAsset";
import { Provider } from "react-redux";
import store from "./store";
import AssetOverview from "./components/Assets/AssetOverview";
import Marketplace from "./components/Dashboards/Marketplace";
import SignIn from "./components/SignUp-SignIn/signinCard";
import Signup from "./components/SignUp-SignIn/signupCard";
import Verification from "./components/SignUp-SignIn/Verification";
import ResetPassword from "./components/SignUp-SignIn/ResetPassword";
import ResetPwVerification from "./components/SignUp-SignIn/ResetPwVerification";
import AdminSigninCard from "./components/Admin-Login/Admin-SigninCard";
import AdminAssetDashboard from "./components/Admin-Dashboard/Admin-AssetDashboard";
import AdminSidebar from "./components/Admin-Layout/Admin-Sidebar";
import AdminAssetOverview from "./components/Admin-Assets/Admin-AssetOverview";
import AdminUserDashboard from "./components/Admin-Dashboard/Admin-UserDashboard";
import AdminAMOverview from "./components/Admin-Users/Admin-AMOverview";
import AdminInvOverview from "./components/Admin-Users/Admin-InvOverview";
import UserProfile from "./components/Dashboards/UserProfile";
import setToken from "./securityUtils/setToken";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER } from "./actions/types";

const token = localStorage.token;

if (token) {
  setToken(token);
  const decoded_token = jwt_decode(token);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_token,
  });
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/SignIn" component={SignIn} />
            <Route exact path="/SignUp" component={Signup} />
            <Route exact path="/Verification" component={Verification} />
            <Route exact path="/ResetPassword" component={ResetPassword} />

            <Route exact path="/AdminSignIn" component={AdminSigninCard} />

            <Route exact path="/AdminAssetDashboard/AdminAssetOverview/:id">
              <AdminSidebar />
              <NavbarHeader />
              <div className="content">
                <Route
                  exact
                  path="/AdminAssetDashboard/AdminAssetOverview/:id"
                  component={AdminAssetOverview}
                />
              </div>
            </Route>

            <Route exact path="/AdminUserDashboard/AdminAMOverview/:id">
              <AdminSidebar />
              <NavbarHeader />
              <div className="content">
                <Route
                  exact
                  path="/AdminUserDashboard/AdminAMOverview/:id"
                  component={AdminAMOverview}
                />
              </div>
            </Route>

            <Route exact path="/AdminUserDashboard/AdminInvOverview/:id">
              <AdminSidebar />
              <NavbarHeader />
              <div className="content">
                <Route
                  exact
                  path="/AdminUserDashboard/AdminInvOverview/:id"
                  component={AdminInvOverview}
                />
              </div>
            </Route>

            <Route exact path="/AMdashboard/AssetOverview/:id">
              <Sidebar />
              <NavbarHeader />
              <div className="content">
                <Route
                  exact
                  path="/AMdashboard/AssetOverview/:id"
                  component={AssetOverview}
                />
              </div>
            </Route>

            <Route
              exact
              path="/ResetPassword/Verify"
              component={ResetPwVerification}
            />

            {/* <Route path="/AMdashboard">
              <Sidebar />
              <NavbarHeader />
              <div className="content">
                <AMdashboard />
              </div>
            </Route> */}

            <Route exact path="/AMdashboard">
              <Sidebar />
              <NavbarHeader />
              <div className="content">
                <Route
                  exact
                  path="/AMdashboard"
                  component={AMdashboard}
                />
              </div>
            </Route>

            <Route path="/Marketplace">
              <Sidebar />
              <NavbarHeader />
              <div className="content">
                <Marketplace />
              </div>
            </Route>

            <Route path="/AdminAssetDashboard">
              <AdminSidebar />
              <NavbarHeader />
              <div className="content">
                <AdminAssetDashboard />
              </div>
            </Route>

            <Route path="/AdminUserDashboard">
              <AdminSidebar />
              <NavbarHeader /> 
              <div className="content">
                <AdminUserDashboard />
              </div>
            </Route>

            {/* <Route path="/AdminAMOverview">
              <AdminSidebar />
              <NavbarHeader /> 
              <div className="content">
                <AdminAMOverview />
              </div>
            </Route> */}

            {/* <Route path="/AdminInvOverview">
              <AdminSidebar />
              <NavbarHeader /> 
              <div className="content">
                <AdminInvOverview />
              </div>
            </Route>
 */}
            <Route path="/addAsset">
              <Sidebar />
              <NavbarHeader />
              <div className="content">
                <AddAsset />
              </div>
            </Route>

            <Route path="/Profile">
              <Sidebar />
              <NavbarHeader />
              <div className="content">
                <UserProfile />
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
