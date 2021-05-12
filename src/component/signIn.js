import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import RadioButton from './radioButton';
import './signIn.css'
import { ValidatorForm, TextValidator, validator } from 'react-material-ui-form-validator';



function SignIn() {
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  ValidatorForm.addValidationRule('isPhone', value => validator.isMobilePhone(value));

  function handleChange(event) {
    const tmp = event.target.value;
    // debugger

    switch (event.target.name) {
      case 'userName': setUserName(tmp); break;
      case 'firstName': setFirstName(tmp); break;
      case 'lastName': setLastName(tmp); break;
      case 'phone': setPhone(tmp); break;
      case 'email': setEmail(tmp); break;
      default:
        break;
    }
  }

  function handleSubmit() {
    console.log('submit')
  }

  // function validatePhoneNumber(number) {
  //   const isValidPhoneNumber = validator.isMobilePhone(number)
  //   return (isValidPhoneNumber)
  //  }

  return (
    <Container>
      <h1>הרשמה</h1>
      <h3>אנו שמחים שבחרת להצטרף אלינו</h3>
      <div>אנא הכנס/י את פרטיך</div>
      <br /><br />
      <ValidatorForm onSubmit={handleSubmit} onError={errors => console.log(errors)}>
        {/* <TextField id="firstName" label="שם פרטי" variant="outlined" /><br /> */}
        <TextValidator id="firstName" label="שם פרטי" onChange={handleChange} name="firstName" value={firstName} validators={['required']} errorMessages={['this field is required']} />
        <TextValidator id="lastName" label="שם משפחה" onChange={handleChange} name="lastName" value={lastName}
          validators={['required']} errorMessages={['this field is required', 'email is not valid']} />
        <TextValidator id="email" label="אימייל" onChange={handleChange} name="email" value={email} validators={['required', 'isEmail']} errorMessages={['this field is required', 'email is not valid']} />
        <TextValidator id="phone" label="פלאפון" onChange={handleChange} name="phone" value={phone} validators={['required', 'isPhone']} errorMessages={['this field is required', 'phonr is not valid']} />
        <div>
          <RadioButton arr={["SMS", "Email"]}></RadioButton>
        </div>
        <Button type="submit">הירשם</Button>
      </ValidatorForm>
    </Container>
  );
}

export default SignIn;