import ImageDisplay from '../../../../components/ImageDisplay';

export default function GreenAnalysis1Page() {
  const analysisData = [
    { text: "ดวงตากลมโต มองดูซื่อสัตย์ ", percentage: 89 },
    { text: "รอยยิ้มจริงใจ ปากเต็มอิ่ม ", percentage: 92 },
    { text: "คางมน กลมกลืน แสดงถึงความหนักแน่น", percentage: 86 },
    { text: "หน้าผากกว้าง ดูเปิดใจและรับฟัง", percentage: 88 },
    { text: "รูปหน้าเรียบ ไม่แหลม ไม่เหลี่ยมเกินไป", percentage: 83 },
  ];

  return (
    <main className="container mx-auto p-8">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-6">
          <a href="/analysis" className="text-blue-600 hover:text-blue-800">
            ← Back to Analysis
          </a>
        </nav>

        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          วิเคราะห์ใบหน้าของท่าน
        </h1>

        <div className="bg-white border rounded-lg p-6 shadow-sm max-w-md mx-auto">
          {/* Images Section */}
          <div className="grid grid-cols-1 gap-4 mb-6">
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">รูปถ่ายที่ 1</h3>
              <ImageDisplay className='h-56' imageKey="upload1_selfie" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">รูปถ่ายที่ 2</h3>
              <ImageDisplay className='h-56' imageKey="upload2_selfie" />
            </div>
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
          <a href="/analysis/green/2/analytic" className="mt-8 flex justify-center">
            <button className="bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-semibold py-3 px-12 rounded-lg transition-colors duration-200">
              Next
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}
