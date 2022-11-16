import '../css/Login.css'
import Navbar from '../components/Navbar.jsx'
import ContentLogin from '../components/ContentLogin.jsx'
import React, { useState } from 'react'

function Login () {
  return (
    <div className="w-full flex flex-col">
        <Navbar />
        <ContentLogin />
    </div>
  )
}

export default Login
