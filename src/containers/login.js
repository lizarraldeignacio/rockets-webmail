import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import { reduxForm } from 'redux-form';
import FieldGroup from '../components/fieldgroup';

/**
  Login component
  
  --TODO: Refactoring
**/
class Login extends Component {

  render() {
    return (
        <div key="login" className="col-xs-4 col-xs-offset-4 container-float">
          <form>
            <FieldGroup
              id="formControlsEmail"
              type="email"
              label="Email address"
              placeholder="Enter email"
            />
            <FieldGroup
              id="formControlsPassword"
              label="Password"
              type="password"
            />
            <Button type="submit">
              Login
            </Button>
          </form>
        </div>
    );
  }
}

export default Login;
