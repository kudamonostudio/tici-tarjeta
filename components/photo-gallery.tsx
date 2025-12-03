"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export function PhotoGallery() {
  // Imágenes numeradas desde 4 hasta 34 (excluyendo las que faltan)
  const photoNumbers = [4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 33, 34]
  
  const photos = photoNumbers.map(num => ({
    url: `/${num}.jpg`,
    alt: `Foto ${num}`
  }))

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const openGallery = (index: number) => {
    setCurrentPhotoIndex(index)
    setIsOpen(true)
  }

  const closeGallery = () => {
    setIsOpen(false)
  }

  const goToPrevious = () => {
    setCurrentPhotoIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentPhotoIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="container mx-auto px-4 mt-6">
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="break-inside-avoid mb-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
            onClick={() => openGallery(index)}
          >
            <img
              src={photo.url || "/placeholder.svg"}
              alt={photo.alt}
              className="w-full h-auto hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Botón cerrar */}
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 z-50 text-white/70 hover:text-white p-2"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Botón anterior */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 z-50 text-white/70 hover:text-white p-2"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          {/* Imagen */}
          <img
            src={photos[currentPhotoIndex].url}
            alt={photos[currentPhotoIndex].alt}
            className="max-h-screen max-w-screen object-contain"
          />

          {/* Botón siguiente */}
          <button
            onClick={goToNext}
            className="absolute right-4 z-50 text-white/70 hover:text-white p-2"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          {/* Contador */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {currentPhotoIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </div>
  )
}
