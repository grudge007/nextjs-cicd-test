// app/page.tsx
'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [pong, setPong] = useState('');

  useEffect(() => {
    fetch('/api/ping')
      .then(res => res.text())
      .then(setPong);
  }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Hello from Next.js</h1>
      <p>API says: <strong>{pong}</strong></p>
    </main>
  );
}
