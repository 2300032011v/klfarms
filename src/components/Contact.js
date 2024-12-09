import React from "react";
import "./Contact.css"; 

const Contact = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="contact-section">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us!</p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
});
export default Contact;


