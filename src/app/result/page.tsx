'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const candidates = [
  { id: 0, name: 'อาสาสมัคร' },
  { id: 1, name: 'ซิน' },
  { id: 2, name: 'ซัน' },
  { id: 3, name: 'นิค' },
  { id: 4, name: 'จ๊อบ' },
  { id: 5, name: 'แพร' },
  { id: 6, name: 'นีร' }
]

export default function ResultPage() {
  const [voteResults, setVoteResults] = useState<number[]>([0, 0, 0, 0, 0, 0, 0])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchResults = async () => {
      try {
        console.log('Fetching results from /api/vote...')
        const response = await fetch('/api/vote')
        console.log('Response status:', response.status)
        console.log('Response ok:', response.ok)
        const data = await response.json()
        console.log('Response data:', data)
        if (data.voteresult) {
          setVoteResults(data.voteresult)
        }
      } catch (error) {
        console.error('Error fetching vote results:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchResults()
  }, [])

  const candidatesWithVotes = candidates.map((candidate, index) => ({
    ...candidate,
    votes: voteResults[index] || 0
  }))

  const totalVotes = voteResults.reduce((sum, votes) => sum + votes, 0)
  const sortedCandidates = [...candidatesWithVotes].sort((a, b) => b.votes - a.votes)

  if (loading) {
    return (
      <main className="container mx-auto p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-8">Loading Results...</h1>
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
        </div>
      </main>
    )
  }

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Voting Results</h1>
      
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-2">Total Votes: {totalVotes}</h2>
        </div>

        <div className="space-y-4">
          {sortedCandidates.map((candidate, index) => {
            const percentage = totalVotes > 0 ? ((candidate.votes / totalVotes) * 100).toFixed(1) : '0.0'
            return (
              <div key={candidate.id} className="bg-white border rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg font-bold text-gray-500">#{index + 1}</span>
                    <Image 
                      alt={candidate.name} 
                      src={`/candidate/${candidate.id}.jpg`} 
                      width={100} 
                      height={100} 
                      className="rounded-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/candidate/default.jpg'
                      }}
                    />
                    
                    <h3 className="text-lg font-semibold">{candidate.name}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">{candidate.votes} votes</div>
                    <div className="text-sm text-gray-600">{percentage}%</div>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all duration-500 ${
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
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block mr-4"
          >
            Refresh Results
          </button>
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
