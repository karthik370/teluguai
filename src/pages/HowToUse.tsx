import React from 'react';

const HowToUse: React.FC = () => {
  return (
    <>
      <title>How to Use - Telugu AI Voice Chat</title>
      <meta name="description" content="A step-by-step guide on how to use our Telugu AI Voice Chat. Learn how to start a conversation, choose AI personalities, select voice genders, and more." />
    <div className="main-bg">
      <div className="main-card" style={{ maxWidth: '540px' }}>
        <h1 className="animate-gradient section-title" style={{ fontSize: '2.2rem', marginBottom: '2rem' }}>How to Use Telugu AI Voice Chat</h1>
        <p className="heading-desc" style={{ textAlign: 'center', marginBottom: '2.2rem' }}>
          Follow these simple steps to start your conversation with our Telugu AI. It's quick, easy, and intuitive!
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div className="blog-card" style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#ff6ec4', minWidth: 32 }}>1</div>
            <div>
              <h2 className="section-title" style={{ color: '#ff6ec4', textAlign: 'left' }}>Start the Conversation</h2>
              <p className="heading-desc" style={{ textAlign: 'left' }}>Navigate to the <a href="/" className="blog-link">Home</a> page. The chat interface will be ready for you. You don't need to sign up or log in to begin.</p>
            </div>
          </div>
          <div className="blog-card" style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#ff6ec4', minWidth: 32 }}>2</div>
            <div>
              <h2 className="section-title" style={{ color: '#ff6ec4', textAlign: 'left' }}>Choose Your Input Method</h2>
              <p className="heading-desc" style={{ textAlign: 'left' }}><span style={{ color: '#fff', fontWeight: 700 }}>For Voice:</span> Tap the large microphone icon. Your browser will ask for microphone permission. Please allow it. The icon will animate to show it's listening.<br/><span style={{ color: '#fff', fontWeight: 700 }}>For Text:</span> Simply type your message in the input box at the bottom.</p>
            </div>
          </div>
          <div className="blog-card" style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#ff6ec4', minWidth: 32 }}>3</div>
            <div>
              <h2 className="section-title" style={{ color: '#ff6ec4', textAlign: 'left' }}>Customize Your Experience</h2>
              <p className="heading-desc" style={{ textAlign: 'left' }}>Before sending your message, you can select the AI's <span style={{ color: '#fff', fontWeight: 700 }}>Personality</span> (e.g., Sarcastic, Romantic) and preferred <span style={{ color: '#fff', fontWeight: 700 }}>Voice Gender</span> (Male/Female) using the dropdown menus. This allows you to tailor the conversation to your liking.</p>
            </div>
          </div>
          <div className="blog-card" style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#ff6ec4', minWidth: 32 }}>4</div>
            <div>
              <h2 className="section-title" style={{ color: '#ff6ec4', textAlign: 'left' }}>Receive the AI's Response</h2>
              <p className="heading-desc" style={{ textAlign: 'left' }}>After you speak or send your text, the AI will process your query and respond in Telugu. The audio will play automatically, and the conversation will be displayed in the chat window. That's it! Continue the conversation as long as you like.</p>
            </div>
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

export default HowToUse;
