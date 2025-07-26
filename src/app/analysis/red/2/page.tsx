export default function RedAnalysis2Page() {
  return (
    <main className="container mx-auto p-8">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-6">
          <a href="/analysis" className="text-blue-600 hover:text-blue-800">← Back to Analysis</a>
        </nav>
        
        <h1 className="text-3xl font-bold mb-6 text-red-700">Red Analysis 2: Error Tracking</h1>
        
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">System Error Analysis</h3>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-red-800 mb-2">Critical Errors (24h)</h4>
              <div className="text-2xl font-bold text-red-600">23</div>
              <p className="text-sm text-red-600">↑ 12% from yesterday</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">Error Categories</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Database Connection</span>
                  <span className="font-medium">8</span>
                </div>
                <div className="flex justify-between">
                  <span>Authentication Failure</span>
                  <span className="font-medium">6</span>
                </div>
                <div className="flex justify-between">
                  <span>Network Timeout</span>
                  <span className="font-medium">5</span>
                </div>
                <div className="flex justify-between">
                  <span>Data Validation</span>
                  <span className="font-medium">4</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">Resolution Status</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Resolved</span>
                  <span className="text-green-600 font-medium">18</span>
                </div>
                <div className="flex justify-between">
                  <span>In Progress</span>
                  <span className="text-yellow-600 font-medium">3</span>
                </div>
                <div className="flex justify-between">
                  <span>Pending</span>
                  <span className="text-red-600 font-medium">2</span>
                </div>
                <div className="flex justify-between">
                  <span>Average Resolution Time</span>
                  <span className="font-medium">2.4h</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-800 mb-2">Recommended Actions</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Increase database connection pool size</li>
              <li>• Implement retry mechanisms for network timeouts</li>
              <li>• Review authentication token expiration policies</li>
              <li>• Add additional monitoring for peak usage periods</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
