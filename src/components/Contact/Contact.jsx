import React, { useState } from "react";
import "./Contact.css";
import { Button, Typography } from "@mui/material";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const contactFormHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact">
      <div className="contactRightBar"></div>
      <div className="contactContainer">
        <form
          action=""
          className="contactContainerForm"
          onSubmit={contactFormHandler}
        >
          <Typography variant="h4">Contact Us</Typography>
          <input
            type="text"
            placeholder="Enter your Name"
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <textarea
            placeholder="Enter a Message"
            cols="30"
            rows="10"
            value={message}
            required
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
          <Button variant="contained" type="submit">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
