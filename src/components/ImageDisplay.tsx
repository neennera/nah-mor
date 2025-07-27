'use client'

import { useState, useEffect } from 'react'

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
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const loadImageFromStorage = () => {
      try {
        setLoading(true)
        const storedImage = localStorage.getItem(imageKey)
        setImageData(storedImage)
      } catch (err) {
        console.error('Error loading image from localStorage:', err)
      } finally {
        setLoading(false)
      }
    }

    loadImageFromStorage()
  }, [imageKey])

  // Prevent hydration mismatch
  if (!mounted) {
    return null
  }

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

  if (!imageData) {
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
