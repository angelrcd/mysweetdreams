import '../css/MainPage.css'

function CardWho (props) {
  return (
    <>
      <div className="p-3 mt-8 md:mt-20 flex flex-col md:flex-row gap-5 w-screen border-b-2 border-black dark:border-gray-50">
        <div className={`flex flex-col p-3 items-center justify-center gap-3 ${props.order}`}>
          <img className='rounded-full h-32 w-32' src={props.img} alt="" />
          <h2 className='font-semibold text-lg text-center'>{props.name}</h2>
          <p className='text-center'>{props.email}</p>
          <p className='text-center'>{props.github}</p>
        </div>
        <p className='text-sm mx-4 md:mx-10'>{props.description}</p>
      </div>
    </>
  )
}

export default CardWho
