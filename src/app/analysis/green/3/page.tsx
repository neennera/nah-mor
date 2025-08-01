"use client";

import ImageDisplay from "@/components/ImageDisplay";
import React, { useState, useEffect } from "react";

export default function PersonalityTestResult(): JSX.Element {
  const [progressWidth, setProgressWidth] = useState<number>(0);

  useEffect(() => {
    // Animate progress bar on mount
    const timer = setTimeout(() => {
      setProgressWidth(65);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleRetakeQuiz = (): void => {
    alert("เริ่มทำแบบทดสอบใหม่!");
    // Logic for retaking quiz
  };


  const handleShare = async (): Promise<void> => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "ผลการทดสอบบุคลิกภาพ",
          text: 'ฉันได้ "นักรักษ์อวาดีฟ" จากการทดสอบบุคลิกภาพ!',
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("คัดลอกลิงก์แล้ว!");
      } catch (error) {
        console.error("Error copying to clipboard:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-black py-4">
        <div className="flex justify-center">
          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">QUIZ</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-6 py-8">
        {/* Result Title */}
       <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-3">ผลลัพธ์</h1>
          <h2 className="text-xl font-bold text-green-500 mb-6">
            "พ่อเตาปฏิกรณ์"
          </h2>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-8">
            คุณเป็นคน Green Flag ขั้นเทพ!
            <br />
            เสน่ห์อบอุ่นพุ่งแรงกว่าความร้อนในไมโครเวฟ
            <br />
            ความรับผิดชอบเต็มเปี่ยมขนาดเป็นรัฐบาลได้!
          </p>
        </div>

        <ImageDisplay 
            imageKey="upload2_selfie"
            title="Upload 2 Photo"
            className="w-full"
            fallbackText="No photo from Upload 2"
          />

       {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-800 font-medium">Angel's core</span>
            <span className="text-gray-800 font-medium">80%</span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-6 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${progressWidth}%` }}
            ></div>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-4">
        

          <div className="flex items-center gap-4">
              <a
             href='/result'
              className="flex-1 bg-yellow-200 text-yellow-800 py-3 px-6 rounded-full font-medium hover:bg-yellow-300 transition-colors"
            >
              Ranking
            </a>

            <button
              onClick={handleShare}
              className="w-12 h-12 bg-gray-400 hover:bg-gray-500 rounded-lg flex items-center justify-center transition-colors"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17l9.2-9.2M17 17V7h-10"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
