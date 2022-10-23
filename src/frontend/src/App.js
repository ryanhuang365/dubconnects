import {React, useState} from 'react';
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';

function App() {
  const [validated, setValidity] = useState(false);
  const validationMethod = (validity) => {
    console.log('this thing runs');
    setValidity(true);
  };
  return (
    <div>
    {
      validated ? <MainPage /> : <LandingPage validation = {validationMethod}/>
    }
    </div>
  )
}

export default App;
