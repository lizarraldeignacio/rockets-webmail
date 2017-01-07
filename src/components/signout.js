import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signoutUser } from '../actions/index';

class Signout extends Component {

  componentWillMount() {
    setTimeout(this.props.signoutUser, 2000);
  }

  render() {
    return (
      <div><strong style={{color : 'white'}}>Sorry to see you go...</strong></div>
    );
  }
}

export default connect(null, { signoutUser })(Signout);
