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
import Homepage from "../routes/homepage";
import Header from "./Header";
import ModalDemo from "./Modal";

function NavBar(args) {
  return (
    <div>
      <Navbar {...args} className="navbar fixed-top bg-light">
        <NavbarBrand href="/">Vovó's Kitchen</NavbarBrand>
        <NavbarText>
          <ModalDemo args={"test"} />
          {/* Simple Text */}
        </NavbarText>
      </Navbar>
      <Header />
    </div>
  );
}

export default NavBar;
