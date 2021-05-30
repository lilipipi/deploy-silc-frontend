import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThLarge,
  faUsers,
  faBuilding,
  faUser,
  faSignOutAlt,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import "../stylesheet/app.scss";
import logo from "../includes/silc logo HD - EN.png";
import { logout } from "../../actions/securityActions";
import store from "../../store";

class Sidebar extends Component {
  
  state = {
    menus: [
      {
        id: 0,
        menu: "Investment Dashboard",
        urlLink: "/AMdashboard",
        menuIcons: <FontAwesomeIcon id="icons" icon={faThLarge} />,
      },
      {
        id: 1,
        menu: "Asset Management",
        urlLink: "/AMdashboard",
        menuIcons: <FontAwesomeIcon id="icons" icon={faBook} />,
      },
      {
        id: 2,
        menu: "Partnered Services",
        urlLink: "/AMdashboard",
        menuIcons: <FontAwesomeIcon id="icons" icon={faUsers} />,
      },
      {
        id: 3,
        menu: "Marketplace",
        urlLink: "/Marketplace",
        menuIcons: <FontAwesomeIcon id="icons" icon={faBuilding} />,
      },
      {
        id: 4,
        menu: "My Profile",
        urlLink: "/Profile",
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
    store.dispatch(logout());
    window.location.href = "/SignIn";
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


export default withRouter(Sidebar);

