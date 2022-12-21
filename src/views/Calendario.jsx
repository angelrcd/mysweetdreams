import '../css/Calendario.css'
import { Calendar } from 'react-calendar'
import { useEffect, useState } from 'react'
import moment from 'moment'
import 'moment/locale/es'
import { API } from '../../data'
import { getSleepData } from '../modules/getSleepData'

function Calendario () {
  const [clickedDay, setClickedDay] = useState('Haz click en el calendario para obtener la información de sueño de ese día')
  const [isShowingDay, setIsShowingDay] = useState(false)
  const [dayExists, setDayExists] = useState(true)
  const [hoursAsleep, setHoursAsleep] = useState('-')
  const [sleepMark, setSleepMark] = useState('-')
  const [awakenedTime, setAwakenedTime] = useState('-')
  const [restful, setRestFul] = useState('-')
  const [note, setNote] = useState('-')
  // const data = {
  //   name: 'Juan',
  //   email: 'Juan153@gmail.com',
  //   password: 'Cortocircuit29123!',
  //   birthdate: '26/5/2020'
  // }

  // useEffect(() => {
  //   fetch('https://api.mysweetdreams.es/users/add', {
  //     method: 'POST',
  //     body: JSON.stringify(data)
  //   })
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     .catch(error => console.log(error))
  // }, [])

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

  return (
        <main className='w-full h-screen grid grid-cols-1 grid-rows-2'>
          <Calendar onClickDay={handleDayClick} className="mt-10 col-span-3 border-transparent w-full h-full bg-transparent" />
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
