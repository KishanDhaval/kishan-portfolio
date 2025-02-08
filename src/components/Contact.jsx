import React, { useState, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import validator from "validator";
import toast, { Toaster } from "react-hot-toast";
import { RiSendPlaneFill } from "react-icons/ri";
import styles from "./Contact.module.css";

function Contact() {
  const [state, handleSubmit] = useForm("mpwadkpr");

  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const handleCustomSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    if (!validator.isEmail(email)) {
        toast.error("Email is Required!!!")
      return;
    } else if(!email.endsWith("@gmail.com")){
        toast.error("Please enter Valid email!!!")
    }

    toast
      .promise(handleSubmit(event), {
        loading: "Sending...",
        success: "Response sent successfully!",
        error: "Something went wrong. Please try again.",
      })
      .then(() => {
        nameRef.current.value = "";
        emailRef.current.value = "";
        subjectRef.current.value = "";
        messageRef.current.value = "";
      });
  };

  return (
    <div className={styles.contactSection} id="contact">
      <Toaster />
      <div className={styles.container}>
        <p className={styles.subtitle}>Contact Me</p>
        <h2 className={styles.title}>Get in Touch</h2>

        <div className={styles.contactContent}>
          {/* Left: Contact Form */}
          <form className={styles.contactForm} onSubmit={handleCustomSubmit}>
            <input
              ref={nameRef}
              type="text"
              name="name"
              placeholder="Name..."
              required
            />
            <input
              ref={emailRef}
              type="email"
              name="email"
              placeholder="Your Email (Gmail only)"
              required
            />
            <input
              ref={subjectRef}
              type="text"
              name="subject"
              placeholder="Subject..."
              required
            />
            <textarea
              ref={messageRef}
              name="message"
              placeholder="Your Message..."
              rows={4}
              required
            />
            <button type="submit" disabled={state.submitting}>
              Send &nbsp; <RiSendPlaneFill className={styles.icon} />
            </button>
          </form>

          {/* Right: Contact Info */}
          <div className={styles.contactInfo}>
            <div className={styles.infoBox}>
              <h3 className={styles.infoTitle}>Call Me</h3>
              <p className={styles.infoText}>+91 97129 35621</p>
              <p className={styles.infoText}>+91 99787 01767</p>
            </div>
            <div className={styles.infoBox}>
              <h3 className={styles.infoTitle}>E-mail</h3>
              <p className={styles.infoText}>kmprajapati1910@gmail.com</p>
            </div>
            <div className={styles.infoBox}>
              <h3 className={styles.infoTitle}>Location</h3>
              <p className={styles.infoText}>Harij , Patan</p>
              <p className={styles.infoText}>Gujarat India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
