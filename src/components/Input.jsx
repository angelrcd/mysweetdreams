import '../css/Input.css'

function Input (props) {
  return (
        <input type={props.type} name={props.name} id={props.id} placeholder={props.placeholder} onChange={props.onChange} className="w-80 h-20 bg-gray-100 border-2 border-black rounded-3xl shadow-input px-5 font-quicksand text-xl"/>
  )
}

export default Input
