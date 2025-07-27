'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface ImageDisplayProps {
  imageKey: string
  title?: string
  className?: string
  fallbackText?: string
}

export default function ImageDisplay({ 
  imageKey, 
  title = "Captured Image", 
  className = "",
  fallbackText = "No image available"
}: ImageDisplayProps) {
  const [imageData, setImageData] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)

  useEffect(() => {
    const fetchImage = async (attempt = 0) => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch(`/api/picture?key=${imageKey}`, {
          cache: 'no-store', // Prevent caching issues
          headers: {
            'Cache-Control': 'no-cache'
          }
        })
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        
        if (data.image) {
          setImageData(data.image)
          setError(null)
        } else {
          throw new Error('No image data received')
        }
      } catch (err) {
        console.error(`Error fetching image (attempt ${attempt + 1}):`, err)
        
        // Retry up to 3 times with increasing delay
        if (attempt < 2) {
          const delay = (attempt + 1) * 1000 // 1s, 2s, 3s delays
          setTimeout(() => {
            setRetryCount(attempt + 1)
            fetchImage(attempt + 1)
          }, delay)
          return
        }
        
        setError('Failed to load image after multiple attempts')
      } finally {
        setLoading(false)
      }
    }

    fetchImage()
  }, [imageKey])

  if (loading) {
    return (
      <div className={`flex items-center justify-center p-8 bg-gray-100 rounded-lg ${className}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
          <p className="text-gray-600">Loading image...</p>
        </div>
      </div>
    )
  }

  if (error || !imageData) {
    return (
      <div className={`flex items-center justify-center p-8 bg-gray-100 rounded-lg ${className}`}>
        <div className="text-center">
          <div className="text-4xl mb-2">📷</div>
          <p className="text-gray-600 mb-2">{fallbackText}</p>
          {error && (
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
            >
              🔄 Retry
            </button>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
     
      <div className="p-4">
        <img
          src={imageData}
          alt={title}
          className="w-full h-auto rounded-lg object-cover max-h-96"
        />
      </div>
    </div>
  )
}
