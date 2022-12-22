// Custom hook, hace un fetch a la api para obtener los datos de sueño del usuario
import { useState, useEffect } from 'react'
import { API } from '../../data'

export function useGetAllSleepData () {
  const options = {
    credentials: 'include',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const [sleepData, setSleepData] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()
  useEffect(() => {
    fetch(API.SLEEP.ALL_DATA, options)
      .then(response => {
        console.log(response)
        return response
      })
      .then(jsonResult => jsonResult.json())
      .then(data => {
        setSleepData(data)
      })
      .catch(err => {
        console.log(err)
        setError(err)
      })
      .finally(() => setIsLoading(false))
  }, [])

  return {
    sleepData,
    isLoading,
    error
  }
}
