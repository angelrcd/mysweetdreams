import '../css/Signup.css'
import { useState } from 'react'
import Navbar from '../components/Navbar'

function Signup () {
  const [email, setEmail] = useState(' ')
  const [passwd, setPasswd] = useState(' ')
  const [passwdrp, setPasswdrp] = useState(' ')

  const handleEmail = event => {
    setEmail(event.target.value)
  }

  const handlePasswd = event => {
    setPasswd(event.target.value)
  }

  const handlePasswdrp = event => {
    setPasswdrp(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
  }

  const sendData = () => {
    if (email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      /**
       * Password rules
       * It should be at least 8 characters long [0 to 9]
       * It must have a number It must have a capital alphabet [A to Z]
       * It must have a small alphabet [a to z]
       * It must have a special character [!, @, #, $, %, ^, &, *]
       */
      if (passwd === passwdrp && passwd.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/)) {
        const data = {
          'user-email': email,
          'user-passwd': passwd
        }
        console.log(data)
      } else {
        console.log('Contraseña no valida')
      }
    } else {
      console.log('email no valido')
    }
  }

  return (
    <main className="w-screen h-screen text-xl">
          <Navbar />
          <header className=" overflow-hidden relative w-full h-5/6 flex justify-center items-center py-24 bg-[url('./img/background-night.jpg')] bg-cover bg-no-repeat bg-top">
          <form className="shadow-md shadow-web-custom1 w-1/3 h-full font-quicksand flex flex-col justify-center items-center rounded-3xl  bg-gray-300/75" onSubmit={handleSubmit}/* bg-web-custom2/75 */>

                <div className="flex flex-col items-center my-3 gap-1">
                    <label className="text-black" htmlFor="email">Email</label>
                    <input className="bg-gray-400 rounded-lg w-96 px-2 focus:bg-gray-300 transition-colors duration-500 placeholder-gray-500 text-center" id="email" placeholder="example@gmail.com" type="email" onChange={handleEmail} />
                </div>

                <div className="flex flex-col items-center my-3 gap-1">
                    <label className="text-black" htmlFor="passwd">Contraseña</label>
                    <input className="bg-gray-400 rounded-lg w-80 px-2 focus:bg-gray-300 transition-colors duration-500 placeholder-gray-500 text-center" id="passwd" placeholder="Enter your password" type="text" onChange={handlePasswd} />
                </div>

                <div className="flex flex-col items-center mt-3 mb-10 gap-1">
                    <label className="text-black" htmlFor="repeat-passwd">Repetir Contraseña</label>
                    <input className="bg-gray-400 rounded-lg w-80 px-2 focus:bg-gray-300 transition-colors duration-500 placeholder-gray-500 text-center" id="repeat-passwd" placeholder="Repeat your password" type="text" onChange={handlePasswdrp} />
                </div>

                <button className="text-black border-none bg-web-custom4 hover:bg-green-500 transition-colors duration-700 py-4 px-9 rounded-3xl" type="submit" onClick={sendData}>Submit</button>
          </form>
        </header>
    </main>
  )
}

export default Signup
