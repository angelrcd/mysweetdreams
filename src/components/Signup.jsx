import './Signup.css'

function Signup () {
  return (
    <main className="w-screen h-screen text-xl">
          <nav className="w-full h-1/6 font-caveat text-3xl bg-web-custom1 flex justify-between items-center px-16">
            <a className="text-web-custom3 hover:text-purple-500" href="#">SWEETDREAMS</a>
            <div className="h-full w-96 flex justify-around items-center">
                <a className="text-web-custom3 hover:text-purple-500" href="#">¿Quiénes somos?</a>
                <a className="text-web-custom3 hover:text-purple-500" href="#">Sign in</a>
                <a className="text-web-custom3 hover:text-purple-500" href="#">Sign up</a>
            </div>
        </nav>
        <header className="w-full h-5/6 flex justify-center items-center py-24 bg-[url('./img/background-night.jpg')] bg-cover bg-no-repeat bg-top">
        <div className="shadow-md shadow-web-custom1 w-1/3 h-full font-quicksand flex flex-col justify-center items-center rounded-3xl  bg-gray-300/75"/* bg-web-custom2/75 */>

                <div className="flex flex-col items-center my-3 gap-1">
                    <label className="text-black" htmlFor="email">Email</label>
                    <input className="bg-gray-400 rounded-lg w-96 px-2 focus:bg-gray-300 transition-colors duration-500 placeholder-gray-500 text-center" id="email" placeholder="example@gmail.com" type="email" />
                </div>

                <div className="flex flex-col items-center my-3 gap-1">
                    <label className="text-black" htmlFor="passwd">Password</label>
                    <input className="bg-gray-400 rounded-lg w-80 px-2 focus:bg-gray-300 transition-colors duration-500 placeholder-gray-500 text-center" id="passwd" placeholder="Enter your password" type="password" />
                </div>

                <div className="flex flex-col items-center mt-3 mb-10 gap-1">
                    <label className="text-black" htmlFor="repeat-passwd">Repeat Password</label>
                    <input className="bg-gray-400 rounded-lg w-80 px-2 focus:bg-gray-300 transition-colors duration-500 placeholder-gray-500 text-center" id="repeat-passwd" placeholder="Repeat your password" type="password" />
                </div>

                <button className="text-black border-none bg-web-custom4 hover:bg-green-500 transition-colors duration-700 py-4 px-9 rounded-3xl" type="submit">Submit</button>
            </div>
        </header>
    </main>
  )
}

export default Signup
