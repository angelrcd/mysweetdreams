import '../css/Resume.css'
import { Calendar } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import Grafica from '../components/Grafica.jsx'

function helloWorld (value, event) {
  console.log(value)
  // Con getDate(),getMonth y getFullYear() obtenemos dia,mes,año del dia que se ha pulsado
  console.log(`${value.getDate()},${value.getMonth()},${value.getFullYear()}`)
}

function Resume () {
  return (
        <main className='w-5/6 h-full grid grid-cols-2 grid-rows-2 '>
            <div className='w-full h-full flex justify-center items-center bg-blue-600'>
              <Grafica />
            </div>
            <div className='w-full h-full bg-red-600'></div>
          <div className='w-full h-full flex justify-center items-center bg-yellow-600'>
              <Calendar className="w-full h-full" onClickDay={helloWorld} />
            </div>
            <div className='w-full h-full bg-green-600'></div>
        </main>
  )
}

export default Resume
