// Custom hook, hace un fetch a la api para obtener los datos del usuario
import { useState, useEffect } from 'react'
import { API } from '../../data'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

  useEffect(() => {
    fetch(API.USERS.MY_USER, options)
      .then(response => {
        if (response.status === 403) {
          return navigate('/login')
        }
        return response
      })
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
