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
          {/* Analysis Placeholder */}
          <div className="bg-gray-300 h-64 flex items-center justify-center mb-6 rounded">
            <span className="text-2xl font-semibold text-gray-700">
              Analysis
            </span>
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
            <button className="bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-semibold py-3 px-12 rounded-lg transition-colors duration-200">
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
