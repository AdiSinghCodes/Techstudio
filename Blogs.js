import React from 'react';
import './blogs.css';

// BlogPage Component
function BlogPage() {
  // Example FAQ data
  const faqs = [
    {
      question: "How can your web development services improve my business's online presence?",
      answer: "Our web development services create visually appealing, responsive websites that attract more visitors and convert them into customers. We focus on user experience, ensuring your site is easy to navigate, fast, and mobile-friendly, which in turn enhances your online visibility and engagement."
    },
    {
      question: "Why is branding crucial?",
      answer: "Branding sets you apart from competitors and creates customer loyalty."
    },
    {
      question: "Why are analytics important?",
      answer: "Analytics help you understand your audience and make informed business decisions."
     },
    {
      question: "Why invest in SEO?",
      answer: "SEO increases your visibility on search engines, driving more traffic to your website."    
    },
    {
      question: "Do you provide custom content creation or just generic templates?",
      answer: "We create custom, original content designed to align with your brand’s voice and message. Our team of content creators ensures that all the content is unique, relevant, and compelling to your target audience, allowing you to stand out from your competition."    
    },
    {
      question: "What ongoing support do you provide after the website goes live?",
      answer: "We offer continuous maintenance and support to ensure that your website stays updated, secure, and performs well. Whether it’s fixing bugs, updating content, or adding new features, we’re here to provide assistance whenever needed."    
    },
  ];

  return (
    <div>
      {/* Container Starts */}
      <div className="container container-flex">
        <main role="main">
          <article className="article-featured">
            <h2 className="article-title">Creating a Website: A Cost-Effective Growth Strategy</h2>
            <img
              src="web-development-process.jpg"
              alt="Business strategy for cost-efficient website creation"
              className="article-image"
            />
            
            <p className="article-body">
            The article from Forbes, titled "Why Every Business Needs a Website," discusses the importance of having a website for businesses in today's digital age. It emphasizes how a website serves as a critical tool for online presence, marketing, customer engagement, and credibility. The article also explores the benefits of having an accessible, professional, and responsive website to attract and retain customers, especially in a competitive market.
            </p>
            <a href="https://www.forbes.com/councils/theyec/2020/02/03/why-every-business-needs-a-website/" className="article-read-more">
              CONTINUE READING
            </a>
          </article>

          {/* Recent Articles */}
          {[
            {
              title: 'Benefits of a Business Website',
              imageSrc: 'https://megala.in/wp-content/uploads/2024/08/Benefits-of-Having-a-Website-e1724341472204.png',
              altText: 'Benefits of a business website',
              body: 'This blog from Wix outlines multiple advantages of having a website, such as generating more leads, enhancing customer service with 24/7 availability, and improving SEO rankings. It emphasizes how a website can serve as the central hub for your brand, linking to social media and other digital marketing channels.',
              link: 'https://www.wix.com/blog/benefits-of-a-website',
            },
            {
              title: 'Why a Website is Essential for Your Business',
              imageSrc: 'https://www.proideators.com/wp-content/uploads/2021/05/How-Important-Is-To-Own-A-Website-For-Business.jpg',
              altText: 'Importance of having a business website',
              body: 'SeeResponse emphasizes the importance of a website in today’s digital landscape, where a business’s online presence is a critical factor for success. The article outlines that having a website helps businesses build credibility, gain visibility, and attract potential customers. It also highlights that websites can serve as platforms for providing valuable information, selling products or services, and offering customer support, all of which contribute to business growth.',
              link: 'https://seeresponse.com/blog/top-reasons-business-needs-website/',
            },
            {
              title: 'What is SEO copywriting?',
              imageSrc: 'https://tjcreative.co.uk/wp-content/uploads/2023/08/What-is-SEO-copywriting.png',
              altText: 'Importance of SEO Copywriting',
              body: 'The article explains the importance of SEO (Search Engine Optimization) in digital marketing. It highlights how SEO helps improve a websites visibility on search engines, attracting organic traffic. The piece also emphasizes the value of SEO in building trust with customers, improving user experience, and staying competitive in the market. The overall message stresses that SEO is essential for business success and digital presence.',
              link: 'https://digitalmarketinginstitute.com/blog/what-is-seo-and-why-is-it-important',
            },
            {
              title: 'The Importance of Logo and Branding: Crafting Your Brand Identity',
              imageSrc: 'https://www.thebusinesstoolkit.com/wp-content/uploads/2023/08/logo-importance.png',
              altText: 'Importance of logo and branding',
              body: 'In today\'s competitive marketplace, a strong brand identity is essential for businesses and blogs alike. At the heart of this identity lies the logo—a visual representation that encapsulates the essence of your brand. This blog explores the significance of logos in branding, tips for designing an effective logo, and successful case studies that highlight the impact of branding.',
              link: 'https://www.forbes.com/councils/forbesagencycouncil/2021/03/24/the-importance-of-branding-in-business/',
            },
            {
              title: 'Why Graphic Design is Important for Your Brand',
              imageSrc: 'https://www.aandmedu.in/wp-content/uploads/2021/08/What-is-Graphic-Design.jpg',
              altText: 'Evaluate your Graphics',
              body: 'The article explains the importance of graphic design for businesses, emphasizing that it not just about aesthetics but about organizing information effectively to communicate a clear message. It highlights how consistent branding, which includes using the right colors, fonts, and design elements, fosters recognition and trust among audiences.',
              link: 'https://www.themmachine.com/why-graphic-design-is-important/#:~:text=Graphic%20design%20not%20only%20makes,%2Destablished%20package%2C%20then%20BOOM!',
            },
            {
              title: 'Why is digital marketing important for business?',
              imageSrc: 'https://www.michaelpage.ae/sites/michaelpage.ae/files/legacy/7_digital_skills600x387.png',
              altText: 'Why is digital marketing important for business?',
              body: 'Article on FutureLearn discussing the importance of digital marketing for businesses. It highlights how digital marketing helps businesses grow by reaching larger audiences, building stronger customer relationships, and improving overall business performance.',
              link: 'https://www.futurelearn.com/info/blog/why-is-digital-marketing-important-for-business',
            },
          ].map((article, index) => (
            <article className="article-recent" key={index}>
              <div className="article-recent-main">
                <h2 className="article-title">{article.title}</h2>
                <p className="article-body">{article.body}</p>
                <a href={article.link} className="article-read-more">CONTINUE READING</a>
              </div>
              <div className="article-recent-secondary">
                <img src={article.imageSrc} alt={article.altText} className="article-image" />
                <p className="article-info">{article.info}</p>
              </div>
            </article>
          ))}
        </main>

        {/* FAQ Section */}
        <aside className="faq-section">
          <h2 className="faq-title">FAQ's</h2>
          <ul className="faq-list">
            {faqs.map((faq, index) => (
              <li key={index} className="faq-item">
                <details className="faq-answer">
                  <summary className="faq-question">{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      {/* Container Ends */}
    </div>
  );
}

export default BlogPage;
