'use client'

import ImageDisplay from '@/components/ImageDisplay'
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

export default function VotePage() {
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null)
  const [hasVoted, setHasVoted] = useState(false)
    const [volunteerName, setVolunteerName] = useState<string>('ไม่ระบุชื่อ')

    
  useEffect(() => {
    const fetchData = async () => {
      const value = localStorage.getItem("voted");
      
      if (!value || value === null) setHasVoted(false);
      
      const [volunteerResponse] = await Promise.all([
        fetch('/api/volunteer')
      ])
      const volunteerData = await volunteerResponse.json()
      if (volunteerData.volunteerName) {
          setVolunteerName(volunteerData.volunteerName)
        }
    }
    fetchData();
    })

  const handleVote = (candidateId: number) => {
      setSelectedCandidate(candidateId)
  }

  const submitVote = async () => {
    if (selectedCandidate !== null) {
        try {
            const response = await fetch('/api/vote', { 
                method: 'POST',  
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({vote_id: selectedCandidate})
            })
            if (response.ok) {
                setHasVoted(true)
                localStorage.setItem('voted', 'true');
            }
        } catch (error) {
            console.error('Error submitting vote:', error)
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
      <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
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
              {candidate.id === 0 ?
                <ImageDisplay 
                  imageKey="upload2_selfie"
                  title="Upload 2 Photo"
                  className="h-60 w-60"
                  fallbackText="No photo from Upload 2"
              /> :
                <Image alt={candidate.name} src={`/candidate/${candidate.id}.jpg`} width={300} height={300} />
              }
             
              
              <h3 className="text-xl font-semibold mb-2">{candidate.id===0 ? volunteerName : candidate.name}</h3>
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
