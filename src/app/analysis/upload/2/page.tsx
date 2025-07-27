'use client';

import { useEffect, useRef, useState } from 'react';
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

  const confirm = async () => {
    if (photo) {
      try {
        // Save image to API
        const imageResponse = await fetch('/api/picture', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            image: photo, 
            key: 'upload2_selfie' 
          })
        })
        
        if (imageResponse.ok) {
          localStorage.setItem('userPhoto', photo);
          router.push('/loading/2');
        } else {
          alert('Failed to save image. Please try again.');
        }
      } catch (error) {
        console.error('Error saving image:', error);
        alert('Error saving image. Please try again.');
      }
    } else {
      alert('Please enter your name and take a photo before continuing.');
    }
  };

  // name ---------
   const [volunteerName, setVolunteerName] = useState<string>('')
  const [currentVolunteerName, setCurrentVolunteerName] = useState<string>('ไม่ระบุชื่อ')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    // Fetch current volunteer name
    const fetchVolunteerName = async () => {
      try {
        const response = await fetch('/api/volunteer')
        const data = await response.json()
        if (data.volunteerName) {
          setCurrentVolunteerName(data.volunteerName)
        }
      } catch (error) {
        console.error('Error fetching volunteer name:', error)
      }
    }
    
    fetchVolunteerName()
  }, [])

  

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
