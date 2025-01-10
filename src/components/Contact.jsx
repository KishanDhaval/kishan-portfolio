import React, { useState, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import validator from 'validator';
import styles from './Contact.module.css';
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
    const [state, handleSubmit] = useForm("mpwadkpr");
    const [emailError, setEmailError] = useState(null);

    // Refs for the input fields
    const nameRef = useRef();
    const emailRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();

    const handleCustomSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;

        if (!validator.isEmail(email) || !email.endsWith('@gmail.com')) {
            setEmailError("Email must be valid and end with @gmail.com");
            return;
        } else {
            setEmailError(null);
        }

        // Show a loading toast and update it based on the form submission
        toast.promise(
            handleSubmit(event), // Pass the handleSubmit function as the promise
            {
                loading: 'Sending...',
                success: 'Response sent successfully!',
                error: 'Something went wrong. Please try again.',
            }
        ).then(() => {
            // Clear form fields after success
            nameRef.current.value = '';
            emailRef.current.value = '';
            subjectRef.current.value = '';
            messageRef.current.value = '';
        });
    };

    return (
        <div className={styles.contactPage} id='contact'>
            <Toaster />
            <div className={styles.container}>
                <h1>Contact</h1>
                <form className={styles.contactForm} onSubmit={handleCustomSubmit}>
                    <input
                        ref={nameRef} // Attach ref
                        type="text"
                        id='name'
                        name='name'
                        placeholder='Name...'
                    />
                    <input
                        ref={emailRef} // Attach ref
                        id="email"
                        type="email"
                        name="email"
                        placeholder='yourEmail@gmail.com'
                    />
                    <input
                        ref={subjectRef} // Attach ref
                        type="text"
                        id='subject'
                        name='subject'
                        placeholder='Subject???'
                    />
                    {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <textarea
                        ref={messageRef} // Attach ref
                        id="message"
                        name="message"
                        placeholder='Message...'
                        rows={4}
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button type="submit" disabled={state.submitting}>
                        Send &nbsp; <i className="ri-send-plane-line"></i>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
