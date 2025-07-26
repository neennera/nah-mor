'use client';

import { useEffect } from 'react';

export default function SummaryPage() {
  useEffect(() => {
    // Optional: you can auto-redirect after X seconds
    // setTimeout(() => router.push('/final'), 5000);
  }, []);

  return (
    <div className="w-screen h-screen bg-black overflow-hidden">
      <video
        src="/celebration.mp4"
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      />
    </div>
  );
}
