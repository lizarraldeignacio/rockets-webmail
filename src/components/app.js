import React, { Component, PropTypes } from 'react';
import NavBar from '../containers/navbar';
import { connect } from 'react-redux';
import { changeFrontPage } from '../actions/index';


class App extends Component {

  handleClick(type) {
    return () => this.props.changeFrontPage(type);
  }

  componentWillMount() {
    this.props.changeFrontPage('wellcome');
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
          onSigninClick={this.handleClick('signin').bind(this)}
          onSignoutClick={this.handleClick('logout').bind(this)}
          onSignupClick={this.handleClick('signup').bind(this)}
          onBrandClick={this.handleClick('wellcome').bind(this)}
          />
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { frontPageState: state.frontPageState };
}

export default connect(mapStateToProps, { changeFrontPage })(App);
