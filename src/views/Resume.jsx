import '../css/Resume.css'
import { Calendar } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import Grafica from '../components/Grafica.jsx'

function helloWorld (value, event) {
  console.log(value)
  // Con getDate(),getMonth y getFullYear() obtenemos dia,mes,año del dia que se ha pulsado
  console.log(`${value.getDate()},${value.getMonth()},${value.getFullYear()}`)
}

const Sleepdata = {
  userId: '7a0eed16- 9430 - 4d68-901f - c0d4c1c3bf00', // string,
  day: '2007-07-09T05:51:59.390Z', // Date,
  start: '1992-03-08T15:13:16.688Z', // Date,
  end: '', // Date,
  mark: 7, // number,
  timesAwakened: 2, // number,
  restfulSleep: false, // boolean,
  notes: 'He dormido del carajo mi armah'// string
}

function Resume () {
  return (
        <main className='w-full h-screen grid grid-cols-2 grid-rows-2 '>
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
