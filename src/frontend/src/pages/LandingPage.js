import { React, useRef } from 'react'
import MainPage from './MainPage';


export default function LandingPage( { validation } ) {

  const input = useRef("input");
  let emailSent = false;

  function submitButtonClicked() {
    if(!emailSent){
      const email = input.current.value;
      if(!checkValidUWEmail(email)){
        input.current.value = "invalid email";
      }else{
        fetch(`http://localhost:8080/verify/${email}` /*`https://dubconnects.azurewebsites.net/verify/${email}`*/, { method: 'GET' });
        emailSent = true;
        input.current.value = "enter validation code";
      }
    }else{
      const validationCode = input.current.value;
      const validity = fetch(`http://localhost:8080/checkCode/${validationCode}` /*`https://dubconnects.azurewebsites.net/checkCode/${validationCode`*/, { method: 'GET' });
      if(validity){
        console.log("validation success");
        validation(true);
      }else{
        input.current.value = "invalid code";
      }
    }
  }
  
  function checkValidUWEmail(email){
    if(email.length <= 7){
      return false;
    }
    const domain = '@uw.edu';
    for(var i = 0; i < 7; i++){
      if(email[email.length - 7 + i] != domain[i]){
        return false;
      }
    }
    return true;
  }
  
  return (
    <>
      <h2>Validate UW Email</h2>
      <input defaultValue={"enter email"} ref={input} type="text"/>
      <button onClick={submitButtonClicked}>Submit</button>
    </>
  )
}
