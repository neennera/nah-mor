"use client";

import ImageDisplay from "@/components/ImageDisplay";
import React from "react";

export default function BeautyInfoPage(): JSX.Element {
  const handleMoreInfo1 = (): void => {
    alert("แสดงข้อมูลเพิ่มเติมเกี่ยวกับการลดความกว้างของใบหน้า");
    // Logic for showing more info about face slimming treatment
  };

  const handleMoreInfo2 = (): void => {
    alert("แสดงข้อมูลเพิ่มเติมเกี่ยวกับการเพิ่มความอิ่มของใบหน้าแก้ม");
    // Logic for showing more info about cheek enhancement treatment
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
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">รู้หรือไม่?</h1>

          <p className="text-gray-700 text-lg leading-relaxed">
            คุณสามารถเป็นคนดีขึ้นได้ง่าย ๆ<br />
            เพียงแค่
          </p>
        </div>

        {/* Image Placeholder */}
        <ImageDisplay 
          imageKey="upload1_selfie"
          title="📸 รูปภาพจากการอัพโหลด 1"
          className="w-full h-full"
          fallbackText="ไม่มีรูปภาพจากการอัพโหลด 1"
        />

        {/* Content Items */}
        <div className="space-y-8">
          {/* First Item */}
          <div>
            <div className="flex items-start gap-3 mb-4">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <h3 className="font-semibold text-gray-800 text-lg">
                ลดความกว้างของใบหน้า
              </h3>
            </div>

            <div className="ml-5">
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                โปรโมชันฉีดแฟตแก้ม โบท็อกกราม กับคลีนิค...
                <br />
                ราคา 5,000 จาก 75,999 บาท
              </p>
             
            </div>
          </div>

          {/* Second Item */}
          <div>
            <div className="flex items-start gap-3 mb-4">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <h3 className="font-semibold text-gray-800 text-lg">
                เพิ่มความอิ่มของใบหน้าแก้ม
              </h3>
            </div>

            <div className="ml-5">
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                โปรโมชันฉีดฟีลเลอรโหนกแก้ม กับคลีนิค...
                <br />
                ราคา 9,999 จาก 59,999,xxx บาท
              </p>
             
            </div>
          </div>
              </div>
              
          </div>
          <a
            href="/analysis/upload/2"
            className="w-full m-10 bg-green-200 text-green-800 py-4 px-6 rounded-full font-medium hover:bg-green-300 transition-colors"
          >
            ลองอีกครั้ง
          </a>
    </div>
  );
}
