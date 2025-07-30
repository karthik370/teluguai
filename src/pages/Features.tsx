import React from 'react';

const Features: React.FC = () => {
  return (
    <>
      <title>Features - Telugu AI Voice Chat</title>
      <meta name="description" content="Explore the powerful features of our Telugu AI Voice Chat, including real-time conversation, dynamic AI personalities, selectable voice genders, and high-quality audio." />
    <div className="main-bg">
      <div className="main-card" style={{ maxWidth: '680px' }}>
        <h1 className="animate-gradient section-title" style={{ fontSize: '2.2rem', marginBottom: '2rem' }}>Explore Our Features</h1>
        <p className="heading-desc" style={{ textAlign: 'center', marginBottom: '2.2rem' }}>
          Discover the powerful features that make Telugu AI Voice Chat the most advanced and engaging platform for conversational AI in Telugu.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.8rem', marginBottom: '2.5rem', justifyContent: 'center' }}>
          <div className="blog-card" style={{ minWidth: '260px', flex: '1 1 260px' }}>
            <h2 className="section-title" style={{ color: '#ff6ec4' }}>Real-Time Voice Conversation</h2>
            <p className="heading-desc">Experience fluid, real-time conversations. Simply tap the microphone, speak in English or Telugu, and receive an instant, natural-sounding voice response in Telugu. Our low-latency processing ensures your chat feels smooth and interactive.</p>
          </div>
          <div className="blog-card" style={{ minWidth: '260px', flex: '1 1 260px' }}>
            <h2 className="section-title" style={{ color: '#ff6ec4' }}>Dynamic AI Personalities</h2>
            <p className="heading-desc">Tired of monotonous AI? Choose from a range of unique personalities like Romantic, Sarcastic, or Storyteller to make your conversations more entertaining and unpredictable. Each personality offers a different conversational style and tone.</p>
          </div>
          <div className="blog-card" style={{ minWidth: '260px', flex: '1 1 260px' }}>
            <h2 className="section-title" style={{ color: '#ff6ec4' }}>Dual Input: Voice & Text</h2>
            <p className="heading-desc">Whether you prefer to speak or type, we've got you covered. Use the microphone for hands-free voice input or type your questions in the text box. Our AI processes both seamlessly to provide a comprehensive user experience.</p>
          </div>
          <div className="blog-card" style={{ minWidth: '260px', flex: '1 1 260px' }}>
            <h2 className="section-title" style={{ color: '#ff6ec4' }}>Selectable Voice Gender</h2>
            <p className="heading-desc">Customize your listening experience by choosing between high-quality male and female voices for the AI's responses. Select the voice that you find most pleasant and natural to listen to.</p>
          </div>
          <div className="blog-card" style={{ minWidth: '260px', flex: '1 1 260px' }}>
            <h2 className="section-title" style={{ color: '#ff6ec4' }}>Crystal-Clear Audio Output</h2>
            <p className="heading-desc">Powered by Google's advanced Text-to-Speech technology, our AI responses are delivered in a clear, expressive, and high-fidelity voice, making interactions more immersive and enjoyable.</p>
          </div>
          <div className="blog-card" style={{ minWidth: '260px', flex: '1 1 260px' }}>
            <h2 className="section-title" style={{ color: '#ff6ec4' }}>Fully Mobile Responsive</h2>
            <p className="heading-desc">Enjoy a seamless experience on any device. Our application is fully optimized for desktops, tablets, and smartphones, ensuring you can chat with our AI anytime, anywhere.</p>
          </div>
        </div>
        <div className="ad-section" style={{ margin: '2.2rem 0', padding: '1.1rem', borderRadius: '1.2rem', background: 'rgba(0,0,0,0.13)' }}>
          <p className="heading-desc" style={{ marginBottom: '0.5rem', color: '#7873f5' }}>Advertisement</p>
          <div style={{ width: '100%', minHeight: '120px' }}>{/* AdSense ad placeholder */}</div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Features;
