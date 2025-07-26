const candidates = [
  { id: 1, name: 'Alice Johnson', avatar: '👩‍💼', votes: 125 },
  { id: 2, name: 'Bob Smith', avatar: '👨‍💻', votes: 98 },
  { id: 3, name: 'Carol Davis', avatar: '👩‍🔬', votes: 87 },
  { id: 4, name: 'David Wilson', avatar: '👨‍🎨', votes: 76 },
  { id: 5, name: 'Eva Brown', avatar: '👩‍🏫', votes: 69 },
  { id: 6, name: 'Frank Miller', avatar: '👨‍⚕️', votes: 54 },
  { id: 7, name: 'Grace Taylor', avatar: '👩‍⚖️', votes: 43 }
]

export default function ResultPage() {
  const totalVotes = candidates.reduce((sum, candidate) => sum + candidate.votes, 0)
  const sortedCandidates = [...candidates].sort((a, b) => b.votes - a.votes)

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Voting Results</h1>
      
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-2">Total Votes: {totalVotes}</h2>
        </div>

        <div className="space-y-4">
          {sortedCandidates.map((candidate, index) => {
            const percentage = ((candidate.votes / totalVotes) * 100).toFixed(1)
            return (
              <div key={candidate.id} className="bg-white border rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg font-bold text-gray-500">#{index + 1}</span>
                    <span className="text-2xl">{candidate.avatar}</span>
                    <h3 className="text-lg font-semibold">{candidate.name}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">{candidate.votes} votes</div>
                    <div className="text-sm text-gray-600">{percentage}%</div>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${
                      index === 0 ? 'bg-green-500' : 
                      index === 1 ? 'bg-blue-500' : 
                      index === 2 ? 'bg-yellow-500' : 'bg-gray-400'
                    }`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-8">
          <a 
            href="/analysis" 
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 inline-block"
          >
            View Detailed Analysis
          </a>
        </div>
      </div>
    </main>
  )
}
