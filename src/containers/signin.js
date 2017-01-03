import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import { reduxForm } from 'redux-form';
import FieldGroup from '../components/fieldgroup';
import _ from 'lodash';
import { signinUser } from '../actions/index';

/**
  Signin component

  --TODO: Refactoring
**/

/**
  Form Fields
**/
const FIELDS = {
  email: {
    type: 'email',
    label: 'Email address',
    placeholder: 'Enter email'
  },
  password: {
    type: 'password',
    label: 'Password',
    placeholder: ''
  }
}

class Signin extends Component {

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

  handleFormSubmit({ email, password }) {
    this.props.signinUser({ email, password });
  }

  render() {
    return (
      <div key="signin" className="col-xs-4 col-xs-offset-4 container-float">
        <form onSubmit={this.props.handleSubmit(this.handleFormSubmit.bind(this))}>
          {_.map(FIELDS, (this.renderField.bind(this)))}
          <Button type="submit">
            Sign In
          </Button>
        </form>
      </div>
    );
  }
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
  form: 'SignInForm',
  fields: _.keys(FIELDS),
  validate
}, null, { signinUser })(Signin);
