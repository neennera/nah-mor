'use client'

import { useState } from 'react'

const candidates = [
  { id: 1, name: 'Alice Johnson', avatar: '👩‍💼' },
  { id: 2, name: 'Bob Smith', avatar: '👨‍💻' },
  { id: 3, name: 'Carol Davis', avatar: '👩‍🔬' },
  { id: 4, name: 'David Wilson', avatar: '👨‍🎨' },
  { id: 5, name: 'Eva Brown', avatar: '👩‍🏫' },
  { id: 6, name: 'Frank Miller', avatar: '👨‍⚕️' },
  { id: 7, name: 'Grace Taylor', avatar: '👩‍⚖️' }
]

export default function VotePage() {
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null)
  const [hasVoted, setHasVoted] = useState(false)

  const handleVote = (candidateId: number) => {
    setSelectedCandidate(candidateId)
  }

  const submitVote = () => {
    if (selectedCandidate) {
      setHasVoted(true)
      // Here you would typically send the vote to your backend
      console.log(`Voted for candidate ${selectedCandidate}`)
    }
  }

  if (hasVoted) {
    return (
      <main className="container mx-auto p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-8 text-green-600">Thank You for Voting!</h1>
          <p className="text-lg mb-4">Your vote has been recorded.</p>
          <a 
            href="/result" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block"
          >
            View Results
          </a>
        </div>
      </main>
    )
  }

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Cast Your Vote</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className={`p-6 border-2 rounded-lg cursor-pointer transition-all hover:shadow-lg ${
              selectedCandidate === candidate.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handleVote(candidate.id)}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">{candidate.avatar}</div>
              <h3 className="text-xl font-semibold mb-2">{candidate.name}</h3>
              <div className={`w-4 h-4 rounded-full mx-auto ${
                selectedCandidate === candidate.id ? 'bg-blue-500' : 'bg-gray-300'
              }`}></div>
            </div>
          </div>
        ))}
      </div>
      
      {selectedCandidate && (
        <div className="text-center mt-8">
          <button
            onClick={submitVote}
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 text-lg font-semibold"
          >
            Submit Vote
          </button>
        </div>
      )}
    </main>
  )
}
