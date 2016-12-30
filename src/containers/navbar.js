import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

/**
  Navbar component

  Params:
    brandName: The name of the brand
    brandIcon: The brand icon
    loginText: The label for the login button
    loginIcon: The icon for the login button
    signUpText: The label for the sign up button
    signUpIcon: The icon for the sign up button
    onBrandClick: Handler function onClick brand event
    onLoginClick: Handler function onClick login event
    onSignUpClick: Handler function onClick sign up event
**/
class NavBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#" onClick={this.props.onBrandClick}>
              {this.props.brandIcon} {this.props.brandName}</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem onClick={this.props.onSignUpClick}>{this.props.signUpText} {this.props.signUpIcon}</NavItem>
              <NavItem onClick={this.props.onLoginClick} eventKey={2} href="#">{this.props.loginText} {this.props.loginIcon}</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default NavBar;
