import '../css/Login.css'
import TopBar from '../components/TopBar.jsx'
import ContentLogin from '../components/ContentLogin.jsx'
import React, { useState } from 'react'

function Login () {
  return (
    <div className="w-full flex flex-col">
        <TopBar />
        <ContentLogin />
    </div>
  )
}

export default Login
