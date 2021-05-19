import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import './login.css'

function Login(){

    const [userName, setuserName] = useState(0);

    function handleChange(event){
    setuserName(event.target.value);}
     function handleSubmit()
     {

     }
    return(
        <form className='form' onSubmit={handleSubmit}>
        <TextField id="userName" label="שם משתמש" onChange={handleChange} variant="outlined" /><br />
        <TextField id="password" label="סיסמא" variant="outlined" /><br />
        </form>
     
    );
}
export default Login;



