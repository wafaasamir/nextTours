'use client'

import React,{useState} from 'react';
import Swal from 'sweetalert2';
import styles from './ContactForm.module.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errorMessages, setErrorMessages] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    const { firstName, lastName, email, phone, subject, message } = formData;
    if (!firstName) {
      errors.firstName = '*First Name is required.*';
    }
    if (!lastName) {
      errors.lastName = '*Last Name is required.*';
    }
    if (!email) {
      errors.email = '*Email is required.*';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = '*Email format is invalid.*';
    }
    if (!phone) {
      errors.phone = '*Phone is required.*';
    } else if (!/^\d{10,15}$/.test(phone)) {
      errors.phone = '*Phone must be between 10-15 digits.*';
    }
    if (!subject) {
      errors.subject = '*Subject is required.*';
    }
    if (!message) {
      errors.message = '*Message is required.*';
    }

    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors);
      Swal.fire({
        title: 'Error!',
        text: 'Please fix the errors in the form.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } else {
      setErrorMessages({});
      Swal.fire({
        title: 'Success!',
        text: 'Form submitted successfully!',
        icon: 'success',
        confirmButtonText: 'Great'
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }
  };

  return (
    <form className={`${styles.contactForm}`} onSubmit={handleSubmit} id='contactForm'>
      <div className="row">
        <div className="col-md-6 mb-3">
          <input
            type="text"
            placeholder="First Name: "
            className="w-100 p-3 rounded"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          {errorMessages.firstName && (
            <div className= {`${styles.error} text-danger mt-2 ps-2`}>{errorMessages.firstName}</div>
          )}
        </div>
        <div className="col-md-6 mb-3">
          <input
            type="text"
            placeholder="Last Name: "
            className="w-100 p-3 rounded"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          {errorMessages.lastName && (
            <div className= {`${styles.error} text-danger mt-2 ps-2`}>{errorMessages.lastName}</div>
          )}        
          </div>
        <div className="col-md-6 mb-3">
          <input
            type="text"
            placeholder="Email Address: "
            className="w-100 p-3 rounded"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errorMessages.email && (
            <div className= {`${styles.error} text-danger mt-2 ps-2`}>{errorMessages.email}</div>
          )}
        </div>
        <div className="col-md-6 mb-3">
          <input
            type="tel"
            placeholder="Phone: "
            className="w-100 p-3 rounded"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          {errorMessages.phone && (
            <div className= {`${styles.error} text-danger mt-2 ps-2`}>{errorMessages.phone}</div>
          )}
        </div>
        <div className="col-12 mb-3">
          <input
            type="text"
            placeholder="Subject: "
            className="w-100 p-3 rounded"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
          />
          {errorMessages.subject && (
            <div className= {`${styles.error} text-danger mt-2 ps-2`}>{errorMessages.subject}</div>
          )}
        </div>
        <div className="col-12 mb-3">
          <textarea
            name="message"
            placeholder="Write a message..."
            className="w-100 p-3 rounded"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          {errorMessages.message && (
            <div className= {`${styles.error} text-danger mt-2 ps-2`}>{errorMessages.message}</div>
          )}
        </div>
      </div>
      <button type="submit" className= {`btn ${styles.sendMessageBtn} py-4 px-5 mb-5`}>
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
