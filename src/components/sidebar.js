import React, { Component } from 'react';
import Tab from 'react-bootstrap/lib/Tab';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import ElementList from './element-list';


class Sidebar extends Component {

  render() {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="clearfix">
          <Col sm={4}>
            <Nav bsStyle="pills" stacked>
              <NavItem eventKey="inbox">
                Inbox
              </NavItem>
              <NavItem eventKey="sent">
                Sent Mail
              </NavItem>
            </Nav>
            <hr></hr>
          </Col>
          <Col className="container-float" sm={8}>
            <Tab.Content animation>
              <Tab.Pane eventKey="inbox">
                <ElementList />
              </Tab.Pane>
              <Tab.Pane eventKey="sent">
                Sent content
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}

export default Sidebar;
