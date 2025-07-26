'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const candidates = [
  { id: 0, name: 'อาสาสมัคร', avatar: '👩‍💼' },
  { id: 1, name: 'ซิน', avatar: '👨‍💻' },
  { id: 2, name: 'ซัน', avatar: '👩‍🔬' },
  { id: 3, name: 'นิค', avatar: '👨‍🎨' },
  { id: 4, name: 'จ๊อบ', avatar: '👩‍🏫' },
  { id: 5, name: 'แพร', avatar: '👨‍⚕️' },
  { id: 6, name: 'นีร', avatar: '👩‍⚖️' }
]

export default function VotePage() {
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null)
    const [hasVoted, setHasVoted] = useState(true)
    
    useEffect(() => {
        const value = localStorage.getItem("voted");
        if (!value || value === null) setHasVoted(false);
        
    })

  const handleVote = (candidateId: number) => {
      setSelectedCandidate(candidateId)
  }

  const submitVote = async () => {
    if (selectedCandidate) {
        const base_url = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'
        const response = await fetch(`${base_url}/vote`, { method: 'POST',  body: JSON.stringify({vote_id:candidates})},)
        if (response.ok) {
            setHasVoted(true)
            localStorage.setItem('voted', 'true');
        }
    }
  }

  if (hasVoted) {
    return (
      <main className="container mx-auto p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-8 text-green-600">ขอบคุณสำหรับการโหวตคนหลายใจ</h1>
          <p className="text-lg mb-4">ดูผลโหวตได้ที่</p>
          <a 
            href="/result" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block"
          >
            ใครคือคนหลายใจกันนะ
          </a>
        </div>
      </main>
    )
  }

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">โหวตคนหลายใจ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className={`p-6 border-2 rounded-lg cursor-pointer flex items-center flex-col transition-all hover:shadow-lg ${
              selectedCandidate === candidate.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handleVote(candidate.id)}
          >
            <div className="text-center">
                <Image alt={candidate.name} src={`/candidate/${candidate.id}.jpg`} width={300} height={300} />
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
