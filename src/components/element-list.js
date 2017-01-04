import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

class ElementList extends Component {

  render() {
    return (
      <ListGroup>
        <ListGroupItem>Email 1</ListGroupItem>
        <ListGroupItem>Email 2</ListGroupItem>
      </ListGroup>
    );
  }
}

export default ElementList;
