import '../css/Input.css'

function Input (props) {
  return (
    <label htmlFor={props.id}>{props.header}
      <input id={props.id} name={props.id} type={props.type} placeholder={props.placeholder} pattern={props.pattern}
      title={props.title} required min={props.min} max={props.max} value={props.value} onInput={props.onInput} maxLength={props.maxlength} minLength={props.minlength}
      className='form bg-gray-200 dark:bg-[#0a0a23] w-full rounded-md focus:shadow-outline py-2 px-5' />
    </label>
  )
}

export default Input
