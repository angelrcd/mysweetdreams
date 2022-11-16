import '../css/Dashboard.css'

function Dashboard () {
  return (
    <div className='w-screen h-screen flex'>
        <nav className='w-1/6 h-full bg-lime-300 flex flex-col justify-center items-center'>
            <section title='profile-info' className='w-full h-1/2 bg-teal-300'>
                <div className='w-full h-1/2 flex justify-center items-center p-2'>
                    <img src="/img/bogallo_profile.jpg" alt="" className='rounded-full max-w-full max-h-full' />
                </div>
                <div className='w-full h-1/2 p-2 flex flex-col items-center gap-2 bg-slate-500'>
                    <section className='w-full h-1/3 rounded-3xl flex justify-center items-center bg-emerald-500'>
                        <h3 title='Nombre de usuario'>Bogallo</h3>
                    </section>
                      <section className='w-full h-1/3 rounded-3xl flex justify-center items-center bg-amber-500'>
                        <h3 title='Email'>antonio.bogallo@gmail.com</h3>
                    </section>
                      <section className='w-full h-1/3 rounded-3xl flex justify-center items-center bg-fuchsia-400'>
                        <h3 title='Edad'>26</h3>
                    </section>
                </div>
            </section>
            <section title='settings' className='w-full h-1/2 bg-pink-400'>

            </section>
        </nav>
        <main className='w-5/6 h-full bg-yellow-200'>

        </main>
    </div>
  )
}

export default Dashboard
