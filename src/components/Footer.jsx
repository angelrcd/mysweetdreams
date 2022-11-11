import './MainPage.css'

function Footer () {
  return (
    <div className="h-48 flex justify-end font-caveat">
      <div className="h-full">
        <div className="flex flex-row-reverse gap-20 mt-10">
          <img className="social h-20 mr-20 cursor-pointer hover:scale-105 duration-500 ease-in-out" src="/icons/instagram.svg" alt="" />
          <img className="social h-20 cursor-pointer hover:scale-105 duration-500 ease-in-out" src="/icons/twitter.svg" alt="" />
          <img className="social h-20 cursor-pointer hover:scale-105 duration-500 ease-in-out" src="/icons/facebook.svg" alt="" />
        </div>
        <p className="mt-5 mr-20 text-center text-2xl">Contáctanos</p>
     </div>
    </div>
  )
}

export default Footer
