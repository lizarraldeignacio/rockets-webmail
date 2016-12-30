import React, { Component } from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';

/**
  FormGroup basic component to create forms

  Params:
    brandName: The name of the brand
    validationState: The state of the control ('success', 'warning', 'error', null)
    key: Unique identifier
    label: FormControl label
    help: FormControl help text
**/
const FieldGroup = ({ key, label, help, state, ...props }) =>  {
  return (
    <FormGroup controlId={key} validationState={state}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default FieldGroup;
