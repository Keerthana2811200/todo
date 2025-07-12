import React, { useState, useRef } from 'react';

export default function TodoForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const recognitionRef = useRef(null);

  const submit = e => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title });
    setTitle('');
  };

  const startListening = () => {
    // Check for browser support
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    if (!recognitionRef.current) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = event => {
        const spokenText = event.results[0][0].transcript;
        setTitle(prev => `${prev} ${spokenText}`.trim());
      };

      recognition.onerror = event => {
        console.error('Speech recognition error:', event.error);
      };

      recognitionRef.current = recognition;
    }

    recognitionRef.current.start();
  };

  return (
    <form onSubmit={submit} className="task-form">
      <input
        type="text"
        value={title}
        placeholder="New Task..."
        onChange={e => setTitle(e.target.value)}
      />
      <button type="button" onClick={startListening}>🎤</button>
      <button type="submit">Add</button>
    </form>
  );
}
