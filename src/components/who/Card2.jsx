import '../MainPage.css'

function Card2 (props) {
  return (
    <>
      <div className='p-10 w-11/12 flex text-xl border-b-2 border-black'>
        <div className='h-[600px] w-2/3 flex justify-center items-center'>
          <p>{props.description}</p>
        </div>
        <div className='h-[600px] w-1/3 flex flex-col items-center justify-center gap-3'>
          <img className='rounded-full' src={props.img} alt="" />
          <h2 className='font-semibold text-3xl'>{props.name}</h2>
          <p>{props.email}</p>
          <p>{props.github}</p>
        </div>
      </div>
    </>
  )
}

export default Card2
