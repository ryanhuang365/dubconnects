import './App.scss'
import {React, useState} from 'react';
import LandingPage from './pages/LandingPage';

import MainPage from './pages/MainPage';

function App() {
  const [validated, setValidity] = useState(false);
  const validationMethod = (validity) => {
    setValidity(true);
  };
  return (
    <div className="App">
    {
      <div>
      
      {validated ? <MainPage /> : <LandingPage validation = {validationMethod}/>}
      </div>
    }
    </div>
  )
}

export default App;
