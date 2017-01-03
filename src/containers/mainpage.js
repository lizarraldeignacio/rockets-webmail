import React, { Component } from 'react';
import Sidebar from '../containers/sidebar';
import Button from 'react-bootstrap/lib/Button';


class MainPage extends Component {

  componentWillMount() {
      document.body.style.background = "url(/resources/main.jpg)";
      document.body.style.backgroundSize = "cover";
  }

  render() {
    return (
      <div id="main-container" className="container">
        <Button id="compose" type="submit">
          <i className="fa fa-rocket" aria-hidden="true"></i> Compose
        </Button>
        <div className="col-lg-12">
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default MainPage;
