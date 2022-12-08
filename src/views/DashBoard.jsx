import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import '../css/MainPage.css'

function Dashboard () {
  const [userData, setUserData] = useState([])
  const params = useParams()
  const userId = params.id
  const APIUrl = 'http://localhost:3000/users/' + userId

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(APIUrl)
      const jsonResult = await result.json()

      setUserData(jsonResult)
    }

    fetchData()
  }, [])

  console.log(userData)

  return (
    <>
      <h1 className='text-xl p-4'>Dashboard con ID: {userId}</h1>
      <ul className='px-4'>
        <li>Name: {userData.name}</li>
        <li>Last-name: {userData.lastName}</li>
        <li>Email: {userData.email}</li>
        <li>Birthdate: {userData.birthdate}</li>
        <li>ProfilePic: {userData.profilePic}</li>
      </ul>
    </>
  )
}

export default Dashboard
