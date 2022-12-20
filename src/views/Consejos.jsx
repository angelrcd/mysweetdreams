import { useEffect } from 'react'

function Consejos () {
  useEffect(() => {
    fetch('https://api.mysweetdreams.es/users', { method: 'GET' })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className='w-full h-full bg-yellow-400'>
      holaa caracola
    </div>
  )
}

export default Consejos
