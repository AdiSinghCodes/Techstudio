// Aboutus.js
import React from "react";
import './Portfolio.css'; // Assuming you'll have styles here

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <div className="port-title">
                <h1 className="port">From Vision to Reality: Our Project Showcase</h1>
            </div>
            {/* Project 1 */}
            <div className="project-section">
                <div className="project-media">
                    <video src="boletovadapavcom-google-chrome-2024-11-02-19-10-12_KxZxhi75.mp4" controls className="project-video" />
                </div>
                <div className="project-content">
                    <h2>Project 1: Boleto Vadapav</h2>
                    <p>This project was created for Mr Arun Rai. Boleto Vadapav is Gujarat’s first fusion vada pav brand, established in 2018 with the vision of bringing the authentic flavors of Mumbai’s iconic street food to a broader audience.</p>
                    <p>Mr Arun Rai: “Working with Techstudio was a seamless experience. Their expertise helped bring our vision to life.”</p>
                    <a href="https://boletovadapav.com" target="_blank" rel="noopener noreferrer" className="project-link">
                        Visit Project Website
                    </a>
                </div>
            </div>

            {/* Project 2 - Alternate Layout */}
            <div className="project-section reverse">
                <div className="project-media">
                    <video src="recording-2024-11-09-230321_l9HFe5SG.mp4" controls className="project-video" />
                </div>
                <div className="project-content">
                    <h2>Project 2: Empowering Brands with Creative UI/UX Solutions</h2>
                    <p>We collaborated with ClothingEx, UrbanDeals, Zerodha, DesignUGX, and VeggieBloom to craft visually appealing and user-centric UI/UX designs, transforming their digital presence, enhancing user engagement, and driving business growth through seamless and interactive online experiences.</p>
                    <p>Feedback of companies: “The modern UI/UX of our website has boosted our social media engagement, attracting new customers and enhancing our brand image.”</p>
                    <a href="https://drive.google.com/file/d/1QS66PQfl2IhxkSS0DVuU4-oPUNfiuxLX/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="project-link">
                        Visit Project Website
                    </a>
                </div>
            </div>
            <div className="project-section">
                <div className="project-media">
                    <video src="recording-2024-11-02-203926_EKDJWDGX.mp4" controls className="project-video" />
                </div>
                <div className="project-content">
                    <h2>Project 3: Beats 3</h2>
                    <p>Crafted for Mrs. Kavya Rajput, this website delivers a sophisticated and streamlined design for a headphone product, blending minimalism with functionality to create an engaging user experience.</p>
                    <p>Mrs Kavya Rajput: “Techstudio did an impressive job creating a clean, user-friendly layout for our headphone product page, with a strong focus on aesthetics and clear feature presentation, which perfectly aligns with our brand's premium feel.”</p>
                    <a href="https://bhagyoday2004.github.io/LandingPage-Headphones/#products" target="_blank" rel="noopener noreferrer" className="project-link">
                        Visit Project Website
                    </a>
                </div>
            </div>
            <div className="project-section reverse">
                <div className="project-media">
                    <video src="recording-2024-11-02-222719_zcMCfijJ.mp4" controls className="project-video" />
                </div>
                <div className="project-content">
                    <h2>Project 4: Halloween</h2>
                    <p>This project was created for Mr Harshit Patel. A Halloween-themed landing page with spooky visuals, festive colors, and engaging animations, perfect for showcasing Halloween products and creating a thrilling holiday atmosphere.</p>
                    <p>Mr Harshit Patel: “Fantastic work, TechStudio! The website’s design and user experience beautifully highlight our services and engage visitors effectively.”</p>
                    <a href="https://bhagyoday2004.github.io/LandingPageHalloween/#" target="_blank" rel="noopener noreferrer" className="project-link">
                        Visit Project Website
                    </a>
                </div>
            </div>

            <div className="port-footer">
    <div className="left-text">
        <h2 className="left">Our Story in Slides: Explore the Portfolio</h2>
        <p>Click the button below to dive into our presentation, where you can explore detailed insights and highlights of our portfolio, showcasing our journey and accomplishments.</p>
        <a href="Extra_abt_Agency.pptx" download>
            <button className="download-button">Explore Our Presentation</button>
        </a>
    </div>

    <div className="port-img">
        <img src="rf-removebg-preview.png" alt="Our Story" />
    </div>
</div>

        </div>
    );
}

export default Portfolio;
