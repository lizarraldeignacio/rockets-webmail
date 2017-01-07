import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import { connect } from 'react-redux';
import ListElement from './list-element';
import { fetchMessages } from '../actions/index';
import _ from 'lodash';

class ElementList extends Component {


  componentWillMount() {
    this.props.fetchMessages(this.props.type);
  }

  renderList() {
    return (
      _.map(this.props[this.props.type], message => {
          return (
            <ListElement message={message} />
          );
        })
    );
  }

  render() {
    return (
      <ListGroup>
        {this.renderList.bind(this)()}
      </ListGroup>
    );
  }
}

function mapStateToProps(state) {
  return {
    sent: state.messages.sent,
    received: state.messages.received
  };
}

export default connect(mapStateToProps, { fetchMessages })(ElementList);
