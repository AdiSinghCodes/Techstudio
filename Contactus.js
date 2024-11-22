import React, { useState } from "react";
import "./Contactus.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';

const Contactus = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [status, setStatus] = useState(''); // For success/error message

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_3wanghe', 'template_tn0htol', formData, '1G5J3rgbWRgSklqwO')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
            })
            .catch((err) => {
                console.error('FAILED...', err);
                setStatus('Failed to send message. Please try again later.');
            });
    };

    return (
        <div>
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p>Feel free to reach out to us for any inquiries or collaborations!</p>
                    <ul>
                        <li><strong>Address:</strong> House no 2701 Vishwakarma Moholla Ranjhi, Jabalpur</li>
                        <li><strong>Phone:</strong> +91 7219638172</li>
                        <li><strong>Email:</strong> info.techstudiio@gmail.com</li>
                    </ul>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/company/techstudioofficial/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com/techstudio.official/profilecard/?igsh=dTZoNjgxMWM0dnIz" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                        </a>
                    </div>
                </div>
                <div className="contact-image">
                    <img src="contact.png" alt="Contact" />
                </div>
            </div>

            <div className="contact-form">
                <h3>Get in Touch</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                    <textarea name="message" placeholder="Message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
                    <button type="submit">Send Message</button>
                </form>
                {status && <p className="status-message">{status}</p>}
            </div>

            <footer className="footer">
                <div className="footer-quick-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/aboutus">About Us</a></li>
                        <li><a href="/blogs">Blog</a></li>
                    </ul>
                </div>
                <div className="footer-legal-links">
                    <h4>Legal Links</h4>
                    <ul>
                        <li><a href="#terms">Terms & Conditions</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-contact-info">
                    <h4>Contact Info</h4>
                    <p>House no 2701 Vishwakarma Moholla Ranjhi, Jabalpur</p>
                    <p>Phone: +91 7219638172</p>
                    <p>Email: info.techstudiio@gmail.com</p>
                </div>
            </footer>
        </div>
    );
};

export default Contactus;
