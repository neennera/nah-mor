export default function GreenAnalysis2Page() {
  return (
    <main className="container mx-auto p-8">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-6">
          <a href="/analysis" className="text-blue-600 hover:text-blue-800">← Back to Analysis</a>
        </nav>
        
        <h1 className="text-3xl font-bold mb-6 text-green-700">Green Analysis 2: User Satisfaction</h1>
        
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">User Experience Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-green-800 mb-2">Overall Satisfaction</h4>
                <div className="text-3xl font-bold text-green-600">8.7/10</div>
                <p className="text-xs text-green-600">↑ 0.3 from last month</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-green-800 mb-2">Ease of Use</h4>
                <div className="text-3xl font-bold text-green-600">9.1/10</div>
                <p className="text-xs text-green-600">↑ 0.5 from last month</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-green-800 mb-2">Recommendation Rate</h4>
                <div className="text-3xl font-bold text-green-600">87%</div>
                <p className="text-xs text-green-600">Would recommend to others</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">Feature Satisfaction Ratings</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Voting Interface</span>
                    <span>9.2/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Results Display</span>
                    <span>8.8/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Analysis Tools</span>
                    <span>8.4/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '84%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Mobile Experience</span>
                    <span>8.1/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '81%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">User Feedback Summary</h4>
              <div className="space-y-3">
                <div className="bg-green-100 p-3 rounded text-sm">
                  <p className="font-medium text-green-800 mb-1">Most Praised Features:</p>
                  <p className="text-green-700">• Simple and intuitive voting process</p>
                  <p className="text-green-700">• Clear visual representation of results</p>
                  <p className="text-green-700">• Fast loading times</p>
                </div>
                
                <div className="bg-yellow-100 p-3 rounded text-sm">
                  <p className="font-medium text-yellow-800 mb-1">Areas for Improvement:</p>
                  <p className="text-yellow-700">• More detailed candidate information</p>
                  <p className="text-yellow-700">• Enhanced mobile notifications</p>
                  <p className="text-yellow-700">• Additional analysis filters</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm">
            <div className="bg-blue-50 p-3 rounded">
              <h5 className="font-medium mb-1">Total Surveys</h5>
              <p className="text-xl font-bold">1,247</p>
            </div>
            <div className="bg-blue-50 p-3 rounded">
              <h5 className="font-medium mb-1">Response Rate</h5>
              <p className="text-xl font-bold">73.2%</p>
            </div>
            <div className="bg-blue-50 p-3 rounded">
              <h5 className="font-medium mb-1">Average Completion Time</h5>
              <p className="text-xl font-bold">3.2 min</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
