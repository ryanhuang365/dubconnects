import React from 'react'
import Background from '../components/Background'

function buttonClicked() {
  alert('Button clicked!')
}

export default function LandingPage() {
  return (
    <button onClick={buttonClicked}>Click me!</button>
  )
}
