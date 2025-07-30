import React, { useState, useRef, useEffect } from 'react';
import Avatar from './Avatar'; // Import the new 3D Avatar component
import type { AvatarPersonality } from './Avatar';

interface AICompanionProps {
  isVisible: boolean;
  onToggle: () => void;
  personality: string;
  voiceGender: 'MALE' | 'FEMALE';
  wsRef: React.MutableRefObject<WebSocket | null>;
  wsReady: boolean;
}

const AICompanion: React.FC<AICompanionProps> = ({
  isVisible,
  onToggle,
  personality,
  voiceGender,
  wsRef,
  wsReady
}) => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [currentMessage, setCurrentMessage] = useState('');
  const [avatarPersonality, setAvatarPersonality] = useState<AvatarPersonality>('girl');
  const [emotionalContext, setEmotionalContext] = useState<string>('');
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Listen for WebSocket messages
  useEffect(() => {
    if (!wsRef.current) return;

    const handleMessage = (event: MessageEvent) => {
      const msg = JSON.parse(event.data);
      if (msg.type === 'audio') {
        setAudioUrl(msg.audioUrl);
        setIsProcessing(false);
      }
      if (msg.type === 'text') {
        setCurrentMessage(msg.text);
        // Analyze text for emotional context
        setEmotionalContext(msg.text);
      }
    };

    const ws = wsRef.current;
    ws.addEventListener('message', handleMessage);
    return () => {
      ws.removeEventListener('message', handleMessage);
    };
  }, [wsRef]);

  // Map personality to avatar type
  useEffect(() => {
    // You can customize this mapping based on your personality types
    if (personality.toLowerCase().includes('girl') || personality.toLowerCase().includes('female') || voiceGender === 'FEMALE') {
      setAvatarPersonality('girl');
    } else {
      setAvatarPersonality('boy');
    }
  }, [personality, voiceGender]);

  // Auto-play audio
  useEffect(() => {
    if (audioUrl && audioRef.current) {
      setIsSpeaking(true);
      audioRef.current.src = audioUrl;
      audioRef.current.play();
      
      audioRef.current.onended = () => {
        setIsSpeaking(false);
        setAudioUrl(null);
      };
    }
  }, [audioUrl]);

  // Push-to-talk functionality
  const handleVoiceStart = async () => {
    if (!wsReady || isProcessing || isSpeaking) return;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
      
      audioChunksRef.current = [];
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };
      
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        sendAudioToBackend(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };
      
      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
      setIsListening(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const handleVoiceStop = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
      setIsListening(false);
      setIsProcessing(true);
    }
  };

  const sendAudioToBackend = (audioBlob: Blob) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Audio = (reader.result as string).split(',')[1];
        wsRef.current?.send(JSON.stringify({
          type: 'audio',
          audio: base64Audio,
          personality: personality,
          voiceGender: voiceGender
        }));
      };
      reader.readAsDataURL(audioBlob);
    } else {
      console.error('WebSocket is not open.');
      setIsProcessing(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="ai-companion-container">
      <div className="companion-container">
        {/* Grok Ani-style 3D Avatar */}
        <Avatar 
          personality={avatarPersonality}
          isListening={isListening}
          isSpeaking={isSpeaking}
          audioUrl={audioUrl}
          emotionalContext={emotionalContext}
        />
        
        {/* Personality Switcher */}
        <div className="personality-switcher">
          <button 
            className={`personality-btn ${avatarPersonality === 'girl' ? 'active' : ''}`}
            onClick={() => setAvatarPersonality('girl')}
            title="Switch to Girl Avatar"
          >
            👧
          </button>
          <button 
            className={`personality-btn ${avatarPersonality === 'boy' ? 'active' : ''}`}
            onClick={() => setAvatarPersonality('boy')}
            title="Switch to Boy Avatar"
          >
            👦
          </button>
        </div>
      </div>

      {/* Voice Visualization */}
      {isSpeaking && (
        <div className="voice-waves">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      )}

      {/* Status Indicators */}
      <div className="status-indicators">
        {isListening && (
          <div className="status listening">
            <div className="pulse-ring"></div>
            <span>Listening...</span>
          </div>
        )}
        {isProcessing && (
          <div className="status processing">
            <div className="spinner"></div>
            <span>Processing...</span>
          </div>
        )}
        {isSpeaking && (
          <div className="status speaking">
            <span>Speaking...</span>
          </div>
        )}
      </div>

      {/* Voice Controls */}
      <div className="voice-controls">
        <button
          className={`voice-button ${isListening ? 'active' : ''}`}
          onMouseDown={handleVoiceStart}
          onMouseUp={handleVoiceStop}
          onTouchStart={handleVoiceStart}
          onTouchEnd={handleVoiceStop}
          disabled={!wsReady || isProcessing || isSpeaking}
        >
          <svg className="mic-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
          </svg>
          <span>Hold to Talk</span>
        </button>
      </div>

      {/* Current Message Display */}
      {currentMessage && (
        <div className="message-display">
          <p>{currentMessage}</p>
        </div>
      )}

      {/* Hidden Audio Player */}
      <audio ref={audioRef} style={{ display: 'none' }} />

      {/* Toggle Button */}
      <button className="companion-toggle" onClick={onToggle}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </button>
    </div>
  );
};

export default AICompanion;
