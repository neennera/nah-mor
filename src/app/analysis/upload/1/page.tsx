export default function Upload1Page() {
  return (
    <main className="container mx-auto p-8">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-6">
          <a href="/analysis" className="text-blue-600 hover:text-blue-800">← Back to Analysis</a>
        </nav>
        
        <h1 className="text-3xl font-bold mb-6">Upload Section 1</h1>
        
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Data Upload Interface</h2>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
            <div className="text-4xl mb-4">📁</div>
            <h3 className="text-lg font-medium mb-2">Upload Your Data Files</h3>
            <p className="text-gray-600 mb-4">Drag and drop files here or click to browse</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Choose Files
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Supported Formats</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• CSV files</li>
                <li>• Excel spreadsheets</li>
                <li>• JSON data</li>
                <li>• XML documents</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Upload Stats</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Max file size: 10MB</li>
                <li>• Files uploaded today: 23</li>
                <li>• Total uploads: 156</li>
                <li>• Success rate: 98.7%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
