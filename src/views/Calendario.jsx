import '../css/Calendario.css'
import { Calendar } from 'react-calendar'

function Calendario () {
  return (
        <main className='w-5/6 h-full grid grid-cols-2 grid-rows-2 bg-orange-700'>
          <Calendar className="w-full h-full" />
          <div className='w-full h-full row-span-3 bg-blue-400'>

          </div>
          <div className='w-full h-full bg-violet-600'>

          </div>
        </main>

  )
}

export default Calendario
