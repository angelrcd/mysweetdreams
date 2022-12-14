import React, { useEffect, useState } from 'react'
import '../css/MainPage.css'
import { API } from '../../const'

function Dashboard () {
  const [userData, setUserData] = useState([])

  const options = {
    credentials: 'include',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(API.USERS.MY_USER, options)
      const jsonResult = await result.json()

      setUserData(jsonResult)
    }

    fetchData()
  }, [])

  console.log(userData)

  return (
    <>
      <h1 className='text-xl p-4'>{userData.email}</h1>
      <img className='rounded-full h-20' src={`/userProfiles/${userData.profilePic}`} alt="" />
      <ul className='px-4'>
        <li>Name: {userData.name}</li>
        <li>Last-name: {userData.lastName}</li>
        <li>Email: {userData.email}</li>
        <li>Birthdate: {userData.birthdate}</li>
      </ul>
    </>
  )
}

export default Dashboard
