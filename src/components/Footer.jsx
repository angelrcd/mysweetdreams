import '../css/MainPage.css'

function Footer () {
  return (
    <footer className="h-fit flex justify-end font-caveat dark:bg-gray-900 dark:text-gray-100">
      <div className="h-full">
        <div className="flex flex-row-reverse gap-8 pt-3">
          <img className="social h-8 mr-20 cursor-pointer hover:scale-105 duration-500 ease-in-out" src="/icons/instagram.svg" alt="" />
          <img className="social h-8 cursor-pointer hover:scale-105 duration-500 ease-in-out" src="/icons/twitter.svg" alt="" />
          <img className="social h-8 cursor-pointer hover:scale-105 duration-500 ease-in-out" src="/icons/facebook.svg" alt="" />
        </div>
        <p className=" mr-20 text-center text-2xl">Contáctanos</p>
     </div>
    </footer>
  )
}

export default Footer
