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
    if (this.props.route) {
      this.state = {...this.props.route};
    }
    else {
      this.state = {...this.props};
    }
  }

  render() {
    return (
      <div className="container">
      	<div className="col-lg-12">
      		<div id="wellcome-content">
      			<h1>{this.state.title}</h1>
      			<h3>{this.state.description}</h3>
      			<hr id="wellcome-hr"></hr>
      			<button
              onClick={this.state.onClickHandler}
              className="btn btn-default btn-lg">{this.state.buttonIcon} {this.state.buttonText}
            </button>
      		</div>
      	</div>
      </div>
    );
  }
}

export default Wellcome;
