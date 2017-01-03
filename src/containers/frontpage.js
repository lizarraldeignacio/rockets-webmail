import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import { connect } from 'react-redux';
import Signin from './signin';
import Signup from './signup';
import Wellcome from '../components/wellcome';

/**
  WebEmail front page
  It wraps all the components that compose the front page
**/

class FrontPage extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      signin: <Signin key="signin" />,
      signup: <Signup key="signup" />,
      wellcome: <Wellcome
                  title="Rockets Email"
                  description="The Only Smart Web-Email On The Web"
                  buttonIcon={<i className="fa fa-rocket" aria-hidden="true"></i>}
                  buttonText="Get Started!"
                  key="wellcome"
                  onClickHandler={this.handleSignin.bind(this)}
                  />
    };
  }

  handleSignin() {
    this.context.router.push("/main");
  }

  render() {
    if (!this.state[this.props.frontPageState]) {
      return <div></div>;
    }
    return (
      <div id="app-container" className="container">
        <ReactCSSTransitionReplace
          transitionName="fade-wait"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={400}>
          {this.state[this.props.frontPageState]}
        </ReactCSSTransitionReplace>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { frontPageState: state.frontPageState }
}

export default connect(mapStateToProps)(FrontPage);
