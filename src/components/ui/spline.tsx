
'use client'

import { Suspense, lazy, useState, useEffect } from 'react'
import { AlertTriangle } from 'lucide-react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

function WebGLFallback({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-black/40 ${className}`}>
      <div className="text-center space-y-4">
        <AlertTriangle className="h-12 w-12 text-purple-400 mx-auto" />
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-purple-200">3D Scene Unavailable</h3>
          <p className="text-sm text-purple-300 max-w-md">
            Your browser or device doesn't support WebGL, which is required for 3D content.
          </p>
        </div>
      </div>
    </div>
  )
}

function SplineWithErrorBoundary({ scene, className }: SplineSceneProps) {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Reset error state when scene changes
    setHasError(false)
  }, [scene])

  if (hasError) {
    return <WebGLFallback className={className} />
  }

  return (
    <Spline
      scene={scene}
      className={className}
      onLoad={() => {
        console.log('Spline scene loaded successfully')
      }}
      onError={(error) => {
        console.error('Spline error:', error)
        setHasError(true)
      }}
    />
  )
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  // Check if WebGL is supported
  const isWebGLSupported = () => {
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      return !!gl
    } catch (e) {
      return false
    }
  }

  const [webglSupported, setWebglSupported] = useState<boolean | null>(null)

  useEffect(() => {
    setWebglSupported(isWebGLSupported())
  }, [])

  if (webglSupported === false) {
    return <WebGLFallback className={className} />
  }

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
        </div>
      }
    >
      <SplineWithErrorBoundary scene={scene} className={className} />
    </Suspense>
  )
}
