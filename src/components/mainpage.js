import React, { Component } from 'react';
import Sidebar from './sidebar';
import Button from 'react-bootstrap/lib/Button';


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

export default MainPage;
