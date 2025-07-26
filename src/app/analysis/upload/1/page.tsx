'use client'

import { useState, useEffect } from 'react'

export default function Upload1Page() {
  const [volunteerName, setVolunteerName] = useState<string>('')
  const [currentVolunteerName, setCurrentVolunteerName] = useState<string>('ไม่ระบุชื่อ')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    // Fetch current volunteer name
    const fetchVolunteerName = async () => {
      try {
        const response = await fetch('/api/volunteer')
        const data = await response.json()
        if (data.volunteerName) {
          setCurrentVolunteerName(data.volunteerName)
        }
      } catch (error) {
        console.error('Error fetching volunteer name:', error)
      }
    }
    
    fetchVolunteerName()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!volunteerName.trim()) {
      setMessage('กรุณาใส่ชื่ออาสาสมัคร')
      return
    }

    setIsSubmitting(true)
    setMessage('')

    try {
      const response = await fetch('/api/volunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: volunteerName.trim() })
      })

      const data = await response.json()
      
      if (response.ok) {
        setCurrentVolunteerName(data.volunteerName)
        setVolunteerName('')
        setMessage('✅ บันทึกชื่ออาสาสมัครเรียบร้อยแล้ว!')
      } else {
        setMessage('❌ เกิดข้อผิดพลาดในการบันทึก')
      }
    } catch (error) {
      console.error('Error updating volunteer name:', error)
      setMessage('❌ เกิดข้อผิดพลาดในการเชื่อมต่อ')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="container mx-auto p-8">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-6">
          <a href="/analysis" className="text-blue-600 hover:text-blue-800">← Back to Analysis</a>
        </nav>
        
        <h1 className="text-3xl font-bold mb-6">ชื่ออาสาสมัคร</h1>
        
        {/* Volunteer Name Section */}
         <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="volunteerName" className="block text-sm font-medium text-gray-700 mb-2">
                ชื่ออาสาสมัครใหม่
              </label>
              <input
                type="text"
                id="volunteerName"
                value={volunteerName}
                onChange={(e) => setVolunteerName(e.target.value)}
                placeholder="ใส่ชื่ออาสาสมัคร..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                disabled={isSubmitting}
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting || !volunteerName.trim()}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold text-lg transition-colors"
            >
              {isSubmitting ? '⏳ กำลังบันทึก...' : '💾 บันทึกชื่ออาสาสมัคร'}
            </button>
            
            {message && (
              <div className={`p-3 rounded-lg text-center ${
                message.includes('✅') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {message}
              </div>
            )}
          </form>
        
        
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Data Upload Interface</h2>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
            <div className="text-4xl mb-4">📁</div>
            <h3 className="text-lg font-medium mb-2">Upload Your Data Files</h3>
            <p className="text-gray-600 mb-4">Drag and drop files here or click to browse</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Choose Files
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Supported Formats</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• CSV files</li>
                <li>• Excel spreadsheets</li>
                <li>• JSON data</li>
                <li>• XML documents</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Upload Stats</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Max file size: 10MB</li>
                <li>• Files uploaded today: 23</li>
                <li>• Total uploads: 156</li>
                <li>• Success rate: 98.7%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
