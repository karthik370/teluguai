import React from 'react';

const Contact: React.FC = () => {
  return (
    <>
      <title>Contact Us - Telugu AI Voice Chat</title>
      <meta name="description" content="Get in touch with the Telugu AI Voice Chat team. We welcome your feedback, questions, and suggestions. Contact us via email or our contact form." />
    <div className="main-bg">
      <div className="main-card" style={{ maxWidth: '540px' }}>
        <h1 className="animate-gradient section-title" style={{ fontSize: '2.2rem', marginBottom: '2rem' }}>Get In Touch</h1>
        <p className="heading-desc" style={{ textAlign: 'center', marginBottom: '2.2rem' }}>
          We'd love to hear from you! Whether you have a question, feedback, a feature request, or a business inquiry, please don't hesitate to reach out. We are committed to improving our service based on your input.
        </p>
        <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          <h2 className="section-title" style={{ fontSize: '1.3rem', color: '#ff6ec4' }}>Direct Email</h2>
          <p className="heading-desc">For the quickest response, please email us directly at:</p>
          <a href="mailto:govardhanbommineni@gmail.com" className="blog-link" style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>govardhanbommineni@gmail.com</a>
        </div>
        <div className="ad-section" style={{ margin: '2.2rem 0', padding: '1.1rem', borderRadius: '1.2rem', background: 'rgba(0,0,0,0.13)' }}>
          <p className="heading-desc" style={{ marginBottom: '0.5rem', color: '#7873f5' }}>Advertisement</p>
          <div style={{ width: '100%', minHeight: '120px' }}>{/* AdSense ad placeholder */}</div>
        </div>
        <div style={{ width: '100%', maxWidth: '410px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ fontSize: '1.3rem', color: '#ff6ec4' }}>Contact Form</h2>
          <form action="#" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div>
              <label htmlFor="name" className="heading-desc" style={{ display: 'block', marginBottom: 4 }}>Full Name</label>
              <input type="text" name="name" id="name" required style={{ width: '100%', padding: '0.7rem', borderRadius: '0.8rem', border: '1.5px solid #eaeaea', background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: '1rem', marginBottom: 8 }} />
            </div>
            <div>
              <label htmlFor="email" className="heading-desc" style={{ display: 'block', marginBottom: 4 }}>Email Address</label>
              <input type="email" name="email" id="email" required style={{ width: '100%', padding: '0.7rem', borderRadius: '0.8rem', border: '1.5px solid #eaeaea', background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: '1rem', marginBottom: 8 }} />
            </div>
            <div>
              <label htmlFor="message" className="heading-desc" style={{ display: 'block', marginBottom: 4 }}>Message</label>
              <textarea name="message" id="message" rows={4} required style={{ width: '100%', padding: '0.7rem', borderRadius: '0.8rem', border: '1.5px solid #eaeaea', background: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: '1rem', marginBottom: 8 }}></textarea>
            </div>
            <button type="submit" className="blog-link" style={{ width: '100%', padding: '0.85rem', borderRadius: '1.2rem', background: 'linear-gradient(90deg, #ff6ec4, #7873f5)', color: '#fff', fontWeight: 700, fontSize: '1.1rem', border: 'none', marginTop: 8, cursor: 'pointer', transition: 'background 0.18s' }}>
              Send Message
            </button>
          </form>
          <p className="heading-desc" style={{ marginTop: 12, fontSize: '0.95rem', textAlign: 'center' }}>NOTE: This form is a visual placeholder. A backend endpoint is required to make it functional.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
