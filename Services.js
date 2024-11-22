// Services.js
import React from "react";
import './Services.css'; // Importing CSS for styles

const Services = () => {
    return (
        <div className="service-container">
            <div className="service-overview">
                <h1 className="service-title">Unlock Our Expert Services to Propel Your Business Forward</h1>
            </div>
            <div className="service-boxes">
                {/* Website Development Box */}
                <div className="service-box">
                    <img src="web-removebg-preview.png" alt="Website Development Logo" className="service-logo" />
                    <h3>Website Development</h3>
                    <p><strong>Why do you need a website?</strong></p>
                    <p>Your website is your digital storefront; it establishes your online presence and credibility.</p>
                    <p><strong>Our Services:</strong></p>
                    <ul>
                    <li>Custom websites that reflect your brand</li>
<li>Responsive designs for all devices</li>
<li>Easy-to-manage CMS for updates</li>


                    </ul>
                </div>
                
                {/* Social Media Handling Box */}
                <div className="service-box">
                    <img src="social-media.png" alt="Social Media Handling Logo" className="service-logo" />
                    <h3>Social Media Handling</h3>
                    <p><strong>Why is social media important?</strong></p>
                    <p>Social media helps you engage with your audience and builds brand awareness.</p>
                    <p><strong>Our Services:</strong></p>
                    <ul>
                    <li>Engaging content creation and curation</li>
<li>Strategic account management and growth</li>
<li>Insights-driven performance analysis and reports</li>

                    </ul>
                </div>
                
                {/* SEO Optimization Box */}
                <div className="service-box">
                    <img src="SEO.png" alt="SEO Optimization Logo" className="service-logo" />
                    <h3>SEO Optimization</h3>
                    <p><strong>Why invest in SEO?</strong></p>
                    <p>SEO increases your visibility on search engines, driving more traffic to your website.</p>
                    <p><strong>Our Services:</strong></p>
                    <ul>
                        <li>Keyword research and strategy</li>
                        <li>On-page and off-page optimization</li>
                        <li>Content optimization and SEO audits</li>
                    </ul>
                </div>
                
                {/* Logo and Branding Box */}
                <div className="service-box">
                    <img src="Branding-identity-corporate-logo-design-04-large-removebg-preview.png" alt="Logo and Branding Logo" className="service-logo" />
                    <h3>Logo and Branding</h3>
                    <p><strong>Why is branding crucial?</strong></p>
                    <p>Branding sets you apart from competitors and creates customer loyalty.</p>
                    <p><strong>Our Services:</strong></p>
                    <ul>
                        <li>Custom logo design</li>
                        <li>Brand identity creation</li>
                        <li>Marketing collateral design</li>
                    </ul>
                </div>
                
                {/* Analytics and Consulting Box */}
                <div className="service-box">
                    <img src="blue-chart-consulting-removebg-preview.png" alt="Analytics and Consulting Logo" className="service-logo" />
                    <h3>Analytics and Consulting</h3>
                    <p><strong>Why are analytics important?</strong></p>
                    <p>Analytics help you understand your audience and make informed business decisions.</p>
                    <p><strong>Our Services:</strong></p>
                    <ul>
                    <li>Data-driven insights and reporting</li>
<li>Strategic business consulting for growth</li>
<li>Comprehensive performance tracking and analysis</li>

                    </ul>
                </div>
                
                {/* Graphic Designing Box */}
                <div className="service-box">
                    <img src="g-removebg-preview.png" alt="Graphic Designing Logo" className="service-logo" />
                    <h3>Graphic Designing</h3>
                    <p><strong>Why do you need graphic design?</strong></p>
                    <p>Graphic design enhances your brand's visual identity and communication.</p>
                    <p><strong>Our Services:</strong></p>
                    <ul>
                    <li>Creative print and digital design</li>
<li>Eye-catching marketing materials</li>
<li>Intuitive UI/UX design for web and apps</li>

                    </ul>
                </div>
            </div>
            <div className="service-footer">
            <div className="title">
    <h1 className="footer-title">Ready to Bring Your Business Online?</h1>
    <p>If you’re looking to start or enhance your business with our digital solutions, let’s get started.</p>
    <div className="button-footer">
        <a href="https://forms.gle/D2KcpZSVSE79LWNy9" target="_blank" rel="noopener noreferrer">
            <button>Get in Touch</button>
        </a>
    </div>
</div>

<div className="right-image">
    <img src="image.png" alt="Your Service Illustration" />
</div>

</div>
        </div>
    );
};

export default Services;
