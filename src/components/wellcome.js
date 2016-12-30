import React, { Component } from 'react';

/**
  Wellcome jumbotron component

  params:
    title: The title to show
    description: The description to show
    buttonIcon: The icon of the button, null otherwise
    buttonText: The text of the button
**/

class Wellcome extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
      	<div className="col-lg-12">
      		<div id="wellcome-content">
      			<h1>{this.props.title}</h1>
      			<h3>{this.props.description}</h3>
      			<hr></hr>
      			<button className="btn btn-default btn-lg">{this.props.buttonIcon} {this.props.buttonText}</button>
      		</div>
      	</div>
      </div>
    );
  }
}

export default Wellcome;
