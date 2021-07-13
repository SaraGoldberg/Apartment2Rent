import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import './login.css'
import { login } from '../services/loginApi';

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(event) {
        switch (event.target.id) {
            case 'userName': setUserName(event.target.value); break;
            case 'password': setPassword(event.target.value); break;
            default: ;
        }
    }
    const handleSubmit = async () => {
        const res = await login(userName, password);
        console.log(res);
    }

    return (
        <div className='form'>
            <TextField id="userName" label="שם משתמש" onChange={handleChange} variant="outlined" /><br />
            <TextField id="password" label="סיסמא" variant="outlined" onChange={(e) => setPassword(e.target.value)}/><br />
            <button onClick={handleSubmit}>כניסה</button>
        </div>

    );
}
export default Login;



