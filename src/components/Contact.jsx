import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.heading}>Contact</h2>
      <p className={styles.text}>Want to work together or have a question? Send me a message!</p>
      {submitted ? (
        <div className={styles.thankYou}>Thank you for reaching out! I will get back to you soon.</div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className={styles.textarea}
          />
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      )}
    </section>
  );
};

export default Contact; 