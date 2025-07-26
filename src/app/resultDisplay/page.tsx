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

export default function ResultDisplayPage() {
  const [voteResults, setVoteResults] = useState<number[]>([0, 0, 0, 0, 0, 0, 0])
  const [loading, setLoading] = useState(true)
  const [volunteerName, setVolunteerName] = useState<string>('ไม่ระบุชื่อ')

   const fetchResults = async () => {
      try {
        const [voteResponse, volunteerResponse] = await Promise.all([
          fetch('/api/vote'),
          fetch('/api/volunteer')
        ])
        
        const voteData = await voteResponse.json()
        const volunteerData = await volunteerResponse.json()
        
        if (voteData.voteresult) {
          setVoteResults(voteData.voteresult)
        }
        
        if (volunteerData.volunteerName) {
          setVolunteerName(volunteerData.volunteerName)
        }
      } catch (error) {
        console.error('Error fetching vote results:', error)
      } finally {
        setLoading(false)
      }
    }

  useEffect(() => {
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
    <main className="absolute mx-auto p-8 w-[105vw] bg-white h-screen overflow-y-scroll -translate-x-[40vw]">
      <h1 className="text-3xl font-bold text-center mb-4">🗳️ ผลการโหวต</h1>

      <div className="text-center my-8 flex flex-row justify-end space-x-5 items-baseline">
          <button
            onClick={() => fetchResults()}
            className="hover:underline"
          >
            Refresh
          </button>
          <h2 className="text-xs font-semibold mb-2 italic">Total Votes: {totalVotes}</h2>

        </div>
        
      <div className="max-w-2xl mx-auto grid grid-cols-3 gap-3 w-[80%]">
        

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
                    
                  </div>
                 
                </div>
                 <div className="text-center w-full">
                    <h3 className="text-3xl my-3 font-semibold">{index === 0 ? volunteerName :candidate.name}</h3>

                    <div className="text-lg font-bold">{candidate.votes} votes</div>
                    <div className="text-sm text-gray-600">{percentage}%</div>
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
    </main>
  )
}
