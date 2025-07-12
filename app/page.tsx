'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [pong, setPong] = useState('');
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    fetch('/api/ping')
      .then(res => res.text())
      .then(setPong);
  }, []);

  const handleClick = async () => {
    const res = await fetch('/api/ping');
    const text = await res.text();
    setPong(text + ' (from button)');
    setClicked(true);
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Hello from Next.js</h1>
      <p>API says: <strong>{pong}</strong></p>

      <button
        onClick={handleClick}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
