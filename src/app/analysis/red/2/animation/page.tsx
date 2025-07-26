'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SummaryPage() {
    const router = useRouter()

  useEffect(() => {
    setTimeout(() => router.push('/analysis/red/3'), 3000);
  }, [router]);  return (
    <div className='w-screen h-screen flex items-center justify-center  inset-0 absolute'>
    <div className="w-[390px] h-screen bg-black overflow-hidden">
      <video
        src="/celebration.mp4"
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      />
    </div></div>
  );
}
