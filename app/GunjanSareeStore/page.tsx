'use client';

import { useState, useEffect } from 'react';
import { Star, Phone, MapPin, Clock, ChevronRight, Sparkles, Heart, Award, Users, MessageCircle } from 'lucide-react';

export default function GunjanSareeStore() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCollection, setActiveCollection] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = '+919876543210'; // Replace with actual number
  const whatsappNumber = '919876543210'; // Replace with actual number
  const address = 'Shop No. 12, Main Market Road, Purnia, Bihar 854301';
  const googleMapsUrl = 'https://maps.google.com/?q=Gunjan+Saree+Store+Purnia';

  const collections = [
    {
      title: 'Wedding Sarees',
      description: 'Exquisite bridal collections with intricate embroidery and luxurious fabrics',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80',
      tag: 'Premium'
    },
    {
      title: 'Festive Collection',
      description: 'Vibrant colors and traditional designs perfect for celebrations',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80',
      tag: 'Trending'
    },
    {
      title: 'Daily Wear',
      description: 'Comfortable, elegant sarees for everyday elegance',
      image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&q=80',
      tag: 'Bestseller'
    },
    {
      title: 'Silk Sarees',
      description: 'Pure silk sarees in timeless designs and rich textures',
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRu0_Io85hru6b943lH_QT0i0hAYWRZRZzw41kaHWw_wP8mHsHCcFJ3FpQFTOzgaYqpsAGbn_WCnEXNye0NA7Y3IchC15Ftbg',
      tag: 'Luxury'
    },
    {
      title: 'Banarasi Collection',
      description: 'Authentic Banarasi weaves with gold and silver zari work',
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQsMhZaDbPiGPsD-0HzxOEBlO_yQoUbEcBbbPF-exgeJ00TpwBnD_5lv5qn0q7DPSe3GhZagAHb3bcYVbX21G1OJW7P4esdn13L2noE6uo',
      tag: 'Heritage'
    },
    {
      title: 'Designer Sarees',
      description: 'Contemporary designs blending tradition with modern style',
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTODnWLPWUa1aroagOM6nBzKIs70G7hDN4wn8eRyyDH_P4qZS4g2c9Evst_2G4TbrsMETmMUPHiT1HZFPqzMSBW9z4fE4uzwFOf6tajtmfsALYotJ92r4SSEw',
      tag: 'Exclusive'
    }
  ];

  const features = [
    { icon: Sparkles, title: 'Premium Quality', description: 'Handpicked fabrics & authentic materials' },
    { icon: Heart, title: 'Affordable Pricing', description: 'Best value for premium sarees' },
    { icon: Award, title: 'Huge Variety', description: '1000+ designs in stock' },
    { icon: Clock, title: '24/7 Open', description: 'Shop anytime that suits you' },
    { icon: Users, title: 'Trusted Locally', description: '500+ happy customers' }
  ];

  const reviews = [
    { name: 'Priya Sharma', rating: 5, text: 'Beautiful collection! Found the perfect wedding saree. The quality is outstanding and staff is very helpful.' },
    { name: 'Anjali Singh', rating: 5, text: 'Best saree store in Purnia. Affordable prices and excellent variety. Highly recommend!' },
    { name: 'Meera Verma', rating: 4, text: 'Great collection of silk sarees. Loved shopping here. Will definitely visit again for festivals.' },
    { name: 'Kavita Kumari', rating: 5, text: 'Amazing experience! The 24-hour availability is so convenient. Found exactly what I was looking for.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-amber-50">
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ClothingStore",
            "name": "Gunjan Saree Store",
            "image": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1200&q=80",
            "description": "Premium saree store in Purnia offering wedding sarees, festive collections, daily wear, silk and Banarasi sarees. Open 24 hours.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Shop No. 12, Main Market Road",
              "addressLocality": "Purnia",
              "addressRegion": "Bihar",
              "postalCode": "854301",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "25.7771",
              "longitude": "87.4753"
            },
            "openingHours": "Mo-Su 00:00-24:00",
            "telephone": phoneNumber,
            "priceRange": "₹₹",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.2",
              "reviewCount": "87"
            }
          })
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-600 to-amber-600 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-700 to-amber-700 bg-clip-text text-transparent" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Gunjan Saree Store
                </h1>
                <div className="flex items-center space-x-1 text-xs text-amber-700">
                  <Clock className="w-3 h-3" />
                  <span className="font-semibold">Open 24 Hours</span>
                </div>
              </div>
            </div>
            <a
              href={`tel:${phoneNumber}`}
              className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-rose-600 to-amber-600 text-white px-6 py-3 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">Call Now</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-rose-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fadeIn">
              <div className="inline-block">
                <div className="flex items-center space-x-2 bg-gradient-to-r from-rose-100 to-amber-100 border-2 border-rose-200 px-4 py-2 rounded-full">
                  <Sparkles className="w-4 h-4 text-rose-600" />
                  <span className="text-sm font-semibold text-rose-800">Premium Saree Collection</span>
                </div>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                <span className="bg-gradient-to-r from-rose-700 via-rose-600 to-amber-700 bg-clip-text text-transparent">
                  Discover Beautiful Sarees
                </span>
                <br />
                <span className="text-gray-800">for Every Occasion</span>
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Experience the finest collection of traditional and contemporary sarees. 
                From elegant silk to stunning Banarasi weaves, find your perfect drape at unbeatable prices.
              </p>

              <div className="flex items-center space-x-2 text-amber-600">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
                <span className="ml-2 text-gray-700 font-semibold">4.2 Rating • 87 Reviews</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
onClick={() => {
    const element = document.getElementById('collections');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }}
                    className="group relative bg-gradient-to-r from-rose-600 to-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>View Collection</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-700 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in your saree collection`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border-2 border-rose-300 text-rose-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-50 hover:border-rose-400 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80"
                  alt="Beautiful Saree Collection"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Wedding Special Collection
                  </p>
                  <p className="text-sm opacity-90">Exclusive designs for your special day</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-rose-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-rose-400 to-amber-500 rounded-full blur-2xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Offer Banner */}
      <section className="py-8 px-4 bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-white text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            🎉 Wedding Season Special Offer! 🎉
          </p>
          <p className="text-white/90 text-lg">
            Flat 20% OFF on all Wedding Sarees • Limited Time Only
          </p>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-4 bg-gradient-to-r from-rose-700 to-amber-700 bg-clip-text text-transparent" style={{ fontFamily: 'Playfair Display, serif' }}>
              Featured Collections
            </h3>
            <p className="text-xl text-gray-600" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Handpicked sarees for every celebration and occasion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-amber-400 to-rose-400 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      {collection.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {collection.title}
                    </h4>
                    <p className="text-sm opacity-90 mb-4">{collection.description}</p>
                    <button className="bg-white/20 backdrop-blur-sm border border-white/40 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-rose-700 transition-all duration-300 flex items-center space-x-2">
                      <span>Explore</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-4 bg-gradient-to-r from-rose-700 to-amber-700 bg-clip-text text-transparent" style={{ fontFamily: 'Playfair Display, serif' }}>
              Why Choose Gunjan Saree Store?
            </h3>
            <p className="text-xl text-gray-600" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Your trusted destination for authentic, premium sarees
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-rose-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-rose-600" />
                </div>
                <h4 className="text-2xl font-bold mb-3 text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-amber-500 fill-current" />
              ))}
            </div>
            <h3 className="text-5xl font-bold mb-4 bg-gradient-to-r from-rose-700 to-amber-700 bg-clip-text text-transparent" style={{ fontFamily: 'Playfair Display, serif' }}>
              What Our Customers Say
            </h3>
            <p className="text-xl text-gray-600" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              4.2 Rating on Google • 87 Reviews
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">"{review.text}"</p>
                <p className="font-semibold text-rose-700">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Our Store */}
      <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-rose-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-4 bg-gradient-to-r from-rose-700 to-amber-700 bg-clip-text text-transparent" style={{ fontFamily: 'Playfair Display, serif' }}>
              Visit Our Store
            </h3>
            <p className="text-xl text-gray-600" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Experience our collection in person
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-gray-800">Address</h4>
                    <p className="text-gray-600 leading-relaxed">{address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-gray-800">Opening Hours</h4>
                    <div className="inline-block bg-gradient-to-r from-emerald-100 to-green-100 border-2 border-emerald-400 px-4 py-2 rounded-full">
                      <span className="text-emerald-800 font-bold">Open 24 Hours • 7 Days a Week</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-gray-800">Contact</h4>
                    <a
                      href={`tel:${phoneNumber}`}
                      className="text-rose-600 hover:text-rose-700 font-semibold text-lg"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                <div className="pt-6 space-y-4">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-rose-600 to-amber-600 text-white px-6 py-4 rounded-full font-semibold text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Open in Google Maps
                  </a>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="block w-full bg-white border-2 border-rose-300 text-rose-700 px-6 py-4 rounded-full font-semibold text-center hover:bg-rose-50 transition-all duration-300 hover:scale-105"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl h-[500px]">
              <iframe allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.123456789!2d87.4753!3d25.7771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ2JzM3LjYiTiA4N8KwMjgnMzEuMSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gunjan Saree Store Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              Gunjan Saree Store
            </h2>
            <p className="text-gray-400">Your Trusted Saree Destination in Purnia</p>
          </div>
          <div className="flex items-center justify-center space-x-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
            ))}
            <span className="ml-2 text-gray-300">4.2 Rating • 87 Reviews</span>
          </div>
          <p className="text-gray-400 mb-2">{address}</p>
          <p className="text-gray-400 mb-6">{phoneNumber}</p>
          <p className="text-gray-500 text-sm">
            © 2024 Gunjan Saree Store. All rights reserved. Open 24 Hours, 7 Days a Week.
          </p>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in your saree collection`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center z-50 transition-all duration-300 hover:scale-110 animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

   
    </div>
  );
}