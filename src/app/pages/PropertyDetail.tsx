import { useParams, Link } from 'react-router';
import { properties } from '../data/properties';
import { Bed, Bath, Users, MapPin, Check, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';

export function PropertyDetail() {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-rofe-white">
        <div className="text-center">
          <h1 className="text-4xl mb-4 text-rofe-basalt" style={{ fontWeight: 200 }}>Property Not Found</h1>
          <Link to="/properties" className="text-rofe-ash hover:text-rofe-basalt transition-colors text-sm tracking-[0.1em] uppercase" style={{ fontWeight: 300 }}>
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-rofe-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <Link
          to="/properties"
          className="inline-flex items-center gap-2 text-rofe-ash hover:text-rofe-basalt transition-colors text-sm tracking-[0.1em] uppercase"
          style={{ fontWeight: 300 }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Properties
        </Link>
      </div>

      {/* Image Gallery */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="md:col-span-2 aspect-[16/9] overflow-hidden">
            <ImageWithFallback
              src={property.images[selectedImage]}
              alt={`${property.name} - Image ${selectedImage + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
          {property.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-[4/3] overflow-hidden transition-opacity ${
                selectedImage === index ? 'opacity-100 ring-2 ring-rofe-basalt' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <ImageWithFallback
                src={image}
                alt={`${property.name} - Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Property Details */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="flex items-center gap-2 text-rofe-drift mb-3">
                <MapPin className="w-4 h-4" />
                <span className="text-xs tracking-[0.15em] uppercase" style={{ fontWeight: 300 }}>{property.location}</span>
              </div>
              <h1 className="text-4xl md:text-5xl text-rofe-basalt tracking-[0.04em] mb-2" style={{ fontWeight: 200 }}>
                {property.name}
              </h1>
              <p className="text-sm text-rofe-drift uppercase tracking-[0.1em]" style={{ fontWeight: 300 }}>{property.type}</p>
            </div>

            <div className="flex items-center gap-10 py-8 border-y border-rofe-cream">
              <div className="flex items-center gap-3">
                <Bed className="w-5 h-5 text-rofe-drift" />
                <div>
                  <div className="text-xs text-rofe-drift uppercase tracking-[0.1em]" style={{ fontWeight: 300 }}>Bedrooms</div>
                  <div className="text-rofe-basalt" style={{ fontWeight: 300 }}>{property.bedrooms}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Bath className="w-5 h-5 text-rofe-drift" />
                <div>
                  <div className="text-xs text-rofe-drift uppercase tracking-[0.1em]" style={{ fontWeight: 300 }}>Bathrooms</div>
                  <div className="text-rofe-basalt" style={{ fontWeight: 300 }}>{property.bathrooms}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-rofe-drift" />
                <div>
                  <div className="text-xs text-rofe-drift uppercase tracking-[0.1em]" style={{ fontWeight: 300 }}>Max Guests</div>
                  <div className="text-rofe-basalt" style={{ fontWeight: 300 }}>{property.maxGuests}</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl mb-5 text-rofe-basalt tracking-[0.04em]" style={{ fontWeight: 200 }}>About This Property</h2>
              <p className="text-rofe-ash leading-relaxed" style={{ fontWeight: 300 }}>{property.description}</p>
            </div>

            <div>
              <h2 className="text-2xl mb-5 text-rofe-basalt tracking-[0.04em]" style={{ fontWeight: 200 }}>Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-rofe-drift flex-shrink-0" />
                    <span className="text-rofe-ash text-sm" style={{ fontWeight: 300 }}>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-rofe-warm border border-rofe-cream p-8">
              <div className="mb-8">
                <div className="text-3xl text-rofe-basalt" style={{ fontWeight: 200 }}>
                  €{property.price}
                  <span className="text-lg text-rofe-drift"> / night</span>
                </div>
              </div>

              <div className="space-y-5 mb-8">
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] mb-2 text-rofe-drift" style={{ fontWeight: 300 }}>Check-in</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-rofe-white border border-rofe-cream text-rofe-basalt focus:outline-none focus:ring-1 focus:ring-rofe-basalt"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] mb-2 text-rofe-drift" style={{ fontWeight: 300 }}>Check-out</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-rofe-white border border-rofe-cream text-rofe-basalt focus:outline-none focus:ring-1 focus:ring-rofe-basalt"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] mb-2 text-rofe-drift" style={{ fontWeight: 300 }}>Guests</label>
                  <select className="w-full px-4 py-3 bg-rofe-white border border-rofe-cream text-rofe-basalt focus:outline-none focus:ring-1 focus:ring-rofe-basalt">
                    {Array.from({ length: property.maxGuests }, (_, i) => i + 1).map(num => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <Link
                to="/contact"
                className="block w-full px-6 py-4 bg-rofe-basalt text-rofe-cream text-center text-sm tracking-[0.15em] uppercase hover:bg-rofe-stone transition-colors mb-4"
                style={{ fontWeight: 300 }}
              >
                Request to Book
              </Link>

              <p className="text-xs text-rofe-drift text-center tracking-[0.05em]" style={{ fontWeight: 300 }}>
                You won't be charged yet
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
