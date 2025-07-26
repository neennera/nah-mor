export default function Upload2Page() {
  return (
    <main className="container mx-auto p-8">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-6">
          <a href="/analysis" className="text-blue-600 hover:text-blue-800">← Back to Analysis</a>
        </nav>
        
        <h1 className="text-3xl font-bold mb-6">Upload Section 2</h1>
        
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Advanced Data Upload</h2>
          
          <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center mb-6 bg-blue-50">
            <div className="text-4xl mb-4">☁️</div>
            <h3 className="text-lg font-medium mb-2">Cloud Storage Integration</h3>
            <p className="text-gray-600 mb-4">Connect to your cloud storage accounts</p>
            <div className="space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Google Drive
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                OneDrive
              </button>
              <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
                Dropbox
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Processing Queue</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 5 files processing</li>
                <li>• 12 files pending</li>
                <li>• Average time: 2.3 min</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Recent Uploads</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• dataset_v2.csv</li>
                <li>• analysis_data.json</li>
                <li>• survey_results.xlsx</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Storage Usage</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Used: 2.4 GB</li>
                <li>• Available: 7.6 GB</li>
                <li>• Quota: 10 GB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
