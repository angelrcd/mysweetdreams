import '../css/Calendario.css'
import { Calendar } from 'react-calendar'
import { useEffect } from 'react'

function Calendario () {
  const data = {
    name: 'Juan',
    email: 'Juan153@gmail.com',
    password: 'Cortocircuit29123!',
    birthdate: '26/5/2020'
  }

  useEffect(() => {
    fetch('https://api.mysweetdreams.es/users/add', {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }, [])

  return (
        <main className='w-full h-screen grid grid-cols-2 grid-rows-2'>
          <Calendar className="w-full h-full" />
          <div className='w-full h-full flex flex-col justify-around items-center  row-span-3 p-4'>
            <section className='w-full h-1/6 flex justify-center items-center border-solid border-black border-2'>
              <h2>Jueves 16 de Noviembre</h2>
            </section>
            <section className='w-full h-1/6 p-2 border-solid border-blue-500 border-2'>
              <div className='w-full flex justify-start items-center gap-2'>
                <img className='w-8' src="/icons/info_icon.svg" alt="" />
                <p className='text-blue-500'>Resumen de sueño de este día</p>
              </div>
              <div className='w-ful'>
                  <p className='text-blue-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Cursus vitae congue
                  </p>
              </div>
            </section>
            <section className='w-full h-1/6 p-2 border-solid border-green-500 border-2'>
              <div className='w-full flex justify-start items-center gap-2'>
                <img className='w-8' src="/icons/checked_icon.svg" alt="" />
                <p className='text-green-500'>Cosas que has mejorado</p>
              </div>
              <div className='w-ful'>
                <p className='text-green-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Cursus vitae congue
                </p>
              </div>
            </section>
            <section className='w-full h-1/6 p-2 border-solid border-orange-500 border-2'>
              <div className='w-full flex justify-start items-center gap-2'>
                <img className='w-8' src="/icons/warning_icon.svg" alt="" />
                <p className='text-orange-500'>Cosas por mejorar</p>
              </div>
              <div className='w-ful'>
                <p className='text-orange-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Cursus vitae congue
                </p>
              </div>
            </section>
            <section className='w-full h-1/6 p-2 border-solid border-red-500 border-2'>
              <div className='w-full flex justify-start items-center gap-2'>
                <img className='w-8' src="/icons/error_icon.svg" alt="" />
                <p className='text-red-500'>Cosas en las que has empeorado</p>
              </div>
              <div className='w-ful'>
                <p className='text-red-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Cursus vitae congue
                </p>
              </div>
            </section>
          </div>
          <div className='w-full h-full flex justify-around items-center'>
            <div className='w-1/4 h-1/3 border-solid border-black border-2'>
              <div className='w-full h-1/2 flex justify-center items-center'>
                  <span className='text-4xl text-violet-600'>8h</span>
              </div>
              <div className='w-full h-1/2 text-center flex p-2 justify-center items-center'>
                <span className='text-xl'>Horas dormidas este dia</span>
              </div>
            </div>
            <div className='w-1/3 h-1/3 flex flex-col justify-center items-center border-solid border-black border-2'>
              <div className='w-full flex justify-center items-center'>
                <span className='text-base'>Dormiste mejor que el</span>
              </div>
              <div className='w-full flex justify-center items-center'>
                <span className='text-4xl text-violet-600'>99%</span>
              </div>
              <div className='w-full flex justify-center items-center'>
                <span className='text-base'>De nuestros usuarios</span>
              </div>
            </div>
            <div className='w-1/4 h-1/3 border-solid border-black border-2'>
              <div className='w-full h-1/2 flex justify-center items-center'>
                <span className='text-4xl text-violet-600'>2</span>
              </div>
              <div className='w-full h-1/2 text-center flex p-2 justify-center items-center'>
                <span className='text-base'>Total de veces que te despertaste</span>
              </div>
            </div>
          </div>
        </main>

  )
}

export default Calendario
