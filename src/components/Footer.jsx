import '../css/MainPage.css'

function Footer () {
  return (
    <footer className="h-fit w-screen flex justify-end font-caveat bg-white dark:bg-gray-900 dark:text-gray-100">
    <div className="flex flex-wrap gap-3 lg:gap-8 items-center justify-center py-1 lg:py-3">
      <p className="text-center text-xl lg:text-2xl">Contáctanos</p>
      <div className="flex flex-row-reverse gap-4 px-5">
        <a href="https://www.instagram.com/mysweetdreamsapp/" target="_blank" rel="noreferrer">
          <img className="social filter dark:invert h-4 lg:h-8 cursor-pointer hover:scale-105 duration-500 ease-in-out"
            src="/icons/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://twitter.com/mySweetDreamsAp" target="_blank" rel="noreferrer">
          <img className="social filter dark:invert h-4 lg:h-8 cursor-pointer hover:scale-105 duration-500 ease-in-out"
            src="/icons/twitter.svg" alt="Twitter" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100088317490253" target="_blank" rel="noreferrer">
          <img className="social filter dark:invert h-4 lg:h-8 cursor-pointer hover:scale-105 duration-500 ease-in-out"
            src="/icons/facebook.svg" alt="Facebook" />
        </a>
      </div>

    </div>
  </footer>
  )
}

export default Footer
