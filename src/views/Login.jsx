import '../css/Login.css'
import Navbar from '../components/Navbar.jsx'
import ContentLogin from '../components/ContentLogin.jsx'
import React, { useState } from 'react'

function Login () {
  return (
    <div className="flex flex-col">
      <Navbar background="bg-[#1b2950]"/>
      <ContentLogin />
    </div>
  )
}

export default Login
