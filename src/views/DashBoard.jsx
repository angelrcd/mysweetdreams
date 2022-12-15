import React, { useEffect, useState } from 'react'
import '../css/MainPage.css'
import AppNavbar from '../components/AppNavBar'
import { API } from '../../const'

function Dashboard () {
  const [userData, setUserData] = useState([])
  const [sleepData, setSleepData] = useState([])

  const options = {
    credentials: 'include',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  useEffect(() => {
    const fetchUserData = async () => {
      const result = await fetch(API.USERS.MY_USER, options)
      const jsonResult = await result.json()

      setUserData(jsonResult)
    }

    fetchUserData()
  }, [])

  useEffect(() => {
    const fetchSleepData = async () => {
      const result = await fetch(API.SLEEP.ALL_DATA, options)
      const jsonResult = await result.json()

      setSleepData(jsonResult)
    }

    fetchSleepData()
  }, [])

  return (
    <>
      <div className='bg-slate-800 text-gray-200 flex h-screen'>
        <AppNavbar />
        <div className='w-fit px-8 py-16'>
          <h1 className='text-xl p-4'>{userData.email}</h1>
          <img className='rounded-full h-20' src={`/userProfiles/${userData.profilePic}`} alt="" />
          <ul className='px-4'>
            <li>Name: {userData.name}</li>
            <li>Last-name: {userData.lastName}</li>
            <li>Email: {userData.email}</li>
            <li>Birthdate: {userData.birthdate}</li>
            <li>Sleep data:</li>
            <p>{JSON.stringify(sleepData)}</p>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Dashboard
