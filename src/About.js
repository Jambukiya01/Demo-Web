// About.js
import React from 'react';
import './About.css';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@mui/material/Button';

import logow from './assets/logow.jpeg'


const About = () => {
  return (
    <div className="main">
    <div>
      <img className="logow" src= {logow} />
    </div>
    <div className="form">
    <div>
      <h2>Let’s get started</h2>
      <h4 id="h4">We will help you to find perfect match based on the details you enter hereboost</h4>
    </div>

    <div>
      <h3>Profile created for *</h3>
      <div>
      <Button variant="outlined" size="small" className="but">
          Self
        </Button>
        <Button variant="outlined" size="small" className="but">
          Son
        </Button>
        <Button variant="outlined" size="small" className="but">
          Daughter
        </Button>
        <Button variant="outlined" size="small" className="but">
          Brother
        </Button>
        <Button variant="outlined" size="small" className="but">
          Sister
        </Button>
        <Button variant="outlined" size="small" className="but">
          Friend
        </Button>
        <Button variant="outlined" size="small" className="but">
          Relative
        </Button>
       
      </div>
    </div>
    <div>
      <h3>Name *</h3>
      <div>
      <TextField className="name" label="First Name" variant="outlined" />
      <TextField label="Last Name" variant="outlined" />
      </div>
    </div>
    <div>
      <h3>Date of Birth *</h3>
      <div className="dob">
      <TextField className="dob" label="Date" variant="outlined" />
      <TextField label="Month" variant="outlined" />
      <TextField label="Year" variant="outlined" />
      </div>
    </div>

    <div>
      <h3>Height *</h3>
      <div>
      <TextField label="Feet" variant="outlined" />
      <TextField label="Inch" variant="outlined" />
      </div>
    </div>
    <div className="next">
    <Button className="button" variant="contained">Next</Button>
    </div>
    </div>
  
  </div>
  );
};

export default About;
