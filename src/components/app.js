import React, { Component } from 'react';
import NavBar from '../containers/navbar';
import Login from '../containers/login';
import Signup from '../containers/signup';
import Wellcome from '../components/wellcome';
import ReactCSSTransitionReplace from 'react-css-transition-replace'; // ES6


const ELEMENTS = {
  login: <Login key="login" />,
  signup: <Signup key="signup" />,
  wellcome: <Wellcome
              title="Rockets Email"
              description="The Only Smart Web-Email On The Web"
              buttonIcon={<i className="fa fa-rocket" aria-hidden="true"></i>}
              buttonText="Get Started!"
              key="wellcome" />
}

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { current: 'wellcome' };
  }

  handleClick(type) {
    return () => this.setState({ current: type });
  }

  render() {
    return (
      <div className="app-container">
        <NavBar
          brandName={"Rockets "}
          brandIcon={<i className="fa fa-rocket" aria-hidden="true"></i>}
          loginText={"Login"}
          loginIcon={<i className="fa fa-user" aria-hidden="true"></i>}
          signUpText={"Sign Up"}
          signUpIcon={<i className="fa fa-user-plus" aria-hidden="true"></i>}
          onLoginClick={this.handleClick('login').bind(this)}
          onSignUpClick={this.handleClick('signup').bind(this)}
          onBrandClick={this.handleClick('wellcome').bind(this)}
          />
        <div id="app-container" className="container">
          <ReactCSSTransitionReplace
            transitionName="fade-wait"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={400}>
            {ELEMENTS[this.state.current]}
          </ReactCSSTransitionReplace>
        </div>
      </div>
    );
  }
}
