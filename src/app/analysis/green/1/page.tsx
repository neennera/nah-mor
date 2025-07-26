export default function GreenAnalysis1Page() {
  return (
    <main className="container mx-auto p-8">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-6">
          <a href="/analysis" className="text-blue-600 hover:text-blue-800">← Back to Analysis</a>
        </nav>
        
        <h1 className="text-3xl font-bold mb-6 text-green-700">Green Analysis 1: Performance Metrics</h1>
        
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">System Performance Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-green-800 mb-2">Uptime</h4>
                <div className="text-2xl font-bold text-green-600">99.8%</div>
                <p className="text-xs text-green-600">Last 30 days</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-green-800 mb-2">Response Time</h4>
                <div className="text-2xl font-bold text-green-600">245ms</div>
                <p className="text-xs text-green-600">Average</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-green-800 mb-2">Throughput</h4>
                <div className="text-2xl font-bold text-green-600">1,247</div>
                <p className="text-xs text-green-600">Requests/min</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-green-800 mb-2">Success Rate</h4>
                <div className="text-2xl font-bold text-green-600">99.5%</div>
                <p className="text-xs text-green-600">24h average</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">Server Performance</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>CPU Usage</span>
                    <span>23%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '23%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Memory Usage</span>
                    <span>67%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '67%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Disk Usage</span>
                    <span>34%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '34%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">Database Performance</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Query Response Time</span>
                  <span className="text-green-600 font-medium">15ms</span>
                </div>
                <div className="flex justify-between">
                  <span>Active Connections</span>
                  <span className="font-medium">42/100</span>
                </div>
                <div className="flex justify-between">
                  <span>Cache Hit Rate</span>
                  <span className="text-green-600 font-medium">94.2%</span>
                </div>
                <div className="flex justify-between">
                  <span>Slow Queries</span>
                  <span className="text-green-600 font-medium">0</span>
                </div>
                <div className="flex justify-between">
                  <span>Index Efficiency</span>
                  <span className="text-green-600 font-medium">98.7%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Performance Optimization Recommendations</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• System performing within optimal parameters</li>
              <li>• Consider memory optimization during peak hours</li>
              <li>• Database performance is excellent</li>
              <li>• Continue current monitoring practices</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
