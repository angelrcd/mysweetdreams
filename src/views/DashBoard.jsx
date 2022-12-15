import React, { useEffect, useState } from 'react'
import '../css/MainPage.css'
import AppNavbar from '../components/AppNavBar'
import { API } from '../../data'
import { useGetUserData } from '../modules/useGetUserData'

function Dashboard () {
  const { userData, isLoading, error } = useGetUserData()
  // const [sleepData, setSleepData] = useState([])

  // useEffect(() => {
  //   const fetchSleepData = async () => {
  //     const result = await fetch(API.SLEEP.ALL_DATA, options)
  //     const jsonResult = await result.json()

  //     setSleepData(jsonResult)
  //   }

  //   fetchSleepData()
  // }, [])

  return (
    <>
      <div className='bg-slate-800 bg-fixed text-gray-200 flex'>
        <AppNavbar />

      </div>
    </>
  )
}

export default Dashboard
