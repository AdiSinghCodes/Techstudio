// Aboutus.js
import React from "react";
import './Aboutus.css'

const Aboutus = () => {
    return (
        <div className="about-container">
            <div className="company-overview">
                <h1 className="company-title">Our Company Overview</h1>
                <p className="company-description">
                At TechStudio, we turn your digital ideas into reality. Our passionate team combines creativity with cutting-edge technology to craft unique solutions that elevate your brand and streamline your business. Whether it's creating compelling content, boosting your online presence, or designing stunning visuals, we personalize our services to drive your growth. We’re all about delivering user-friendly experiences that resonate and leave a lasting impression. Let’s work together to bring your vision to life, one click at a time.
                </p>
            </div>
            <div className="company-container">
                <div className="company-box">
                    <h4>Vision</h4>
                    <ul>
                        <li>Empowering businesses with innovative, user-centric solutions that drive growth.</li><br></br>
                        <li>Delivering digital strategies that foster engagement and sustainable growth.</li><br></br>
                        <li>Transforming digital experiences with creativity, functionality, and measurable impact.</li><br></br>
                        <li>Connecting technology and intuitive design to drive global business success.</li>
                    </ul>
                </div>
                <div className="company-box">
                    <h4>Mission</h4>
                    <ul>
                        <li>Transforming ideas into digital experiences that connect and inspire.</li><br></br>
                        <li>Delivering tailored digital solutions that address unique client needs.</li><br></br>
                        <li>Ensuring seamless functionality, usability, and design in every project.</li><br></br>
                        <li>Adapting to evolving trends, staying relevant in the digital landscape.</li><br></br>
                        <li>Blending creativity with technical expertise to craft memorable brand experiences.</li>
                    </ul>
                </div>
                <div className="company-box">
                    <h4>Commitment</h4>
                    <ul>
                        <li>Quality is prioritized in every project, with careful attention to detail at every step.</li><br></br>
                        <li>Honesty and transparency build strong, trustworthy relationships with clients.</li><br></br>
                        <li>Timely delivery and ongoing support ensure clients receive continuous value.</li><br></br>
                        <li>Client needs are understood and met with tailored approaches to achieve their goals.</li>
                    </ul>
                </div>
            </div>
            <div className="why-techstudio-section">
                <div className="why-techstudio-text">
                    <h2>Why Techstudio?</h2>
                    <p>Our approach is simple: create meaningful experiences that resonate with your audience and drive measurable results. At Techstudio, we believe in building lasting relationships by delivering solutions you can trust—every step of the way. Let us be your trusted partner in navigating the digital landscape and achieving your business goals.</p>
                </div>
                <div className="why-techstudio-image">
                    <img src="314-removebg-preview__1_-removebg-preview.png" alt="Why Techstudio" />
                </div>
            </div>

            <div className="our-team">
                <div className="team-title">
                    <h2>The faces behind Techstudio</h2>
                </div>
                <br></br>
                <div className="team-box">
                    <div className="team">
                        <img src="paras.jpg"></img>
                        <p>Founder</p>
                    </div>
                    <div className="team">
                        <img src="WhatsApp Image 2024-10-29 at 16.29.06_357b9a57.jpg"></img>
                        <p>Project Manager</p>
                    </div>
                    <div className="team">
                        <img src="WhatsApp Image 2024-10-29 at 20.02.10_40cbd252.jpg"></img>
                        <p>Graphic Designer</p>
                    </div>
                    <div className="team">
                        <img src="aku.jpg"></img>
                        <p>Social Media Manager</p>
                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default Aboutus;
