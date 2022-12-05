import '../css/NewData.css'

function NewData () {
  return (
    <main className='w-5/6 h-full flex flex-col'>
        <div className='w-full h-1/3 p-5'>
            <h1>Añadir datos</h1>
            <div className='w-full h-28 pt-1 flex justify-around items-center gap-2'>
                <div className='w-auto h-auto  flex flex-col'>
                    <label htmlFor="date">Fecha</label>
                    <input className='border-solid border-black border-2' type="date" id="date" />
                </div>
                <div className='w-auto h-auto flex flex-col'>
                    <label htmlFor="initHour">Hora de inicio</label>
                    <input className='border-solid border-black border-2' type="time" id="initHour" />
                </div>
                <div className='w-auto h-auto flex flex-col'>
                    <label htmlFor="finishHour">Hora de fin</label>
                    <input className='border-solid border-black border-2' type="time" id="finishHour" />
                </div>
                <div className='w-auto h-auto flex flex-col'>
                    <label htmlFor="score">¿Del 1 al 10 que nota le darias a este sueño?</label>
                    <input type="range" id="score" min={1} max={10} />
                </div>

            </div>
        </div>
        <div className='w-full h-2/3 grid grid-cols-2 grid-rows-2 bg-blue-600'>
            <div className='w-full h-full bg-pink-500'>
                <h2>¿Te has despertado alguna vez?</h2>
                <input type="checkbox" value={0} />
                <label>No</label><br />
                <input type="checkbox" value={1} />
                <label>Si,una vez</label><br />
                <input type="checkbox" value={2} />
                <label>Si,dos veces o más</label>

                <h3>¿Diria que ha sido un sueño reparador?</h3>
                <input type="checkbox" value={1} />
                <label>Si</label><br />
                <input type="checkbox" value={0} />
                <label>No</label><br />
            </div>
            <div className='w-full h-full row-span-3 bg-amber-800'>
                <h2>Otras observaciones</h2>
                <textarea cols="30" rows="10"></textarea>
            </div>
        </div>
    </main>
  )
}

export default NewData
