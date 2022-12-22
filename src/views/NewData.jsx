import { useState } from 'react'
import { API } from '../../data'

function NewData () {
  const [startDate, setStartDate] = useState('')
  const [finishDate, setFinishDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [sleepScore, setSleepScore] = useState(10)
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
      .then(response => {
        if (response.status === 200) {
          alert('Los datos se han introducido correctamente')
        } else {
          alert('Ha ocurrido algún error al enviar los datos')
        }
        return response.text()
      })
      .then(data => console.log(data))
  }

  return (
    <main className='w-full h-screen flex flex-col'>
        <div className='w-full h-1/3 flex justify-center items-center'>
            <div className='w-full h-28 pt-1 flex justify-around items-center gap-2'>
                <div className='w-auto h-auto  flex flex-col'>
                    <label className='text-2xl text-gray-200' htmlFor="date">Fecha Comienzo sueño</label>
                    <input className='border-solid border-black border-2 text-gray-900' type="date" id="date" onInput={ev => setStartDate(ev.target.value)} />
                </div>
                <div className='w-auto h-auto  flex flex-col'>
                    <label className='text-2xl text-gray-200' htmlFor="date">Fecha Fin sueño</label>
                    <input className='border-solid border-black border-2 text-gray-900' type="date" id="date" onInput={ev => setFinishDate(ev.target.value)} />
                </div>
                <div className='w-auto h-auto flex flex-col'>
                    <label className='text-2xl text-gray-200' htmlFor="initHour">Hora de inicio</label>
                    <input className='border-solid border-black border-2 text-gray-900' type="time" id="initHour" onInput={ev => setStartTime(ev.target.value)} />
                </div>
                <div className='w-auto h-auto flex flex-col'>
                    <label className='text-2xl text-gray-200' htmlFor="finishHour">Hora de fin</label>
                    <input className='border-solid border-black border-2 text-gray-900' type="time" id="finishHour" onInput={ev => setEndTime(ev.target.value)} />
                </div>
            </div>
        </div>
        <div className='w-full h-2/3 flex'>
            <div className='flex flex-col gap-7 items-center justify-center'>
              <div className='w-auto h-auto flex flex-col ml-28'>
                <label className='text-lg text-gray-200' htmlFor="score">¿Del 1 al 10 que nota le darias a este sueño?</label>
                <input type="range" id="score" min={1} max={10} onMouseUp={ev => setSleepScore(ev.target.value)} />
                <div>{sleepScore}</div>
              </div>
              <div className='w-full h-fit flex justify-center items-center'>
                  <div className='w-1/2 h-auto'>
                      <h2 className='text-gray-200 text-2xl text-left whitespace-nowrap'>¿Te has despertado alguna vez?</h2>
                      <input className='w-4 h-4' type="radio" defaultChecked={true} value={0} name="woken_up" onInput={ev => setTimesAwakened(ev.target.value)} />
                      <label className='text-gray-200 ml-1'>No</label><br />
                      <input className='w-4 h-4' type="radio" value={1} name="woken_up" onInput={ev => setTimesAwakened(ev.target.value)} />
                      <label className='text-gray-200 ml-1'>Si,una vez</label><br />
                      <input className='w-4 h-4' type="radio" value={2} name="woken_up" onInput={ev => setTimesAwakened(ev.target.value)} />
                      <label className='text-gray-200 ml-1'>Si,dos veces o más</label>
                  </div>
              </div>
              <div className='w-full h-fit flex justify-center items-center'>
                  <div className='w-1/2 h-auto'>
                      <h3 className='text-gray-200 text-2xl whitespace-nowrap'>¿Dirias que ha sido un sueño reparador?</h3>
                      <input className='w-4 h-4' type="radio" name={'rest_full_sleep'} value={true} onInput={ev => setRestFul(ev.target.value)} />
                      <label className='text-gray-200 ml-1'>Si</label><br />
                      <input className='w-4 h-4' type="radio" name={'rest_full_sleep'} value={false} onInput={ev => setRestFul(ev.target.value)} />
                      <label className='text-gray-200 ml-1'>No</label><br />
                  </div>
              </div>
            </div>
            <div className='w-full h-full flex justify-center items-center row-span-3'>
                <div className='flex flex-col items-center gap-2'>
                    <h2 className='text-gray-200 text-2xl self-start'>Otras observaciones:</h2>
                    <textarea className='border-solid border-black border-2 text-gray-900' cols="30" rows="10" onInput={ev => setComments(ev.target.value)}></textarea>
                    <button className='button-web bg-web-boton text-gray-900' type="submit" onClick={ev => handleSubmit(ev)}>Enviar datos</button>
                </div>
            </div>

        </div>
    </main>
  )
}

export default NewData
