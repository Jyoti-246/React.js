import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/')
  }

  const goBack = () => {
    navigate(-1)
  } 
  return (
    <div>
      <div>About page</div>
      <button onClick={goToHome}>Go to home</button>
      <button onClick={goBack}>Go back</button>
    </div>
  )
}

export default About
