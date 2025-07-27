'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
// import dynamic from 'next/dynamic'
import ImageDisplay from '@/components/ImageDisplay'

interface candidateListInterface {
  id: number;
  name: string;
  votes: number;
}

const candidates = [
  { id: 0, name: 'อาสาสมัคร', votes:0},
  { id: 1, name: 'ซิน' , votes:0 },
  { id: 2, name: 'ซัน' , votes:0},
  { id: 3, name: 'นิค' , votes:0},
  { id: 4, name: 'จ๊อบ' , votes:0 },
  { id: 5, name: 'แพร' , votes:0},
  { id: 6, name: 'นีร' , votes:0}
]

export default function ResultDisplayPage() {
  const [voteResults, setVoteResults] = useState<number[]>([0, 0, 0, 0, 0, 0, 0])
  const [loading, setLoading] = useState(true)
  const [totalVotes, setTotalVotes] = useState<number>(0)
  const [candidateList, setCandidateList] = useState<candidateListInterface[]>([])
  const [mounted, setMounted] = useState(false)

    const [volunteerName, setVolunteerName] = useState<string>('ไม่ระบุชื่อ')

  
  const fetchCandidate = async () => {
    // Get volunteer name from localStorage
    const storedName = localStorage.getItem('volunteerName')
    if (storedName) {
      setVolunteerName(storedName)
    }
  }
  const fetchResults = async () => {
    try {
      setLoading(true)
      
      // Get vote results from localStorage
      const storedVotes = localStorage.getItem('voteResults')
      let voteResults = [0, 0, 0, 0, 0, 0, 0]
      
      if (storedVotes) {
        voteResults = JSON.parse(storedVotes)
      }
      
      setVoteResults(voteResults)
      
      // Calculate total votes from the data
      const newTotalVotes = voteResults.reduce((sum: number, votes: number) => sum + votes, 0)
      setTotalVotes(newTotalVotes)
      
      // Create candidates with votes using data
      const candidatesWithVotes = candidates.map((candidate, index) => ({
        ...candidate,
        votes: voteResults[index] || 0
      }))
      const sortedCandidates = [...candidatesWithVotes].sort((a, b) => b.votes - a.votes)
      setCandidateList(sortedCandidates)
    } catch (error) {
      console.error('Error loading vote results from localStorage:', error)
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    setMounted(true)
    fetchResults()
    fetchCandidate()
  }, [])

  // Prevent hydration mismatch
  if (!mounted) {
    return null
  }



  if (loading) {
    return (
      <div className="w-screen h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-8">Loading Results...</h1>
          <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-white mx-auto"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-blue-900 to-purple-900 overflow-auto absolute inset-0">
      <div className="min-h-full p-8">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold text-white mb-4">🗳️ ผลการโหวต</h1>
          <div className="flex justify-center items-center space-x-8 text-white">
            <button
              onClick={() => window.location.reload()}
              className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg backdrop-blur-sm transition-all duration-300 font-semibold"
            >
              🔄 Refresh
            </button>
            <h2 className="text-2xl font-semibold">Total Votes: {totalVotes}</h2>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {candidateList.map((candidate, index) => {
              const percentage = totalVotes > 0 ? ((candidate.votes / totalVotes) * 100).toFixed(1) : '0.0'
              const isTop3 = index < 3
              const rankColors = {
                0: 'from-yellow-400 to-yellow-600', // Gold
                1: 'from-gray-300 to-gray-500',     // Silver
                2: 'from-orange-400 to-orange-600' // Bronze
              }
              
              return (
                <div 
                  key={candidate.id} 
                  className={`
                    relative overflow-hidden rounded-2xl p-6 shadow-2xl transform transition-all duration-500 hover:scale-105
                    ${isTop3 
                      ? `bg-gradient-to-br ${rankColors[index as keyof typeof rankColors]} text-white` 
                      : 'bg-white text-gray-800'
                    }
                    ${index === 0 ? 'ring-4 ring-yellow-300 animate-pulse' : ''}
                  `}
                >
                  {/* Rank Badge */}
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold
                    ${isTop3 ? 'bg-white/20 backdrop-blur-sm' : 'bg-gray-100'}
                  `}>
                    #{index + 1}
                  </div>
                  
                  {/* Crown for winner */}
                  {index === 0 && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-4xl">
                      👑
                    </div>
                  )}
                  
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Candidate Image */}
                     {candidate.id === 0 ?
                        <ImageDisplay 
                          imageKey="upload2_selfie"
                          title="Upload 2 Photo"
                          className="h-60 w-60"
                          fallbackText="No photo from Upload 2"
                      /> :
                        <Image alt={candidate.name} src={`/candidate/${candidate.id}.jpg`} width={300} height={300} />
                      }
                
                    
                    {/* Candidate Name */}
                    <h3 className={`text-2xl font-bold ${isTop3 ? 'text-white' : 'text-gray-800'}`}>
                      {candidate.id === 0 ? volunteerName :candidate.name}
                    </h3>
                    
                    {/* Vote Count */}
                    <div className="text-center">
                      <div className={`text-4xl font-bold ${isTop3 ? 'text-white' : 'text-gray-800'}`}>
                        {candidate.votes}
                      </div>
                      <div className={`text-lg ${isTop3 ? 'text-white/80' : 'text-gray-600'}`}>
                        votes
                      </div>
                    </div>
                    
                    {/* Percentage */}
                    <div className={`text-3xl font-bold ${isTop3 ? 'text-white' : 'text-gray-800'}`}>
                      {percentage}%
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full">
                      <div className={`w-full rounded-full h-4 ${isTop3 ? 'bg-white/20' : 'bg-gray-200'}`}>
                        <div
                          className={`h-4 rounded-full transition-all duration-1000 ease-out ${
                            isTop3 ? 'bg-white' : 
                            index === 3 ? 'bg-purple-500' : 
                            index === 4 ? 'bg-indigo-500' :
                            index === 5 ? 'bg-pink-500' : 'bg-gray-500'
                          }`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
