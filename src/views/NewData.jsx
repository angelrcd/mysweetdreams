import '../css/NewData.css'
import { useState } from 'react'
import { API } from '../../data'

function NewData () {
  const [startDate, setStartDate] = useState('')
  const [finishDate, setFinishDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [sleepScore, setSleepScore] = useState('')
  const [timesAwakened, setTimesAwakened] = useState('0')
  const [restFul, setRestFul] = useState('')
  const [comments, setComments] = useState('')

  function handleSubmit (event) {
    event.preventDefault()

    let day = new Date(`${startDate} ${startTime}`)
    const start = day
    day = new Date(startDate)
    const end = new Date(`${finishDate} ${endTime}`)
    const mark = parseInt(sleepScore)
    const timesAwakened_ = parseInt(timesAwakened)

    // JSON que incluye los datos introducidos en el formulario, actualizados en tiempo real
    const jsonData = {
      day,
      start,
      end,
      mark,
      timesAwakened: timesAwakened_,
      restfulSleep: restFul,
      notes: comments
    }
    // Información sobre el tipo de request que se hará en el fetch
    const options = {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    }

    fetch(API.SLEEP.POST, options)
      .then(response => response.text())
      .then(data => console.log(data))
  }

  return (
    <main className='w-full h-screen flex flex-col'>
        <div className='w-full h-1/3 flex justify-center items-center bg-blue-300'>
            <div className='w-full h-28 pt-1 flex justify-around items-center gap-2'>
                <div className='w-auto h-auto  flex flex-col'>
                    <label className='text-lg text-black' htmlFor="date">Fecha Comienzo sueño</label>
                    <input className='border-solid border-black border-2 text-black' type="date" id="date" onInput={ev => setStartDate(ev.target.value)} />
                </div>
                <div className='w-auto h-auto  flex flex-col'>
                    <label className='text-lg text-black' htmlFor="date">Fecha Fin sueño</label>
                    <input className='border-solid border-black border-2 text-black' type="date" id="date" onInput={ev => setFinishDate(ev.target.value)} />
                </div>
                <div className='w-auto h-auto flex flex-col'>
                    <label className='text-lg text-black' htmlFor="initHour">Hora de inicio</label>
                    <input className='border-solid border-black border-2 text-black' type="time" id="initHour" onInput={ev => setStartTime(ev.target.value)} />
                </div>
                <div className='w-auto h-auto flex flex-col'>
                    <label className='text-lg text-black' htmlFor="finishHour">Hora de fin</label>
                    <input className='border-solid border-black border-2 text-black' type="time" id="finishHour" onInput={ev => setEndTime(ev.target.value)} />
                </div>
                <div className='w-auto h-auto flex flex-col'>
                    <label className='text-lg text-black' htmlFor="score">¿Del 1 al 10 que nota le darias a este sueño?</label>
                    <input type="range" id="score" min={1} max={10} onMouseUp={ev => setSleepScore(ev.target.value)} />
                    <div>{sleepScore}</div>
                </div>

            </div>
        </div>
        <div className='w-full h-2/3 grid grid-cols-2 grid-rows-2 bg-red-300'>
            <div className='w-full h-full flex justify-center items-center bg-green-300'>
                <div className='w-1/2 h-auto'>
                    <h2 className='text-black text-lg'>¿Te has despertado alguna vez?</h2>
                    <input className='w-4 h-4' type="radio" defaultChecked={true} value={0} name="woken_up" onInput={ev => setTimesAwakened(ev.target.value)} />
                    <label className='text-black ml-1'>No</label><br />
                    <input className='w-4 h-4' type="radio" value={1} name="woken_up" onInput={ev => setTimesAwakened(ev.target.value)} />
                    <label className='text-black ml-1'>Si,una vez</label><br />
                    <input className='w-4 h-4' type="radio" value={2} name="woken_up" onInput={ev => setTimesAwakened(ev.target.value)} />
                    <label className='text-black ml-1'>Si,dos veces o más</label>
                </div>
            </div>
            <div className='w-full h-full flex justify-center items-center row-span-3'>
                <div>
                    <h2 className='text-black text-lg'>Otras observaciones</h2>
                    <textarea className='border-solid border-black border-2 text-black' cols="30" rows="10" onInput={ev => setComments(ev.target.value)}></textarea>
                    <button type="submit" onClick={ev => handleSubmit(ev)}>Enviar datos</button>
                </div>
            </div>

            <div className='w-full h-full flex justify-center items-center bg-yellow-300'>
                <div className='w-1/2 h-auto'>
                    <h3 className='text-black text-lg'>¿Diria que ha sido un sueño reparador?</h3>
                    <input className='w-4 h-4' type="radio" name={'rest_full_sleep'} value={true} onInput={ev => setRestFul(ev.target.value)} />
                    <label className='text-black ml-1'>Si</label><br />
                    <input className='w-4 h-4' type="radio" name={'rest_full_sleep'} value={false} onInput={ev => setRestFul(ev.target.value)} />
                    <label className='text-black ml-1'>No</label><br />
                </div>
            </div>
        </div>
    </main>
  )
}

export default NewData
