export interface Property {
  id: string;
  name: string;
  type: string;
  description: string;
  shortDescription: string;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  price: number;
  images: string[];
  amenities: string[];
  location: string;
  featured: boolean;
}

export const properties: Property[] = [
  {
    id: "villa-oceana",
    name: "Villa Oceana",
    type: "Luxury Villa",
    shortDescription: "Stunning oceanfront villa with infinity pool and panoramic views",
    description: "Experience the ultimate luxury at Villa Oceana, our flagship property featuring contemporary design, an infinity pool overlooking the Atlantic Ocean, and direct beach access. This architecturally stunning villa combines modern elegance with the raw beauty of Lanzarote's volcanic landscape.",
    bedrooms: 4,
    bathrooms: 3,
    maxGuests: 8,
    price: 450,
    images: [
      "https://images.unsplash.com/photo-1762117360871-f11fbad00ee1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjB2aWxsYSUyMHBvb2wlMjBzdW5zZXR8ZW58MXx8fHwxNzcyMDk2MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1759264244764-2cb80f1a67bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVkcm9vbSUyMGhvdGVsJTIwbHV4dXJ5fGVufDF8fHx8MTc3MjEyNjkxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1757262798620-ea10e2edd875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwbHV4dXJ5JTIwdmlsbGF8ZW58MXx8fHwxNzcyMTI2OTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    amenities: [
      "Infinity Pool",
      "Ocean Views",
      "Beach Access",
      "Smart Home System",
      "Gourmet Kitchen",
      "Outdoor Dining",
      "BBQ Area",
      "Gym",
      "Wine Cellar",
      "Concierge Service"
    ],
    location: "Playa Blanca",
    featured: true
  },
  {
    id: "casa-marina",
    name: "Casa Marina",
    type: "Beachfront Residence",
    shortDescription: "Elegant beachfront home with private terrace and sea views",
    description: "Casa Marina offers a perfect blend of comfort and sophistication. This beautifully designed beachfront residence features spacious living areas, a private terrace with stunning sea views, and is just steps away from pristine beaches. Ideal for those seeking a refined coastal retreat.",
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6,
    price: 320,
    images: [
      "https://images.unsplash.com/photo-1771992457539-a65d4a32ae37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWFjaGZyb250JTIwcHJvcGVydHklMjB0ZXJyYWNlfGVufDF8fHx8MTc3MjEyNjkxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1766513997564-8c5396f17716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMG9jZWFuJTIwdmlld3xlbnwxfHx8fDE3NzIxMjY5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1759264244764-2cb80f1a67bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVkcm9vbSUyMGhvdGVsJTIwbHV4dXJ5fGVufDF8fHx8MTc3MjEyNjkxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    amenities: [
      "Sea Views",
      "Private Terrace",
      "Beach Access",
      "Modern Kitchen",
      "Air Conditioning",
      "WiFi",
      "Parking",
      "BBQ Facilities",
      "Smart TV",
      "Washer/Dryer"
    ],
    location: "Puerto del Carmen",
    featured: true
  },
  {
    id: "loft-vulcano",
    name: "Loft Vulcano",
    type: "Contemporary Loft",
    shortDescription: "Modern designer loft with volcano views and rooftop terrace",
    description: "Loft Vulcano is a masterpiece of contemporary design, featuring floor-to-ceiling windows, minimalist interiors, and breathtaking views of Lanzarote's iconic volcanic landscape. The rooftop terrace provides the perfect setting for sunset cocktails and stargazing.",
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    price: 280,
    images: [
      "https://images.unsplash.com/photo-1766513997564-8c5396f17716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMG9jZWFuJTIwdmlld3xlbnwxfHx8fDE3NzIxMjY5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1759264244764-2cb80f1a67bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVkcm9vbSUyMGhvdGVsJTIwbHV4dXJ5fGVufDF8fHx8MTc3MjEyNjkxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1757262798620-ea10e2edd875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwbHV4dXJ5JTIwdmlsbGF8ZW58MXx8fHwxNzcyMTI2OTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    amenities: [
      "Volcano Views",
      "Rooftop Terrace",
      "Designer Interiors",
      "High-Speed WiFi",
      "Smart Home",
      "Premium Kitchen",
      "Air Conditioning",
      "Sound System",
      "Workspace",
      "Secure Parking"
    ],
    location: "Yaiza",
    featured: false
  }
];
