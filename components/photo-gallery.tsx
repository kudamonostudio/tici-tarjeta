"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

export function PhotoGallery() {
  // Imágenes numeradas desde 4 hasta 34 (excluyendo las que faltan)
  const photoNumbers = [4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 33, 34]
  
  const photos = photoNumbers.map(num => ({
    url: `/${num}.jpg`,
    alt: `Foto ${num}`
  }))

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  // Bloquear scroll cuando la galería está abierta
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Sincronizar el índice actual del carousel
  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  // Cuando se abre la galería, ir a la imagen seleccionada
  useEffect(() => {
    if (api && isOpen) {
      api.scrollTo(selectedIndex)
    }
  }, [api, isOpen, selectedIndex])

  const openGallery = (index: number) => {
    setSelectedIndex(index)
    setIsOpen(true)
  }

  const closeGallery = () => {
    setIsOpen(false)
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

          {/* Carousel */}
          <Carousel
            setApi={setApi}
            className="w-full max-w-7xl"
            opts={{
              loop: true,
              startIndex: selectedIndex,
            }}
          >
            <CarouselContent>
              {photos.map((photo, index) => (
                <CarouselItem key={index}>
                  <div className="flex items-center justify-center h-screen px-16">
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="max-h-screen max-w-full object-contain select-none"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious 
              variant="ghost"
              className="left-4 h-12 w-12 text-white/70 hover:text-white hover:bg-white/10 border-0" 
            />
            <CarouselNext 
              variant="ghost"
              className="right-4 h-12 w-12 text-white/70 hover:text-white hover:bg-white/10 border-0" 
            />
          </Carousel>

          {/* Contador */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {current + 1} / {photos.length}
          </div>
        </div>
      )}
    </div>
  )
}
