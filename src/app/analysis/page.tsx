export default function AnalysisPage() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Analysis Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Upload Section 1 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-blue-800">Upload Section 1</h3>
          <a 
            href="/analysis/upload/1" 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 inline-block w-full text-center"
          >
            View Upload 1
          </a>
        </div>

        {/* Red Analysis Sections */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-red-800">Red Analysis</h3>
          <div className="space-y-2">
            <a 
              href="/analysis/red/1" 
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 inline-block w-full text-center text-sm"
            >
              Red Analysis 1
            </a>
            <a 
              href="/analysis/red/2" 
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 inline-block w-full text-center text-sm"
            >
              Red Analysis 2
            </a>
            <a 
              href="/analysis/red/3" 
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 inline-block w-full text-center text-sm"
            >
              Red Analysis 3
            </a>
          </div>
        </div>

        {/* Upload Section 2 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-blue-800">Upload Section 2</h3>
          <a 
            href="/analysis/upload/2" 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 inline-block w-full text-center"
          >
            View Upload 2
          </a>
        </div>

        {/* Green Analysis Sections */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-green-800">Green Analysis</h3>
          <div className="space-y-2">
            <a 
              href="/analysis/green/1" 
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 inline-block w-full text-center text-sm"
            >
              Green Analysis 1
            </a>
            <a 
              href="/analysis/green/2" 
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 inline-block w-full text-center text-sm"
            >
              Green Analysis 2
            </a>
            <a 
              href="/analysis/green/3" 
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 inline-block w-full text-center text-sm"
            >
              Green Analysis 3
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Select an analysis section above to view detailed insights and data visualization.
        </p>
      </div>
    </main>
  )
}
