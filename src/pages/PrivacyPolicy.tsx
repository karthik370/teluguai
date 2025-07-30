import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <title>Privacy Policy - Telugu AI Voice Chat</title>
      <meta name="description" content="Privacy Policy for Telugu AI Voice Chat. Learn how we protect your data and respect your privacy while using our AI-powered voice chat platform." />
      <div className="main-bg">
        <div className="main-card" style={{ maxWidth: '900px' }}>
          <h1 className="animate-gradient" style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '2.5rem' }}>
            Privacy Policy
          </h1>
          <p className="heading-desc" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 className="section-title" style={{ color: '#ff6ec4', fontSize: '1.8rem', marginBottom: '1.5rem' }}>Information We Collect</h2>
            <p className="heading-desc" style={{ marginBottom: '1rem' }}>
              We collect information you provide directly to us, such as when you use our voice chat service, create an account, or contact us for support. This may include voice recordings, text messages, and usage data necessary to provide our AI-powered Telugu language services.
            </p>
            <p className="heading-desc">
              We also automatically collect certain information about your device and how you interact with our service, including IP address, browser type, operating system, and usage patterns to improve our service quality.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 className="section-title" style={{ color: '#ff6ec4', fontSize: '1.8rem', marginBottom: '1.5rem' }}>How We Use Your Information</h2>
            <p className="heading-desc" style={{ marginBottom: '1rem' }}>
              We use the information we collect to provide, maintain, and improve our Telugu AI voice chat services. This includes processing voice inputs, generating appropriate responses, and personalizing your experience based on your preferences and usage patterns.
            </p>
            <p className="heading-desc">
              Your voice data is processed to understand your queries and provide accurate Telugu language responses. We may also use aggregated, anonymized data to improve our AI models and service quality.
            </p>
          </section>

          <div className="ad-section" style={{ margin: '3rem 0', padding: '1.5rem', borderRadius: '1.5rem', background: 'rgba(0,0,0,0.14)', textAlign: 'center' }}>
            <p className="heading-desc" style={{ marginBottom: '1rem', color: '#7873f5' }}>Advertisement</p>
            <div style={{ width: '100%', minHeight: '300px' }}>
              {/* AdSense ad placeholder */}
            </div>
          </div>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 className="section-title" style={{ color: '#ff6ec4', fontSize: '1.8rem', marginBottom: '1.5rem' }}>Data Security</h2>
            <p className="heading-desc" style={{ marginBottom: '1rem' }}>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Voice recordings are processed securely and are not stored longer than necessary for service provision.
            </p>
            <p className="heading-desc">
              We use industry-standard encryption and security protocols to protect data transmission and storage. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 className="section-title" style={{ color: '#ff6ec4', fontSize: '1.8rem', marginBottom: '1.5rem' }}>Your Rights</h2>
            <p className="heading-desc" style={{ marginBottom: '1rem' }}>
              You have the right to access, update, or delete your personal information. You can also opt out of certain data collection practices or request that we stop processing your data. Contact us if you wish to exercise these rights.
            </p>
            <p className="heading-desc">
              If you're located in the European Union, you have additional rights under GDPR, including the right to data portability and the right to lodge a complaint with a supervisory authority.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 className="section-title" style={{ color: '#ff6ec4', fontSize: '1.8rem', marginBottom: '1.5rem' }}>Contact Us</h2>
            <p className="heading-desc">
              If you have any questions about this Privacy Policy or our data practices, please contact us through our contact page or email us directly. We're committed to addressing your privacy concerns promptly and transparently.
            </p>
          </section>

          <p className="heading-desc" style={{ marginTop: '3rem', fontWeight: 700, textAlign: 'center', fontSize: '1.1rem' }}>
            We are committed to protecting your privacy while providing the best possible Telugu AI voice chat experience.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;