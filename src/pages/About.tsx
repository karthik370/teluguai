import React from 'react';

const About: React.FC = () => {
  return (
    <>
      <title>About - Telugu AI Voice Chat</title>
      <meta name="description" content="Learn about Telugu AI Voice Chat, our mission to preserve and promote Telugu language through cutting-edge artificial intelligence technology." />
      <div className="main-bg">
        <div className="main-card" style={{ maxWidth: '900px' }}>
          <h1 className="animate-gradient" style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '2.5rem' }}>
            About Telugu AI Voice Chat
          </h1>
          
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 className="section-title" style={{ color: '#ff6ec4', fontSize: '1.8rem', marginBottom: '1.5rem' }}>Our Mission</h2>
            <p className="heading-desc" style={{ marginBottom: '1rem' }}>
              Telugu AI Voice Chat is dedicated to preserving and promoting the Telugu language through cutting-edge artificial intelligence technology. We believe that language is the cornerstone of culture, and our mission is to make Telugu more accessible to speakers worldwide while maintaining its rich linguistic heritage.
            </p>
            <p className="heading-desc">
              Our platform combines advanced natural language processing, speech recognition, and voice synthesis to create an immersive conversational experience that helps users practice, learn, and enjoy Telugu in a natural, engaging way.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 className="section-title" style={{ color: '#ff6ec4', fontSize: '1.8rem', marginBottom: '1.5rem' }}>Our Technology</h2>
            <p className="heading-desc" style={{ marginBottom: '1rem' }}>
              We leverage state-of-the-art AI models specifically trained on Telugu language patterns, cultural contexts, and conversational nuances. Our technology stack includes advanced speech recognition, natural language understanding, and high-quality text-to-speech synthesis optimized for Telugu phonetics.
            </p>
            <p className="heading-desc">
              The platform supports multiple personalities and conversation styles, allowing users to engage with AI that adapts to their preferences and learning goals while maintaining authentic Telugu communication patterns.
            </p>
          </section>

          <div className="ad-section" style={{ margin: '3rem 0', padding: '1.5rem', borderRadius: '1.5rem', background: 'rgba(0,0,0,0.14)', textAlign: 'center' }}>
            <p className="heading-desc" style={{ marginBottom: '1rem', color: '#7873f5' }}>Advertisement</p>
            <div style={{ width: '100%', minHeight: '300px' }}>
              {/* AdSense ad placeholder */}
            </div>
          </div>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 className="section-title" style={{ color: '#ff6ec4', fontSize: '1.8rem', marginBottom: '1.5rem' }}>Community Impact</h2>
            <p className="heading-desc" style={{ marginBottom: '1rem' }}>
              Our platform serves Telugu speakers across the globe, from native speakers looking to maintain their language skills to diaspora communities seeking to connect with their cultural roots. We're particularly focused on helping younger generations develop confidence in Telugu communication.
            </p>
            <p className="heading-desc">
              Through our technology, we're building bridges between traditional Telugu culture and modern digital communication, ensuring that this beautiful language continues to thrive in the digital age.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 className="section-title" style={{ color: '#ff6ec4', fontSize: '1.8rem', marginBottom: '1.5rem' }}>Developer</h2>
            <p className="heading-desc" style={{ marginBottom: '1rem' }}>
              Telugu AI Voice Chat is developed by Govardhan, a passionate technologist committed to preserving and promoting Telugu language through innovative AI solutions. With expertise in artificial intelligence, natural language processing, and cultural linguistics, our development focuses on creating authentic, engaging experiences for Telugu speakers worldwide.
            </p>
            <p className="heading-desc">
              We continuously improve our platform based on user feedback and advances in AI technology, ensuring that Telugu AI Voice Chat remains at the forefront of language technology innovation.
            </p>
          </section>

          <p className="heading-desc" style={{ marginTop: '3rem', fontWeight: 700, textAlign: 'center', fontSize: '1.1rem' }}>
            Join us in celebrating and preserving the Telugu language for future generations through the power of artificial intelligence.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;