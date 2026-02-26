import { Link } from 'react-router';
import { Property } from '../data/properties';
import { Bed, Bath, Users, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link to={`/properties/${property.id}`} className="group">
      <div className="overflow-hidden bg-rofe-white hover:shadow-lg transition-all duration-500">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <ImageWithFallback
            src={property.images[0]}
            alt={property.name}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
          />
          <div className="absolute top-4 right-4 px-4 py-1.5 bg-rofe-basalt/80 backdrop-blur-sm text-rofe-cream text-sm tracking-[0.1em]" style={{ fontWeight: 300 }}>
            €{property.price}/night
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-rofe-drift mb-3" style={{ fontWeight: 300 }}>
            <MapPin className="w-3.5 h-3.5" />
            <span className="tracking-[0.1em] uppercase text-xs">{property.location}</span>
          </div>

          <h3 className="text-xl tracking-[0.05em] mb-1 text-rofe-basalt group-hover:text-rofe-stone transition-colors" style={{ fontWeight: 200 }}>
            {property.name}
          </h3>
          <p className="text-xs text-rofe-drift uppercase tracking-[0.1em] mb-4" style={{ fontWeight: 300 }}>{property.type}</p>

          <p className="text-rofe-ash text-sm mb-5 line-clamp-2 leading-relaxed" style={{ fontWeight: 300 }}>
            {property.shortDescription}
          </p>

          {/* Features */}
          <div className="flex items-center gap-5 text-sm text-rofe-ash border-t border-rofe-cream pt-4">
            <div className="flex items-center gap-1.5" style={{ fontWeight: 300 }}>
              <Bed className="w-4 h-4 text-rofe-drift" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center gap-1.5" style={{ fontWeight: 300 }}>
              <Bath className="w-4 h-4 text-rofe-drift" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center gap-1.5" style={{ fontWeight: 300 }}>
              <Users className="w-4 h-4 text-rofe-drift" />
              <span>{property.maxGuests}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
