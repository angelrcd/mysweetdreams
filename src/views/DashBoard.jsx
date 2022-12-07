import { useParams } from 'react-router-dom'
import '../css/MainPage.css'

function Dashboard () {
  const params = useParams()
  const userId = params.id
  const APIUrl = 'http://localhost:3000/users/' + userId
  return (
    <>
      <h1>Dashboard con ID: {userId}</h1>
    </>
  )
}

export default Dashboard
