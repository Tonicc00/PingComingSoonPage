import { useState } from "react"

let pattern = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$";

const Form = () => {

  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value)
  }
    const handleSubmit = (e) => {
    e.preventDefault();
    if(text.match(pattern)){
      setText(alert(`You have successfully subscribed to: ${text}`));
    } else if(!text.match(pattern)) {
      setText(alert(`Please enter valid email`));
    }
  }
  
  return (
    <form className='form-container' >
      <input onChange={handleChange} value={text} type='email' placeholder='Insert your email address' />
      <button  onClick={handleSubmit} type='submit'>Notify Me</button>
    </form>
  )
}

export default Form