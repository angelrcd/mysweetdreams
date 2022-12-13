import { useEffect } from 'react'

function Consejos () {
  useEffect(() => {
    fetch('178.62.252.159:3000/users', { method: 'GET' })
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  return (
    <h1>Probando la base de datos, MANTENGAN LA CALMA!</h1>
  )
}

export default Consejos
