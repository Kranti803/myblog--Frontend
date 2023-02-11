import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import user from '../../../assets/user.png';
import { useDispatch } from 'react-redux';
import { register } from "../../../redux/actions/userActions";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imagePrev, setImagePrev] = useState(user);
  const [image, setImage] = useState("");

  const changeImageHandler=(e)=>{
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend=()=>{
      setImagePrev(reader.result);
      setImage(file);
    }

  }
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const submitHandler = async(e) => {
    e.preventDefault();
    
    const myForm = new FormData();

    myForm.append('name',name);
    myForm.append('email',email);
    myForm.append('password',password);
    myForm.append('file',image);

    await dispatch(register(myForm))
    navigate('/');

  };


  return (
    <section className="signup">
      <h2>Sign Up</h2>
      <div>
        <form onSubmit={submitHandler}>
          <div className="avtar">
            <img src={imagePrev} alt="" />
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input onChange={(e)=>setName(e.target.value)} type="text" value={name} placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" value={email} placeholder="Your Email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} type="password" value={password} placeholder="Your Password" id="password" />
          </div>
          <div>
            <label htmlFor="avtar">Choose Avtar</label>
            <input onChange={changeImageHandler} type="file" id="avtar" />
          </div>
          <div>
            <button type="submit">Sign Up</button>
            <aside>
              <span>Already Registered ? </span>
              <Link to={"/login"}>Login Here.</Link>
            </aside>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
