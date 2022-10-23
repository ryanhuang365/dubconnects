import './App.scss'
import {React, useState} from 'react';
import LandingPage from './pages/LandingPage';
import Logo from './img/Logo.png';
import MainPage from './pages/MainPage';

function App() {
  const [validated, setValidity] = useState(false);
  const validationMethod = (validity) => {
    console.log('this thing runs');
    setValidity(true);
  };
  return (
    <div className="App">
    {
      <img src={Logo} alt='Logo' />
      validated ? <MainPage /> : <LandingPage validation = {validationMethod}/>
    }
    </div>
  )
}

export default App;
