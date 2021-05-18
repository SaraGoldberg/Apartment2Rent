import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import RadioButton from './radioButton';
import './signIn.css'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import validator from 'validator';

function SignIn() {
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [radioFlag, setRadioFlag] = useState(false);

  ValidatorForm.addValidationRule('isPhone', value => {
    if (validator.isMobilePhone(value) === true)
      return true;
    else
      return false;
  });

  function handleChange(event) {
    const tmp = event.target.value;
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
    if (radioFlag === false) {
      alert("בחר דרך תקשורת SMS / Email");
      return;
    }
    console.log('submit')
  }
  function handleRadio(event) {
    if (event.target.checked === true)
      setRadioFlag(true);
  }
  
  return (
    <Container>
      <h1>הרשמה</h1>
      <h3>אנו שמחים שבחרת להצטרף אלינו</h3>
      <div>אנא הכנס/י את פרטיך</div>
      <br /><br />
      <ValidatorForm onSubmit={handleSubmit} onError={errors => console.log(errors)}>
        <TextValidator id="userName" label="שם משתמש" onChange={handleChange} name="userName" value={userName} validators={['required']} errorMessages={['this field is required']} />
        <TextValidator id="firstName" label="שם פרטי" onChange={handleChange} name="firstName" value={firstName} validators={['required']} errorMessages={['this field is required']} />
        <TextValidator id="lastName" label="שם משפחה" onChange={handleChange} name="lastName" value={lastName} validators={['required']} errorMessages={['this field is required']} />
        <TextValidator id="email" label="אימייל" onChange={handleChange} name="email" value={email} validators={['required', 'isEmail']} errorMessages={['this field is required', 'Email is not valid']} />
        <TextValidator id="phone" label="פלאפון" onChange={handleChange} name="phone" value={phone} validators={['required', 'isPhone']} errorMessages={['this field is required', 'Phone is not valid']} />
        <RadioButton handleChangeRadio={handleRadio} onChange={handleRadio} arr={["SMS", "Email"]}></RadioButton><br />
        <Button type="submit">הירשם</Button>
      </ValidatorForm>
    </Container>
  );
}

export default SignIn;