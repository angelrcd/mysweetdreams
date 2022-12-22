import { Calendar } from 'react-calendar'
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
  const { sleepData, isLoading, error } = useGetUserSleepDataByDay(today.toJSON())

  function printTodayInfo (data) {
    const { sleepTime, averageMark, awakenedTime, isRestfulSleep, note } = getSleepData(data)
    if (data === 'This user has no registered data for this day, please enter sleep data') {
      return (
        <p className='text-base'>Aún no se han introducido datos para este día</p>
      )
    } else {
      return (
        <div>
          <p className='text-base'>Horas totales de sueño: {sleepTime}</p>
          <p className='text-base'>Nota media: {averageMark}</p>
          <p className='text-base'>Número de veces que te has despertado: {awakenedTime}</p>
          <p className='text-base'>{isRestfulSleep ? 'Consideraste esta sesión de sueño reparadora' : 'Consideras que no dormiste bien'}</p>
          <div className='mt-5 h-1/2 border border-blue-500 rounded-3xl'>
            <div className='flex items-center ml-3 mt-3 gap-3'><img className='w-8' src="/icons/info_icon.svg" alt="" /><span className='text-blue-500 text-xl'>Nota</span></div>
            <p className='text-lg ml-6 mt-1'>{note}</p>
          </div>
        </div>
      )
    }
  }

  return (
        <main className='w-fit h-screen flex'>
            <div className='w-full h-full flex flex-col p-10'>
                <h2 className='text-xl'>Datos de hoy, {moment(new Date()).format('LL')}</h2>
                {printTodayInfo(sleepData)}
            </div>
            <section className='flex flex-col'>
              <div className='w-full h-1/2 flex justify-center justify-items-center'>
              </div>
              <div className='w-full h-1/2'></div>
            </section>
        </main>
  )
}

export default Resume
