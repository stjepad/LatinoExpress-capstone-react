
import React from 'react';
// import MessageManager from '../../modules/uniqueMessage';
import './NavBarForm.css'
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
  DropdownItem } from 'reactstrap';


export default class NavBarForm extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }




  logUserOut = () => {
    sessionStorage.removeItem("credentials")}

  render() {
    return (
      <div>
        <Navbar
        // color="light"
        light expand="md"
        id="navBarColor"
        >
          <NavbarBrand id = "navFont-logo" href="/">Maíz</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink id="navFont-home" href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="navFont-random" href={`/establishments/${Math.floor((Math.random() * 7) + 1)}`}>Random</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle id="navFont-logOut" nav caret>
                  LogOut
                </DropdownToggle>
                <DropdownMenu id="navFont-logout3" right>
                  <DropdownItem id="navFont-logout2"
                  onClick={() => { this.logUserOut() }}
                  href="http://localhost:3000/login"
                  >
                    LogOut
                  </DropdownItem>

                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}