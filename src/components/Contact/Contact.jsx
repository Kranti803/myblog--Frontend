import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactUs } from "./../../redux/actions/adminActions";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { clearError, clearMessage } from "../../redux/reducers/adminSlice";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const adminState = useSelector((state) => state.admin);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(contactUs(name, email, subject, message));
  };

  useEffect(() => {
    
    if (adminState.error) {
      toast.error(adminState.error);
      dispatch(clearError());
    }
    if (adminState.message) {
      toast.success(adminState.message);
      dispatch(clearMessage());
    }
  }, [dispatch, adminState.error, adminState.message]);

  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <div>
        <form onSubmit={submitHandler}>
          <div>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              required
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <input
            onChange={(e) => setSubject(e.target.value)}
            type="text"
            placeholder="Subject"
            required
          />
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Messsage"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
