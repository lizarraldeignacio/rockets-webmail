import React, { Component } from 'react';
import NavBar from './navbar';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


class App extends Component {

  handleClick(type) {
    return () => browserHistory.push(type);
  }

  componentWillMount() {
    document.body.classList.remove("blur");
  }

  handleSignoutClick() {
    document.body.classList.remove("blur");
    browserHistory.push('/signout');
  }

  render() {
    return (
      <div>
        <NavBar
          brandName={"Rockets "}
          brandIcon={<i className="fa fa-rocket" aria-hidden="true"></i>}
          signinText={"Sign In"}
          signinIcon={<i className="fa fa-sign-in" aria-hidden="true"></i>}
          signoutText={"Sign Out"}
          signoutIcon={<i className="fa fa-sign-out" aria-hidden="true"></i>}
          signupText={"Sign Up"}
          signupIcon={<i className="fa fa-user-plus" aria-hidden="true"></i>}
          onSigninClick={this.handleClick('/signin').bind(this)}
          onSignoutClick={this.handleSignoutClick.bind(this)}
          onSignupClick={this.handleClick('/signup').bind(this)}
          onBrandClick={this.handleClick('/').bind(this)}
          />
          <div id="app-container" className="container">
            {this.props.children}
          </div>
      </div>
    );
  }
}

export default App;
