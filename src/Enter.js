import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@mui/material/Button';

import logow from './assets/logow.jpeg'


import './Enter.css';

const Enter = () => {
  return (
    <div className="login">
      <div>
        <img className="logow" src= {logow} />
      </div>
      <div className="form">
        <div>
          <h2>Welcome back!</h2>
          <h4>Enter your email id to login</h4>
        </div>
        <div className="fild">
        <TextField id="standard-basic" label="Email Id" variant="standard" />
        <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password"/>
        </div>
        <div className="other">
        <div className="box"><Checkbox /> Keep me logged in</div>
        <div>Forgot Password?</div>
        </div>
        <div className="button">
          <Button variant="contained" className="submit">login</Button>
        </div>
        <div className="or">---- or ----</div>
        <div className="mob">
        <Button variant="outlined">Continue with mobile</Button>
        </div>
      </div>
    
    </div>
  );
};

export default Enter;