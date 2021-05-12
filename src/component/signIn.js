import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import RadioButton from './radioButton';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function SignIn() {
  //   const [count, setCount] = useState(0);
  const classes = useStyles();

  return (
    <Container>
      <h1>הרשמה</h1>
      <h3>אנו שמחים שבחרת להצטרף אלינו</h3>
      <div>אנא הכנס/י את פרטיך</div>
      <br /><br />
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="firstName" label="First name" variant="outlined" /><br />
        <TextField id="lastName" label="Last Name" variant="outlined" /><br />
        <TextField id="email" label="Email" variant="outlined" /><br />
        <TextField id="phone" label="Phone" variant="outlined" /><br />
        <div>
          <RadioButton arr='aaa'></RadioButton>
        </div>
      </form>
    </Container>
  );
}

export default SignIn;