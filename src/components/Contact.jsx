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

  const SocialLinks = () => (
    <div className={styles.socialLinks}>
      <a href="mailto:dhinakharan@1outlook.com" className={styles.socialButton} title="Email" target="_blank" rel="noopener noreferrer">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#0077ff" d="M2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5v15A2.5 2.5 0 0 1 19.5 22h-15A2.5 2.5 0 0 1 2 19.5v-15Zm2.5-.5a.5.5 0 0 0-.5.5v.217l9 6.428 9-6.428V4.5a.5.5 0 0 0-.5-.5h-17Zm17 2.783-7.7 5.5a1.5 1.5 0 0 1-1.8 0l-7.7-5.5V19.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V6.783ZM4.06 20A1.5 1.5 0 0 0 4.5 20h15a1.5 1.5 0 0 0 .44-.06l-6.72-4.797a3.5 3.5 0 0 0-4.44 0L4.06 20Z"/></svg>
      </a>
      <a href="https://wa.me/0177329207" className={styles.socialButton} title="WhatsApp" target="_blank" rel="noopener noreferrer">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#25D366" d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52ZM12 22c-1.85 0-3.66-.5-5.22-1.44l-.37-.22-3.7.97.99-3.6-.24-.38A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.54 0 4.93.99 6.74 2.8A9.94 9.94 0 0 1 22 12c0 5.52-4.48 10-10 10Zm5.2-7.6c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34Z"/></svg>
      </a>
      <a href="https://instagram.com/dhinacurrent8" className={styles.socialButton} title="Instagram" target="_blank" rel="noopener noreferrer">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#E4405F" d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 2.25A6.25 6.25 0 1 1 5.75 12 6.25 6.25 0 0 1 12 5.75Zm0 1.5A4.75 4.75 0 1 0 16.75 12 4.75 4.75 0 0 0 12 7.25Zm6.25-.5a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 18.25 6.75Z"/></svg>
      </a>
      <a href="https://www.linkedin.com/in/dhinakharan-raja-726376233/" className={styles.socialButton} title="LinkedIn" target="_blank" rel="noopener noreferrer">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="#0077B5" d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5ZM7.12 20.45H3.56V9h3.56v11.45ZM5.34 7.67c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06ZM20.45 20.45h-3.56v-5.6c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.69h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.85 3.39-1.85 3.63 0 4.3 2.39 4.3 5.5v6.24Z"/></svg>
      </a>
    </div>
  );

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
      <SocialLinks />
    </section>
  );
};

export default Contact; 