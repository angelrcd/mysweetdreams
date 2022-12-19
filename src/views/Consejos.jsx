import { useEffect } from 'react'

function Consejos () {
  useEffect(() => {
    fetch('https://api.mysweetdreams.es/users', { method: 'GET' })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <h1>Probando la base de datos, MANTENGAN LA CALMA!</h1>
  )
}

export default Consejos
