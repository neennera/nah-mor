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

  useEffect(() => {
    const fetchImage = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/picture?key=${imageKey}`)
        const data = await response.json()
        
        if (response.ok && data.image) {
          setImageData(data.image)
        } else {
          setError('Image not found')
        }
      } catch (err) {
        console.error('Error fetching image:', err)
        setError('Failed to load image')
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
          <p className="text-gray-600">{fallbackText}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {title && (
        <div className="bg-gray-50 px-4 py-2 border-b">
          <h3 className="font-semibold text-gray-800">{title}</h3>
        </div>
      )}
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
