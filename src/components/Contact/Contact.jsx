import React,{useState} from 'react'

const Contact = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [subject,setSubject]=useState('');
  const [message,setMessage]=useState('');

  const submitHandler=(e)=>{

    e.preventDefault();
    console.log(name,email,subject,message);


  }

  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <div>
        <form onSubmit={submitHandler}>
          <div>
            <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Name' required />
            <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email' required />
          </div>
          <input onChange={(e)=>setSubject(e.target.value)} type="text" placeholder='Subject' required />
          <textarea onChange={(e)=>setMessage(e.target.value)} name="" id="" cols="30" rows="10" placeholder='Messsage' required></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;