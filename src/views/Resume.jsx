import '../css/Resume.css'
import { Calendar } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import Grafica from '../components/Grafica.jsx'
import { useGetUserSleepDataByDay } from '../modules/useGetSleepDataByDay'
import { getSleepData } from '../modules/getSleepData'
import moment from 'moment/moment'
import 'moment/locale/es'

function Resume () {
  const today = new Date()
  today.setHours(1)
  today.setMinutes(0)
  today.setSeconds(0)
  today.setMilliseconds(0)
  console.log(today.toJSON())
  const { sleepData, isLoading, error } = useGetUserSleepDataByDay(today.toJSON())

  function printTodayInfo (data) {
    const { sleepTime, averageMark, awakenedTime, isRestfulSleep } = getSleepData(data)
    if (data === 'This user has no registered data for this day, please enter sleep data') {
      return (
        <p className='text-base'>Aún no se han introducido datos para este día</p>
      )
    } else {
      return (
        <div>
          <p className='text-base'>Horas totales de sueño:{sleepTime}</p>
          <p className='text-base'>Nota media: {averageMark}</p>
          <p className='text-base'>Número de veces que te has despertado: {awakenedTime}</p>
          <p className='text-base'>{isRestfulSleep ? 'Consideraste esta sesión de sueño reparadora' : 'Consideras que no dormiste bien'}</p>
        </div>
      )
    }
  }
  return (
        <main className='w-full h-screen grid grid-cols-2 grid-rows-2 '>
            <div className='w-full h-full flex justify-center items-center bg-blue-600'>
              <Grafica />
            </div>
            <div className='w-full h-full bg-red-600'></div>
            <div className='w-full h-full flex flex-col justify-center gap-3 items-center bg-yellow-600'>
                <h2 className='text-xl'>Datos de hoy {moment(new Date()).format('LL')}</h2>
                {printTodayInfo(sleepData)}
            </div>
            <div className='w-full h-full bg-green-600'></div>
        </main>
  )
}

export default Resume
