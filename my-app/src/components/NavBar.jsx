import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import Header from "./Header";

function NavBar(args) {
  return (
    <div>
      <Navbar {...args} className="navbar fixed-top bg-light">
        <NavbarBrand id="within-navbar" href="/">
          Vovó's Kitchen
        </NavbarBrand>
        <NavbarText>{/* Simple Text */}</NavbarText>
      </Navbar>
      <Header />
    </div>
  );
}

export default NavBar;
