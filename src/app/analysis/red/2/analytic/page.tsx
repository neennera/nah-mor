'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ImageDisplay from '@/components/ImageDisplay'

export default function ResultPage() {
  const [photo, setPhoto] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const router = useRouter();

  const goodTraits = [
    "มองตาตรง ไม่หลบตา",
    "รอยยิ้มจริงใจ",
    "มีแนวโน้มเป็นคนรับผิดชอบ", 
    "มีสื่อสารที่ชัดเจน",
    "ชอบเรียนรู้ความสัมพันธ์",
  ];

  const badTraits = [
    "มีแววทักแชตคุยกับสาวบ่อ",
    "มือไว ชอบจับชอบทัช",
    "ริมฝีปากบาง มุมปากยก ดูเจ้าชู้",
    "จมูกแหลม โหนกแก้มสูง แสดงความมั่นใจเกินพอด",
    "คิ้วโก่ง แสดงความชอบเสี่ยง ไม่กลัวเจ็บ",
  ];

  useEffect(() => {
    const storedPhoto = localStorage.getItem('userPhoto');
    const storedName = localStorage.getItem('userName');
    if (storedPhoto) setPhoto(storedPhoto);
    if (storedName) setName(storedName);
  }, []);

  const handleContinue = () => {
    router.push('/analysis/red/2/animation'); // Change this path to your desired next route
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Error Analysis Results</h1>

      {photo && (
        <ImageDisplay 
            imageKey="upload1_selfie"
            title="Upload 1 - Error Analysis"
            className="w-full"
            fallbackText="No photo from Upload 1"
          />
      )}

      {name && <h2 className="text-xl font-semibold mb-8">Hello, {name} 👋</h2>}

      <div className="flex flex-col gap-6 w-full max-w-3xl mb-10">
        {/* Green Zone */}
        <div className="flex-1 bg-green-100 border border-green-300 rounded-lg p-4 shadow flex flex-col items-center">
          <img src="/Angel-01.png" alt="Positive traits icon" className="w-512 h-512 mb-2" />
          <h3 className="text-lg font-bold text-green-700 mb-2">✅ Positive Traits</h3>
          <ul className="list-disc list-inside text-green-800 text-center">
            {goodTraits.map((trait, index) => (
              <li key={index}>{trait}</li>
            ))}
          </ul>
        </div>

        {/* Red Zone */}
        <div className="flex-1 bg-red-100 border border-red-300 rounded-lg p-4 shadow flex flex-col items-center">
          <img src="/Devil-01.png" alt="Improvement icon" className="w-512 h-512 mb-2" />
          <h3 className="text-lg font-bold text-red-700 mb-2">❌ Areas to Improve</h3>
          <ul className="list-disc list-inside text-red-800 text-center">
            {badTraits.map((trait, index) => (
              <li key={index}>{trait}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Continue →
      </button>
    </div>
  );
}
