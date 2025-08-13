'use client'

import Image from 'next/image'

const GallerySection = () => {
  const galleryImages = [
    {
      src: "/gallery/turf-facility-overview.webp",
      alt: "Turf N Lonavala Sports Facility Overview"
    },
    {
      src: "/gallery/football-ground-aerial-view.webp",
      alt: "Football Turf Aerial View at Turf N Lonavala"
    },
    {
      src: "/gallery/cricket-turf-ground-view.webp",
      alt: "Cricket Ground View at Turf N Lonavala"
    },
    {
      src: "/gallery/sports-activities-turf.webp",
      alt: "Sports Activities at Turf N Lonavala"
    },
    {
      src: "/gallery/night-sports-led-lighting.webp",
      alt: "Night Games with LED Lighting at Turf N Lonavala"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600">
            Take a look at our world-class sports facilities and vibrant atmosphere
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="aspect-[4/3] relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}

          {/* Call-to-action card as the 6th item */}
          <div className="group bg-gradient-to-br from-primary to-green-600 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center text-center text-white p-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Visit Us Today!</h3>
              <p className="text-lg mb-6 opacity-90">Experience the best sports facilities in Lonavala</p>
              <a
                href="tel:+918468942754"
                className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GallerySection