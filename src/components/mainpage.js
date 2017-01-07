import React, { Component } from 'react';
import Sidebar from './sidebar';
import Button from 'react-bootstrap/lib/Button';
import { fetchMessages } from '../actions/index';
import { connect } from 'react-redux';


class MainPage extends Component {

  componentWillMount() {
    document.body.classList.add("blur");
  }

  render() {
    return (
      <div className="col-lg-12">
        <Button id="compose" type="submit">
          <i className="fa fa-rocket" aria-hidden="true"></i> Compose
        </Button>
        <Sidebar />
      </div>
    );
  }
}

export default connect(null, { fetchMessages })(MainPage);
