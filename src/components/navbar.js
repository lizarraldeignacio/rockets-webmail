import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import { connect } from 'react-redux';

/**
  Navbar component

  Params:
    brandName: The name of the brand
    brandIcon: The brand icon
    signinText: The label for the signin button
    signinIcon: The icon for the signin button
    signUpText: The label for the sign up button
    signUpIcon: The icon for the sign up button
    onBrandClick: Handler function onClick brand event
    onSigninClick: Handler function onClick signin event
    onSignUpClick: Handler function onClick sign up event
**/
class NavBar extends Component {

  constructor(props) {
    super(props);
  }


  renderButtons() {
    if (this.props.authenticated) {
      return (
        <NavItem
          onClick={this.props.onSignoutClick}>
          {this.props.signoutText} {this.props.signoutIcon}
        </NavItem>);
    }
    else {
      return [
        <NavItem
          onClick={this.props.onSignupClick}>
          {this.props.signupText} {this.props.signupIcon}
        </NavItem>,
        <NavItem
          onClick={this.props.onSigninClick}>
          {this.props.signinText} {this.props.signinIcon}
        </NavItem>
      ];
    }
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
              { this.renderButtons() }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(NavBar);
