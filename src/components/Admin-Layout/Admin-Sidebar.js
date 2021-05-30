import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThLarge,
  faBuilding,
  faUser,
  faSignOutAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "../stylesheet/app.scss";
import logo from "../includes/silc logo HD - EN.png";
import { adminLogout } from "../../actions/securityActions";
import store from "../../store";

class AdminSidebar extends Component {
  state = {
    menus: [
     /*  {
        id: 0,
        menu: "Dashboard",
        urlLink: "/AdminAssetDashboard",
        menuIcons: <FontAwesomeIcon id="icons" icon={faThLarge} />,
      }, */
      {
        id: 0,
        menu: "Users",
        urlLink: "/AdminUserDashboard",
        menuIcons: <FontAwesomeIcon id="icons" icon={faUsers} />,
      },
      {
        id: 1,
        menu: "Assets",
        urlLink: "/AdminAssetDashboard",
        menuIcons: <FontAwesomeIcon id="icons" icon={faBuilding} />,
      },
      {
        id: 2,
        menu: "Profile",
        urlLink: "/AdminAssetDashboard",
        menuIcons: <FontAwesomeIcon id="icons" icon={faUser} />,
      },
    ],
  };

  addClass = (e) => {
    this.setState({
      menus: this.state.menus.map((menu) => ({
        ...menu,
        isActive: e.target.id == menu.id,
      })),
    });
  };

  handleClick = () => {
    store.dispatch(adminLogout());
    window.location.href = "/adminSignIn";
  };

  render() {
    return (
      <div className="sidebar">
        <img className="logo" src={logo} alt="Logo" />
        {this.state.menus.map((menu) => (
          <Link
            className={` ${menu.isActive ? "active" : ""}`}
            key={menu.id}
            id={menu.id}
            onClick={this.addClass}
            to={menu.urlLink}
          >
            {menu.menuIcons}
            {menu.menu}
          </Link>
        ))}
        <button className="logoutButton" onClick={this.handleClick}>
          <FontAwesomeIcon id="icons" icon={faSignOutAlt} /> Logout
        </button>
      </div>
    );
  }
}

export default withRouter(AdminSidebar);
