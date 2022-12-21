// Custom hook, hace un fetch a la api para obtener los datos del usuario
import { useState, useEffect } from 'react'
import { API } from '../../data'

const options = {
  credentials: 'include',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}

export function useGetUserData (handleImage) {
  const [userData, setUserData] = useState('aaa')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()
  useEffect(() => {
    // const fetchData = async () => {
    //   const result = await fetch(API.USERS.MY_USER, options)
    //   const jsonResult = await result.json()

    //   setUserData(jsonResult)
    //   console.log(userData)
    // }

    // fetchData()

    fetch(API.USERS.MY_USER, options)
      .then(response => response)
      .then(jsonResult => jsonResult.json())
      .then(data => {
        setUserData(data)
        handleImage(data.profilePic)
      })
      .catch(err => setError(err))
      .finally(() => setIsLoading(false))
  }, [])

  return {
    userData,
    isLoading,
    error
  }
}
