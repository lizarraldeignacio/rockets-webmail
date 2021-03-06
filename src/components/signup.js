import React, { Component } from 'react';
import FieldGroup from './fieldgroup';
import { reduxForm } from 'redux-form';
import Button from 'react-bootstrap/lib/Button';
import _ from 'lodash';
import { signupUser } from '../actions/index'

/**
  Form Fields
**/
const FIELDS = {
  fullname: {
    type: 'text',
    label: 'Full name',
    placeholder: 'Enter full name'
  },
  email: {
    type: 'email',
    label: 'Email address',
    placeholder: 'Enter email'
  },
  password: {
    type: 'password',
    label: 'Password',
    placeholder: ''
  },
  passwordConfirmation: {
    type: 'password',
    label: 'Confirm password',
    placeholder: ''
  }
}

/**
  Represents the signup form
**/

class Signup extends Component {

  renderField(fieldConfig, field) {
    const fieldHelper = this.props.fields[field];
    return (
      <FieldGroup
        key={fieldConfig.label}
        type={fieldConfig.type}
        label={fieldConfig.label}
        placeholder={fieldConfig.placeholder}
        state={`${fieldHelper.touched && fieldHelper.invalid ? 'error' : null}`}
        help={fieldHelper.touched ? fieldHelper.error : ''}
        {...fieldHelper}
      />
    );
  }

  handleFormSubmit(formProps) {
    this.props.signupUser(formProps);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
            <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    return (
      <div key="signup" className="col-xs-4 col-xs-offset-4 container-float">
        <form onSubmit={this.props.handleSubmit(this.handleFormSubmit.bind(this))}>
          {_.map(FIELDS, (this.renderField.bind(this)))}
          {this.renderAlert.bind(this)()}
          <Button type="submit">
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

/**
  Validiation function, it validates each field on the form
**/
function validate(values) {
  const errors = {};

  _.each(FIELDS, (type, field) => {
    if (!values[field]) {
      errors[field] = `Please Enter a ${type['label']}`;
    }
  });

  if (values.password !== values.passwordConfirmation) {
    errors['passwordConfirmation'] = "Passwords must match";
  }

  return errors;
}

/**
  Redux form decorator

  params:
    form: The name of the form
    fields: The fields of the form
    validate: the validation function
**/
export default reduxForm({
  form: 'SignUpForm',
  fields: _.keys(FIELDS),
  validate
}, mapStateToProps, { signupUser })(Signup);
