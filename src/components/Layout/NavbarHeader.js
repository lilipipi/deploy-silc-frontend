import React, { Component } from "react";
import {
  Navbar,
  NavDropdown,
} from "react-bootstrap";

class NavbarHeader extends Component {
  render() {
    return (
      <div>
        <Navbar className="header-navbar">
          <NavDropdown id="basic-nav-dropdown">
            <NavDropdown.Item>Action</NavDropdown.Item>
            <NavDropdown.Item>Another action</NavDropdown.Item>
            <NavDropdown.Item> Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Separated link</NavDropdown.Item>
          </NavDropdown>
        </Navbar>
        <hr id="hr"/>
        <br />
      </div>
    );
  }
}

export default NavbarHeader;
