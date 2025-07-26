import ImageDisplay from '@/components/ImageDisplay'

export default function RedAnalysis1Page() {
  const analysisData = [
    { text: "ปากบางกำลังดี เส้นขอบชัด ดูเซ็กซี่และดึงดูดใจ", percentage: 70 },
    { text: "ดวงตาคมชัด รูปอัลมอนด์ มองดูลึกลับและมีเสน่ห์", percentage: 80 },
    { text: "ขากรรไกรกำหนดชัด เพิ่มความคมชัดและความมั่นใจ", percentage: 75 },
    {
      text: "คิ้วหนาดกดำ ดูแมสคูลีนและเซ็กซี่ เพิ่มเสน่ห์ให้กับใบหน้า",
      percentage: 89,
    },
    { text: "รูปหน้าแหลม เหลี่ยมเกินไป", percentage: 95 },
  ];

  return (
    <main className="container mx-auto p-8">
      <div className="max-w-4xl mx-auto">
       <div className="bg-white border rounded-lg p-6 shadow-sm max-w-md mx-auto">
          <div className="bg-red-100 h-64 flex items-center justify-center mb-6 rounded">
              <ImageDisplay 
              imageKey="upload1_selfie"
              title="📸 รูปภาพจากการอัพโหลด 1"
              className="w-full h-full"
              fallbackText="ไม่มีรูปภาพจากการอัพโหลด 1"
            />
          </div>

          {/* Analysis Results */}
          <div className="space-y-4">
            {analysisData.map((item, index) => (
              <div key={index} className="flex justify-between items-start">
                <span className="text-gray-800 text-sm flex-1 mr-4 leading-relaxed">
                  • {item.text}
                </span>
                <span className="text-gray-800 font-semibold text-lg">
                  {item.percentage}%
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <a href="/analysis/red/2/analytic" className="bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-semibold py-3 px-12 rounded-lg transition-colors duration-200">
              Next
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
