'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function LoadingPage() {
  const [photo, setPhoto] = useState<string | null>(null);
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const router = useRouter();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const messages = [
    "🧠 Initializing..",
    "📸 Scanning left eye using ChatGPT 4.0...",
    "📸 Scanning right eye using Gemini 3.5...",
    "📸 Analyzing nose structure using Claude...",
    "📸 Detecting lip shape using DeepSeek...",
    "📸 Evaluating ear alignment using Llama 3...",
    "🧬 Analyzing facial features...",
    "🔎 Detecting emotions...",
    "📊 Comparing with database...",
    "🤖 Finalizing prediction...",
    "✅ Analysis complete!"
  ];

  useEffect(() => {
    const storedPhoto = localStorage.getItem('userPhoto');
    if (!storedPhoto) {
      router.push('/');
      return;
    }

    setPhoto(storedPhoto);

    let currentLine = 0;
    intervalRef.current = setInterval(() => {
      if (currentLine < messages.length) {
        setVisibleLines(prev => [...prev, messages[currentLine]]);
        currentLine++;
      } else {
        clearInterval(intervalRef.current!);
        // Redirect 1s after the last line is shown
        setTimeout(() => {
          router.push('/analysis/red/1');
        }, 1000);
      }
    }, 300); // Show a line every 500ms

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <h2 className="text-xl font-semibold mb-6">🔍 Analysing your selfie...</h2>

      {photo && (
        <div className="relative w-[320px] h-[320px] rounded overflow-hidden border-4 border-green-500 shadow-xl mb-6">
          <img
            src={photo}
            alt="Scanned selfie"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute w-full h-[4px] bg-green-400 animate-scan" />
          </div>
        </div>
      )}

      <div className="text-sm text-green-400 space-y-1 text-center">
        {visibleLines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      <div className="mt-8 w-10 h-10 border-4 border-green-400 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
