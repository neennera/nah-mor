export default function RedAnalysis1Page() {
  return (
    <main className="container mx-auto p-8">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-6">
          <a href="/analysis" className="text-blue-600 hover:text-blue-800">← Back to Analysis</a>
        </nav>
        
        <h1 className="text-3xl font-bold mb-6 text-red-700">Red Analysis 1: Risk Assessment</h1>
        
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-red-800 mb-3">High Risk Indicators</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><span className="text-red-500 mr-2">●</span> Voter turnout below 60%</li>
                <li className="flex items-center"><span className="text-red-500 mr-2">●</span> Regional disparities below 25%</li>
                <li className="flex items-center"><span className="text-red-500 mr-2">●</span> Technical issues reported</li>
                <li className="flex items-center"><span className="text-red-500 mr-2">●</span> Authentication failures</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Medium Risk Factors</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><span className="text-orange-500 mr-2">●</span> Processing delays</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">●</span> Network congestion</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">●</span> Data validation warnings</li>
                <li className="flex items-center"><span className="text-orange-500 mr-2">●</span> Backup system usage</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Risk Mitigation Strategies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">Prevention</h4>
                <p className="text-gray-600">Implement early warning systems and regular monitoring protocols.</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Response</h4>
                <p className="text-gray-600">Quick reaction teams and automated failover mechanisms.</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Recovery</h4>
                <p className="text-gray-600">Data backup restoration and system redundancy protocols.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
