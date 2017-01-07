import React from 'react';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import prettyDate from 'pretty-date';

export default function (props) {
  return (
    <ListGroupItem className="clickable" key={props.message.subject}>
      <div id="maillist-small-from">{props.message.from.split('@')[0]}</div>
      <div id="maillist-small-timestamp">{prettyDate.format(new Date(props.message.timestamp))}</div>
      <div id="maillist-small-subject"><strong>{props.message.subject}</strong></div>
    </ListGroupItem>
  );
}
