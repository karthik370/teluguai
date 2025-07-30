import React, { useState, useRef } from 'react';
import AICompanion from '../components/AICompanion';
import '../components/AICompanion.css';

const personalities = [
  { label: 'Default', value: 'default' },
  { label: 'Romantic', value: 'romantic' },
  { label: 'Sarcastic', value: 'sarcastic' },
  { label: 'Storyteller', value: 'storyteller' },
  { label: 'Unhinged', value: 'unhinged' },
];

const WS_URL = import.meta.env.VITE_WS_URL || 'wss://ai-backend-594m.onrender.com/'; // Use environment variable or fallback to local

const HomePage: React.FC = () => {
  const [personality, setPersonality] = useState('default');
  const [voiceGender, setVoiceGender] = useState<'MALE' | 'FEMALE'>('FEMALE');
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [inputText, setInputText] = useState('');
  const [wsReady, setWsReady] = useState(false);
  const [companionVisible, setCompanionVisible] = useState(true);

  // Persistent WebSocket connection
  React.useEffect(() => {
    const ws = new WebSocket(WS_URL);
    wsRef.current = ws;
    ws.onopen = () => setWsReady(true);
    ws.onclose = () => setWsReady(false);
    ws.onerror = () => setWsReady(false);
    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.type === 'audio') setAudioUrl(msg.audioUrl);
    };
    return () => { ws.close(); };
  }, []);

  // Play audio automatically when audioUrl changes
  React.useEffect(() => {
    if (audioUrl && audioRef.current) {
      setIsLoading(false);
      setIsSpeaking(true);
      audioRef.current.src = audioUrl;
      audioRef.current.play();
      audioRef.current.onended = () => setIsSpeaking(false);
    }
  }, [audioUrl]);

  const handleMicClick = async () => {
    if (!isRecording) {
      setAudioUrl(null);
      setIsLoading(false);
      setIsSpeaking(false);
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new window.MediaRecorder(stream, { mimeType: 'audio/webm' });
      audioChunksRef.current = [];
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        sendAudioToBackend(audioBlob);
      };
      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
      setIsRecording(true);
    } else {
      mediaRecorderRef.current?.stop();
      setIsRecording(false);
      setIsLoading(true);
    }
  };

  const sendAudioToBackend = (audioBlob: Blob) => {
    if (!wsRef.current || wsRef.current.readyState !== 1) {
      setIsLoading(false);
      alert('Connection not ready. Please try again.');
      return;
    }
    setIsLoading(true);
    const reader = new FileReader();
    reader.onload = () => {
      wsRef.current?.send(JSON.stringify({ type: 'start', personality, voiceGender }));
      if (reader.result && typeof reader.result !== 'string') {
        wsRef.current?.send(reader.result);
      }
      wsRef.current?.send(JSON.stringify({ type: 'end' }));
    };
    reader.readAsArrayBuffer(audioBlob);
  };

  const sendTextToBackend = (text: string) => {
    if (!wsRef.current || wsRef.current.readyState !== 1) {
      setIsLoading(false);
      alert('Connection not ready. Please try again.');
      return;
    }
    setIsLoading(true);
    setAudioUrl(null);
    setIsSpeaking(false);
    wsRef.current.send(
      JSON.stringify({ type: 'text', personality, text, voiceGender })
    );
  };

  return (
    <div className="main-bg">
      <div className="main-card">
        {/* Main Heading */}
        <div className="heading-section">
          <h1 className="heading-gradient">Telugu Voice Chat</h1>
          <p className="heading-desc">AI-Powered Conversational Experience</p>
        </div>
        {/* Personality Selection */}
        <div className="mb-8 w-full">
          <h2 className="text-xl font-bold text-white mb-5 text-center">Choose Personality</h2>
          <div className="personality-grid">
            {personalities.map((p) => (
              <button
                key={p.value}
                onClick={() => setPersonality(p.value)}
                className={`personality-btn${personality === p.value ? ' selected' : ''}`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
        {/* Voice Gender Selection */}
        <div className="mb-8 w-full">
          <h2 className="text-xl font-bold text-white mb-5 text-center">Voice Gender</h2>
          <div className="voice-gender-row">
            <button
              onClick={() => setVoiceGender('MALE')}
              className={`voice-btn${voiceGender === 'MALE' ? ' selected' : ''}`}
            >
              Male Voice
            </button>
            <button
              onClick={() => setVoiceGender('FEMALE')}
              className={`voice-btn${voiceGender === 'FEMALE' ? ' selected' : ''}`}
            >
              Female Voice
            </button>
          </div>
        </div>
        {/* Input Section */}
        <div className="input-row">
          <input
            type="text"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            placeholder="Type your question in English..."
            className="input-box"
            disabled={isLoading}
          />
          <button
            type="submit"
            onClick={() => { if (inputText.trim() && !isLoading && wsReady) { sendTextToBackend(inputText); setInputText(''); } }}
            disabled={isLoading || !inputText.trim() || !wsReady}
            className="send-btn"
          >
            Send
          </button>
        </div>
        {/* Mic Button */}
        <div className="mic-section">
          <button
            onClick={handleMicClick}
            disabled={isLoading}
            className={`mic-btn${isRecording ? ' recording' : ''}`}
          >
            <svg className="mic-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
            </svg>
          </button>
          <p className="mic-status">
            {isRecording ? (
              <>
                Listening... <br />
                <span style={{fontWeight:600, color:'#ffb86c'}}>Click stop to get response</span>
              </>
            ) : (isLoading ? 'Processing...' : 'Tap the mic to speak')}
          </p>
        </div>
        {/* Status & Audio Player */}
        <div className="audio-section">
          {isLoading && (
            <div className="audio-processing">
              <span>Processing</span>
              <div className="audio-dot"></div>
            </div>
          )}
          {isSpeaking && !isLoading && (
            <div className="speaking-waves" style={{marginTop: '1rem'}}>
              <span /> <span /> <span /> <span />
              <span style={{marginLeft:8, color:'#fff', fontWeight:600}}>Speaking...</span>
            </div>
          )}
          <audio ref={audioRef} className="hidden" onPlay={() => setIsSpeaking(true)} onPause={() => setIsSpeaking(false)} />
        </div>
      </div>
      
      {/* AI Companion Character */}
      <AICompanion
        isVisible={companionVisible}
        onToggle={() => setCompanionVisible(!companionVisible)}
        personality={personality}
        voiceGender={voiceGender}
        wsRef={wsRef}
        wsReady={wsReady}
      />
    </div>
  );
};

export default HomePage;
