import '../css/Calendario.css'
import { Calendar } from 'react-calendar'
import { useEffect, useState } from 'react'
import moment from 'moment'
import 'moment/locale/es'
import { API } from '../../data'
import { getSleepData } from '../modules/getSleepData'
import { useGetAllSleepData } from '../modules/useGetAllSleepData'
import { Oval } from 'react-loader-spinner'

function Calendario () {
  const [clickedDay, setClickedDay] = useState('Haz click en el calendario para obtener la información de sueño de ese día')
  const [isShowingDay, setIsShowingDay] = useState(false)
  const [dayExists, setDayExists] = useState(true)
  const [hoursAsleep, setHoursAsleep] = useState('-')
  const [sleepMark, setSleepMark] = useState('-')
  const [awakenedTime, setAwakenedTime] = useState('-')
  const [restful, setRestFul] = useState('-')
  const [note, setNote] = useState('-')

  const { sleepData, isLoading, error } = useGetAllSleepData()

  function getArrayDays (sleepyData) {
    console.log(sleepyData)
    const result = sleepyData.map(data => data.day)
    const dates = result.map(data => data.slice(0, 10))
    console.log(dates)
    return dates
  }

  function handleDayClick (value, event) {
    setIsShowingDay(true)
    const date = new Date(value)
    date.setHours(1)
    console.log(date.toJSON())
    const options = {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ day: date })
    }
    fetch(API.SLEEP.DAY, options)
      .then(response => {
        return response
      })
      .then(jsonResult => jsonResult.json())
      .then(data => {
        console.log(data)
        if (data === 'This user has no registered data for this day, please enter sleep data') {
          setHoursAsleep('-')
          setSleepMark('-')
          setAwakenedTime('-')
          setRestFul('')
          setNote('No ha datos de sueño para este día')
          setDayExists(false)
        } else {
          setDayExists(true)
          const { sleepTime, averageMark, awakenedTime, isRestfulSleep, note } = getSleepData(data)
          setHoursAsleep(sleepTime)
          setSleepMark(averageMark)
          setAwakenedTime(awakenedTime)
          setRestFul(isRestfulSleep)
          setNote(note)
        }
      })
    setClickedDay(moment(value).format('LL'))
  }

  function hoursToHHMM (hours) {
    if (hours === '-') {
      return hours
    }
    const h = String(Math.trunc(hours)).padStart(2, '0')
    const m = String(Math.abs(Math.round((hours - h) * 60))).padStart(2, '0')
    return h + ':' + m
  }

  if (isLoading) {
    return (
      <div className='mt-40 w-full h-screen flex item-center justify-center'>
        <Oval
          height={220}
          width={220}
          color="#60a5fa"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor="60a5fa"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    )
  }

  if (error) {
    <div>Error</div>
  }

  return (
        <main className='w-full h-screen grid grid-cols-1 grid-rows-2'>
          <Calendar
            onClickDay={handleDayClick}
            className="mt-10 col-span-3 border-transparent w-full h-full bg-transparent"
            tileClassName={({ date, view }) => {
              if (getArrayDays(sleepData).find(x => x === moment(date).format('YYYY-MM-DD'))) {
                return 'highlight'
              }
            }}
          />
          <section className='flex'>
            <div className='w-1/2 h-full flex flex-col justify-around items-center row-span-3 p-4'>
              <section className='w-full h-1/6 flex justify-center items-center'>
                <h2 className='text-3xl'>{clickedDay}</h2>
              </section>
              <section className={`${isShowingDay ? '' : 'hidden'}`}>
                <div className='w-full text-left'><span className='text-blue-500 text-3xl mx-2'>{hoursToHHMM(hoursAsleep)}</span> Horas dormidas este día</div>
                <p className='w-full text-left'><span className='text-blue-500 text-3xl mx-2'>{sleepMark}</span> Nota de este día</p>
                <p className='w-full text-left'><span className='text-blue-500 text-3xl mx-2'>{awakenedTime}</span> Número de veces que te despertaste</p>
                <p className='w-full text-left'><span className={`${dayExists ? '' : 'hidden'} text-blue-500 text-3xl mx-2`}>{restful ? 'Dormiste bien este día' : 'Dormiste mal este día'}</span></p>
              </section>
            </div>
            <div className={`${isShowingDay ? '' : 'hidden'} w-full h-full box-border flex justify-center items-center`}>
              <div className=' border border-blue-500 rounded-3xl w-5/6 h-5/6'>
                <div className='flex items-center ml-3 mt-3 gap-3'><img className='w-8' src="/icons/info_icon.svg" alt="" /><span className='text-blue-500 text-xl'>Nota</span></div>
                <p className='text-lg ml-6 mt-1'>{note}</p>
              </div>
            </div>
          </section>
        </main>

  )
}

export default Calendario
