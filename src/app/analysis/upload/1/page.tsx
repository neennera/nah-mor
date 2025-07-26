'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Webcam from 'react-webcam';

export default function Home() {
  const webcamRef = useRef<Webcam | null>(null);
  const router = useRouter();

  const [photo, setPhoto] = useState<string | null>(null);
  const [name, setName] = useState<string>(''); // ← New name state

  const capture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setPhoto(imageSrc);
    }
  };

  const retake = () => {
    setPhoto(null);
    setName(''); // Reset name when retaking photo
  };

  const confirm = () => {
    if (photo && name.trim()) {
      localStorage.setItem('userPhoto', photo);
      localStorage.setItem('userName', name);
      router.push('/loading');
    } else {
      alert('Please enter your name before continuing.');
    }
  };

  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen gap-6 p-8 sm:p-20">
      <h1 className="text-2xl font-bold text-center">📸 Take a Selfie</h1>

      {!photo ? (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{
              width: 512,
              height: 512,
              facingMode: 'user',
            }}
            className="rounded shadow-md object-cover w-[320px] h-[320px]"
          />

          <button
            onClick={capture}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Capture Photo
          </button>
        </>
      ) : (
        <>
          <img
            src={photo}
            alt="Captured selfie"
            className="rounded shadow-md border w-[320px] h-[320px] object-cover"
          />

          <p className="text-lg font-semibold">Is this photo OK?</p>

          {/* Name input */}
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="mt-2 p-2 border rounded w-72 text-black"
          />

          <div className="flex gap-4 mt-4">
            <button
              onClick={confirm}
              className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
            >
              Yes, Continue
            </button>
            <button
              onClick={retake}
              className="bg-gray-300 text-black px-5 py-2 rounded hover:bg-gray-400"
            >
              Retake
            </button>
          </div>
        </>
      )}
    </div>
  );
}
