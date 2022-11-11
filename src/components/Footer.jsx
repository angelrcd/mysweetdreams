import './MainPage.css'

function Footer () {
  return (
    <div className="h-48 flex justify-end font-bluetea">
      <div className="h-full">
        <div className="flex flex-row-reverse gap-20 mt-10">
          <img className="h-20 mr-20" src="/icons/instagram.svg" alt="" />
          <img className="h-20" src="/icons/twitter.svg" alt="" />
          <img className="h-20" src="/icons/facebook.svg" alt="" />
        </div>
        <p className="mt-5 mr-20 text-center">Contactanos</p>
     </div>
    </div>
  )
}

export default Footer
