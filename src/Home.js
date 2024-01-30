import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


import logo from './assets/logo.jpeg'
import blob1 from './assets/blob1.jpeg'
import blob2 from './assets/blob2.jpeg'
import blob3 from './assets/blob3.jpeg'
import blob7 from './assets/blob7.jpeg'
import blob4 from './assets/blob4.jpeg'
import rev1 from './assets/rev1.jpg'
import rev2 from './assets/rev2.jpg'
import rev3 from './assets/rev3.jpg'
import google from './assets/google.jpeg'
import app from './assets/app.jpeg'

function Home() {
  const handleLoginClick = () => {
    window.location.href = '/enter';
  };
  const handleClick = () => {
    window.location.href = '/about';
  };

  return (
    <div className="App">
     <div className="header">
      <div className="header-top">
        <img className="logo" src= {logo} />
        <Button className="link" variant="contained" onClick={handleLoginClick}>Login</Button>
      </div>
      <div className="header-bot">
            <div className="div-1">
            Search for Matches who speak
            <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Mother tongue</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          <MenuItem value={1}>Hindi</MenuItem>
          <MenuItem value={2}>English</MenuItem>
          <MenuItem value={3}>Gujrati</MenuItem>
        </Select>
      </FormControl>
            </div>
            <div className="div-2">
            and belong to
            <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Community</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          <MenuItem value={1}>Hindu</MenuItem>
          <MenuItem value={2}>Muslim</MenuItem>
          <MenuItem value={3}>Christian</MenuItem>
          <MenuItem value={4}>Sikh</MenuItem>
          <MenuItem value={5}>Parsi</MenuItem>
          <MenuItem value={6}>Jain</MenuItem>
        </Select>
      </FormControl>
            </div>          
            <div className="div-3">
            <Button className="link" variant="contained" onClick={handleClick}>Let's Begin</Button>
            </div>
      </div>
     </div>
     <div className= "h2">
      <div className="h2-top">
        <h1>Why Choose Sangam?</h1>
        <h4>Genuine Profiles | Safe & Secure | Detailed Family Information</h4>
      </div>
      <div className="h2-bot">
        <div className="h2-det">
          <div className="det-icon">
            <div className="icon">
            <img src= {blob1} />
            </div>
            <div className="icon">
            <img  src= {blob2} />
            </div>
            <div className="icon">
            <img  src= {blob3} />
            </div>
          </div>
          <div className="det-det">
            <div className="det">
              <h2>Get Complete Family Information</h2>
              <h4>You will find detailed family information in every profile. Knowing the family will help you take the next step with confidence.</h4>
            </div>
            <div className="det">
              <h2>Get Matches from your Community</h2>
              <h4>With over 80 community sites, you can find a Match from your community. Finding a Match based on caste and religion made easy.</h4>
            </div>
            <div className="det">
              <h2>Enable your search without any barrie</h2>
              <h4>Embark on your journey to find your perfect match now available in multiple languages.</h4>
            </div>
          </div>
        </div>
        <div className="h2-img">
        <img  src= {blob7} />
        </div>
      </div>
      </div>

      <div className= "h2">
      <div className="h2-top">
        <h1>Over 40,000+ Happy Stories</h1>
        <h4>If like thousands of couples, you too met your one-and-only on Sangam.com, we'd love to hear all about it. It's our favorite part of what we do!</h4>
      </div>
      <div className="riview">
      <div className="rev">
      <img  src= {rev1} />
      <h3>Mehnaz Fatima & Syed Rizwan Hasmi</h3>
      <h5 className="h2-det">My mother has created my profile on shadi.com, I was not actually using my profule it was my brother who...</h5>
      </div>
      <div className="rev">
      <img  src= {rev2} />
      <h3>Anshuman & Bhavna</h3>
      <h5 className="h2-det">Its a beautiful story and i would love to share more in person. Of course, I am supper thankfull to shadi.com..</h5>
      </div>
      <div className="rev">
      <img  src= {rev3} />
      <h3>Sandesh & Koyal</h3>
      <h5 className="h2-det">On 25th july 2018, I got request from koyal . Going throught her profile i found that it matched all my...</h5>
      </div>
      </div>
      </div>
      <div className="dow">
        <div className="dow-1">
          <div><h1>Download the App</h1></div>
          <div><h3>Now instantly contact your Matches from your community</h3></div>
          <div>
          <img className="d-img" src= {google} />
          <img className="d-img" src= {app} />
          </div>
        </div>
        <div className="dow-2">
        <img  src= {blob4} />
        </div>
      </div>

      <div className="Browse">
        <div><h1>Browse Matrimonial Profiles by</h1></div>
        <div className="by">
        <div className="dt">
        <h3>Mother Tongue</h3>
        <h4 className="det">Hindi | Marathi | Punjabi | Tamil | Telugu | Bengali | Gujarati | Urdu | Kannada | OdiaMa | laya | lam | Marwari | Sindhi | English | Assamese | Bhojpuri | Konkani | Rajasthani | Garhwali | Maithili | Haryanavi | Tulu</h4>
        </div>
        <div className="dt">
          <h3>City</h3>
          <h4 className="det">Mumbai | Delhi | Benga | luru | Pune | Hyderabad | Kolkata | Chennai | Lucknow | Ahmedabad | Nagpur | Jaipur | Patna | Kanpur | Noida | Indore | Surat | Gurgaon | Ghaziabad | Ludhiana | Bhopal</h4>
        </div>
        <div className="dt">
          <h3>Community</h3>
          <h4 className="det">Sunni | Rajput | Brahmin | Maratha | Yadav | JatKayastha | Agarwal | Baniya | JatavKashyap | Thakur | Gupta | Scheduled | Caste(SC) | KurmiLingayat | Teli | Shwetamber | Vishwa | karma | Kunbi | Sunni Hanafi | Vanniyar | Kushwaha | Gursikh | Reddy | Digambar | Patel | Adi Dravida | Catholic</h4>
        </div>
        </div>
       
      </div>

     <div className="about">
      <h2>About Sangam</h2>
      <h4>Sangam is a trusted matchmaking service created for parents who are looking for a life partner for their loved ones. Unlike other Matrimonial services, we focus on providing trustworthy detailed family and background information to help you take the next step with confidence. With over 80+ community sites, you can find a match from your own community. Sangam is part of Shaadi.com (sometimes mis-spelt as Shadi), the World's No. 1 Matchmaking service.</h4>
     </div>

     <div className="last">
      <div className="link">
        <a href='https://help.sangam.com/support/home?ref=Contact%20Us'>Contect us</a> | 
        <a href='https://www.sangam.com/terms'> Terms & Conditions</a> | 
        <a href='https://www.sangam.com/privacy-policy'>Privacy Policy</a> | 
        <a href='https://www.sangam.com/be-safe-online'>  Be Safe Online</a> <br/>
        <a href='https://sangam.onelink.me/He56?pid=Footer&c=footer-link&af_channel=footer&Feature=marketing&utm_source=&utm_campaign=&is_retargeting=true&af_click_lookback=15d'>Download the App</a>
      </div>
      <div className="rights">
      © Sangam, Community Matchmaking Trusted By Parents TM <br/>
      Passionately created by  People Group <br/>
      Version 1.0.22
      </div>
     </div>

    </div>
  );
}

export default Home;
