import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-container">
            {/* Tagline and Image Section */}
            <div className="tagline">
                <h1>TechStudio: Building Digital Dreams, One Click at a Time</h1>
                <p>
                Welcome to TechStudio, where digital innovation meets purpose. From first impressions to lasting connections, we help your brand make a memorable impact online.
                </p>
                <h2>Unlock your business's potential with TechStudio.</h2> {/* Company tagline */}
                <br />
                <a href="/services"><button className="explore-button">Explore Our Services</button></a>
            </div>
            <div className="right-image">
                <img src="Daco_3727461.png" alt="Techstudio Graphic" />
            </div>

            {/* Service Overview Section */}
            <div className="service-overview">
                <h3 className="service-overview-title">Discover How We Elevate Your Brand</h3>
                <br />
                <div className="services-container">
                    <div className="service-box">
                        <h4>SEO Optimization</h4>
                        <p>Achieve top rankings and increased visibility in search results, translating clicks into customers with our tailored SEO solutions designed for sustainable growth.</p>
                    </div>
                    <div className="service-box">
                        <h4>Web Development</h4>
                        <p>Transform your online identity with our stunning, user-friendly websites that not only capture attention but also convert visitors into loyal customers.</p>
                    </div>
                    <div className="service-box">
                        <h4>Social Media Management</h4>
                        <p>Maximize your social media impact with our expert handling, fostering genuine interactions that drive brand loyalty and amplify your message.</p>
                    </div>
                </div>
            </div>

            {/* About Company Section */}
            <div className="about-company">
                <h2>Inside TechStudio: Our Commitment to Your Growth</h2>
                <p>
                Unleash your brand’s potential with <strong>TechStudio</strong>. From SEO and custom web development to brand design, content strategy, and social media mastery, our comprehensive digital solutions are crafted to captivate, connect, and convert. Let’s create a lasting impact together.
                </p>
            </div>

            {/* Center Button Section */}
            <div className="center-button">
                <a href="/aboutus"><button>Get Started</button></a>
            </div>
        </div>
    );
}

export default Home;
