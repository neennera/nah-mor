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
      // Save to localStorage instead of API
      localStorage.setItem('upload1_selfie', photo);
      localStorage.setItem('userPhoto', photo);
      
      if (name.trim()) {
        localStorage.setItem('userName', name.trim());
      }
      
      router.push('/loading/1');
    } else {
      alert('Please enter your name and take a photo before continuing.');
    }
  };

  // name ---------
  const [volunteerName, setVolunteerName] = useState<string>('')
  const [currentVolunteerName, setCurrentVolunteerName] = useState<string>('ไม่ระบุชื่อ')
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    // Get current volunteer name from localStorage
    const storedName = localStorage.getItem('volunteerName')
    if (storedName) {
      setCurrentVolunteerName(storedName)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!volunteerName.trim()) {
      setMessage('กรุณาใส่ชื่ออาสาสมัคร')
      return
    }

    setMessage('')

    try {
      // Save to localStorage instead of API
      const newName = volunteerName.trim()
      localStorage.setItem('volunteerName', newName)
      setCurrentVolunteerName(newName)
      setVolunteerName('')
      setMessage('✅ บันทึกชื่ออาสาสมัครเรียบร้อยแล้ว!')
    } catch (error) {
      console.error('Error updating volunteer name:', error)
      setMessage('❌ เกิดข้อผิดพลาดในการบันทึก')
    }
  }

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

          <p>or</p>

          <button
            className="mt-4 bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700"
          >
            Upload Photo
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

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="volunteerName" className="block text-sm font-medium text-gray-700 mb-2">
                ชื่ออาสาสมัครใหม่
              </label>
              <input
                type="text"
                id="volunteerName"
                value={volunteerName}
                onChange={(e) => setVolunteerName(e.target.value)}
                placeholder="ใส่ชื่ออาสาสมัคร..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
              />
            </div>
            
            <button
              type="submit"
              disabled={!volunteerName.trim()}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold text-lg transition-colors"
            >
              💾 บันทึก
            </button>
            
            {message && (
              <div className={`p-3 rounded-lg text-center ${
                message.includes('✅') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {message}
              </div>
            )}
          </form>


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
