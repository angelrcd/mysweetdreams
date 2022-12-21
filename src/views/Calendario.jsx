import '../css/Calendario.css'
import { Calendar } from 'react-calendar'
import { useEffect, useState } from 'react'
import moment from 'moment'
import 'moment/locale/es'
import { API } from '../../data'
import { getSleepData } from '../modules/getSleepData'

function Calendario () {
  const [clickedDay, setClickedDay] = useState('Haz click en el calendario para obtener la información de sueño de ese día')
  const [hoursAsleep, setHoursAsleep] = useState('-')
  const [sleepMark, setSleepMark] = useState('-')
  const [awakenedTime, setAwakenedTime] = useState('-')
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
          setHoursAsleep(0)
          setSleepMark(0)
          setAwakenedTime(0)
        } else {
          const { sleepTime, averageMark, awakenedTime, isRestfulSleep, note } = getSleepData(data)
          setHoursAsleep(sleepTime)
          setSleepMark(averageMark)
          setAwakenedTime(awakenedTime)
        }
      })
    setClickedDay(moment(value).format('LL'))
  }

  return (
        <main className='w-full h-screen grid grid-cols-1 grid-rows-2'>
          <Calendar onClickDay={handleDayClick} className="mt-10 col-span-3 border-transparent w-full h-full bg-transparent" />
          <section className='flex'>
            <div className='w-1/2 h-full flex flex-col justify-around items-center row-span-3 p-4'>
              <section className='w-full h-1/6 flex justify-center items-center'>
                <h2 className='text-3xl'>{clickedDay}</h2>
              </section>
              <section>
                <div className='w-full text-left'><span className='text-blue-500 text-3xl mx-2'>{hoursAsleep}</span> Horas dormidas este día</div>
                <p className='w-full text-left'><span className='text-blue-500 text-3xl mx-2'>{sleepMark}</span> Nota de este día</p>
                <p className='w-full text-left'><span className='text-blue-500 text-3xl mx-2'>{awakenedTime}</span> Horas dormidas este día</p>
                <p className='w-full text-left'><span className='text-blue-500 text-3xl mx-2'>{hoursAsleep}</span> Horas dormidas este día</p>
              </section>
            </div>
            <div className='w-full h-full flex justify-around items-center'>
              <div className='w-1/4 h-1/3'>
                <div className='w-full h-1/2 flex justify-center items-center'>
                    <span className='text-4xl text-violet-600'>{hoursAsleep}</span>
                </div>
                <div className='w-full h-1/2 text-center flex p-2 justify-center items-center'>
                  <span className='text-xl'>Horas dormidas este dia</span>
                </div>
              </div>
              <div className='w-1/3 h-1/3 flex flex-col justify-center items-center'>
                <div className='w-full flex justify-center items-center'>
                </div>
                <div className='w-full flex justify-center items-center'>
                  <span className='text-4xl text-violet-600'>{sleepMark}</span>
                </div>
                <div className='w-full flex justify-center items-center'>
                  <span className='text-base'>Nota de este día</span>
                </div>
              </div>
              <div className='w-1/4 h-1/3'>
                <div className='w-full h-1/2 flex justify-center items-center'>
                  <span className='text-4xl text-violet-600'>{awakenedTime}</span>
                </div>
                <div className='w-full h-1/2 text-center flex p-2 justify-center items-center'>
                  <span className='text-base'>Total de veces que te despertaste</span>
                </div>
              </div>
            </div>
          </section>
        </main>

  )
}

export default Calendario
