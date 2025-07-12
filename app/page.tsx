'use client';
import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [pong, setPong] = useState('loading...');

  useEffect(() => {
    fetch('/api/ping')
      .then((res) => res.text())
      .then(setPong);
  }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🚀 Deployed via GitHub Actions! its Updated MF..!! Hope it will work</h1>
      <p>
        API says: <strong>{pong}</strong>
      </p>
    </main>
  );
}
