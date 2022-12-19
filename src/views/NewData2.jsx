import '../css/NewData.css'

function NewData2 () {
  return (
    <main className='w-5/6 h-full grid grid-cols-4 grid-rows-3 bg-red-300'>
        <div className='w-auto h-auto flex flex-col justify-center items-center bg-blue-300'>
            <label htmlFor="date">Fecha</label>
            <input className='border-solid border-black border-2' type="date" id="date" />
        </div>
        <div className='w-auto h-auto flex flex-col justify-center items-center'>
            <label htmlFor="initHour">Hora de inicio</label>
            <input className='border-solid border-black border-2' type="time" id="initHour" />
        </div>
        <div className='w-auto h-auto flex flex-col justify-center items-center'>
            <label htmlFor="finishHour">Hora de fin</label>
            <input className='border-solid border-black border-2' type="time" id="finishHour" />
        </div>
        <div className='w-auto h-auto flex flex-col justify-center items-center'>
            <label htmlFor="score">¿Del 1 al 10 que nota le darias a este sueño?</label>
            <input type="range" id="score" min={1} max={10} />
        </div>
        <div className='w-full h-full flex justify-center items-center bg-green-300'>
            <div>
                <h2>¿Te has despertado alguna vez?</h2>
                <input type="checkbox" value={0} />
                <label>No</label><br />
                <input type="checkbox" value={1} />
                <label>Si,una vez</label><br />
                <input type="checkbox" value={2} />
                <label>Si,dos veces o más</label>
            </div>
        </div>
        <div className='w-full h-full flex justify-center items-center bg-yellow-300'>
            <div>
                <h2>¿Diria que ha sido un sueño reparador?</h2>
                <input type="checkbox" value={1} />
                <label>Si</label><br />
                <input type="checkbox" value={0} />
                <label>No</label><br />
            </div>
        </div>
    </main>
  )
}

export default NewData2
