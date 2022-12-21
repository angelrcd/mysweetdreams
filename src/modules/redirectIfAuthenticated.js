import { API } from '../../data'
import { useNavigate } from 'react-router-dom'

// Opciones del fetch
const options = {
  credentials: 'include',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}

// Te manda al dashboard si el usuario ya tiene una cookie válida
export function redirectIfAuthenticated (handleImage) {
  const navigate = useNavigate()
  fetch(API.USERS.MY_USER, options)
    .then(response => {
      if (response.status === 200) {
        return navigate('/app/resume')
      }
    })
}
