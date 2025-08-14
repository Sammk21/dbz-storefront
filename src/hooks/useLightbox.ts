import { useState, useCallback } from 'react'

export const useLightbox = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = useCallback((index: number = 0) => {
    setCurrentIndex(index)
    setIsOpen(true)
  }, [])

  const closeLightbox = useCallback(() => {
    setIsOpen(false)
  }, [])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1))
  }, [])

  const goToNext = useCallback((maxIndex: number) => {
    setCurrentIndex((prevIndex) => Math.min(maxIndex - 1, prevIndex + 1))
  }, [])

  const goToIndex = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  return {
    isOpen,
    currentIndex,
    openLightbox,
    closeLightbox,
    goToPrevious,
    goToNext,
    goToIndex,
  }
}
