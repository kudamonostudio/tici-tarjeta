export function PhotoGallery() {
  const photos = [
    {
      url: "/romantic-couple-walking-hand-in-hand-on-beach-at-s.jpg",
      alt: "Pareja caminando en la playa",
    },
    {
      url: "/couple-dancing-near-vintage-truck-at-sunset.jpg",
      alt: "Pareja bailando junto a camioneta vintage",
    },
    {
      url: "/romantic-couple-embracing-by-vintage-truck.jpg",
      alt: "Pareja abrazándose junto a camioneta",
    },
    {
      url: "/couple-kissing-under-palm-tree.jpg",
      alt: "Pareja besándose bajo palmera",
    },
    {
      url: "/couple-at-beach-sunset-silhouette.jpg",
      alt: "Silueta de pareja en playa al atardecer",
    },
    {
      url: "/romantic-couple-kissing-in-golden-field.jpg",
      alt: "Pareja besándose en campo dorado",
    },
  ]

  return (
    <section className="py-12 bg-[#f5f0eb]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="aspect-[3/4] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={photo.url || "/placeholder.svg"}
                alt={photo.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
