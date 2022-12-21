import { API } from '../../data'

const options = {
  credentials: 'include',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}

export const logout = async () => {
  if (confirm('¿Quieres cerrar sesión?')) {
    const response = await fetch(API.AUTH.LOGOUT, options)
    console.log(response.status)
    return response.status
  }
}
