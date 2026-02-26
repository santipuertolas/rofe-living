export type PropertyStatus = 'available' | 'coming-soon'

export interface Property {
  id: string
  name: string
  type: string
  description: string
  shortDescription: string
  bedrooms: number
  bathrooms: number
  maxGuests: number
  images: string[]
  amenities: string[]
  location: string
  featured: boolean
  status: PropertyStatus
  bookingIframeUrl?: string
}

export const properties: Property[] = [
  {
    id: 'rofe-la-santa',
    name: 'RØFE La Santa',
    type: 'Studio Apartment',
    shortDescription: 'Newly renovated studio in the heart of La Santa — a haven for sports enthusiasts and nature lovers.',
    description:
      'Escape to our stunning, newly renovated studio apartment in the charming town of La Santa, a haven for sports enthusiasts and nature lovers alike. Perfectly designed to capture natural light, this beautiful space offers the ultimate retreat for a memorable vacation or a productive remote working experience. Wake up to a beautiful sunrise over the mountains, go on to explore the captivating beauty of Lanzarote and finish the day watching the sun set over the waves from the terrace.',
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    images: [
      'https://images.unsplash.com/photo-1766513997564-8c5396f17716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMG9jZWFuJTIwdmlld3xlbnwxfHx8fDE3NzIxMjY5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1759264244764-2cb80f1a67bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVkcm9vbSUyMGhvdGVsJTIwbHV4dXJ5fGVufDF8fHx8MTc3MjEyNjkxNHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1757262798620-ea10e2edd875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwbHV4dXJ5JTIwdmlsbGF8ZW58MXx8fHwxNzcyMTI2OTE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    amenities: [
      'Mountain Views',
      'Sea View Terrace',
      'Natural Light',
      'Fully Equipped Kitchen',
      'High-Speed WiFi',
      'Air Conditioning',
      'Smart TV',
      'Washer',
      '5-min Walk to Beach',
      'Near La Santa Sport Resort',
      'Parking',
      'Quiet Location',
    ],
    location: 'La Santa, Lanzarote',
    featured: true,
    status: 'available',
    bookingIframeUrl: 'https://oomsi.com/book/cmlikxr210001lb040kfmx4fy',
  },
  {
    id: 'coming-soon-2',
    name: 'Coming Soon',
    type: 'New Property',
    shortDescription: 'A new RØFE Living property is coming to Lanzarote. Join the waitlist to be notified first.',
    description: 'A new RØFE Living property is being carefully curated. Every detail is being considered to deliver the authentic, minimalist experience that defines our collection.',
    bedrooms: 0,
    bathrooms: 0,
    maxGuests: 0,
    images: [
      'https://images.unsplash.com/photo-1598352103173-7556a25673c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYW56YXJvdGUlMjBibGFjayUyMHNhbmQlMjBiZWFjaCUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzcyMTMxNjgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    amenities: [],
    location: 'Lanzarote',
    featured: false,
    status: 'coming-soon',
  },
  {
    id: 'coming-soon-3',
    name: 'Coming Soon',
    type: 'New Property',
    shortDescription: 'A new RØFE Living property is coming to Lanzarote. Join the waitlist to be notified first.',
    description: 'A new RØFE Living property is being carefully curated. Every detail is being considered to deliver the authentic, minimalist experience that defines our collection.',
    bedrooms: 0,
    bathrooms: 0,
    maxGuests: 0,
    images: [
      'https://images.unsplash.com/photo-1673746214924-6ccd171a2c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYW56YXJvdGUlMjB2b2xjYW5pYyUyMGJlYWNoJTIwbHV4dXJ5fGVufDF8fHx8MTc3MjEyNjkxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    amenities: [],
    location: 'Lanzarote',
    featured: false,
    status: 'coming-soon',
  },
  {
    id: 'coming-soon-4',
    name: 'Coming Soon',
    type: 'New Property',
    shortDescription: 'A new RØFE Living property is coming to Lanzarote. Join the waitlist to be notified first.',
    description: 'A new RØFE Living property is being carefully curated. Every detail is being considered to deliver the authentic, minimalist experience that defines our collection.',
    bedrooms: 0,
    bathrooms: 0,
    maxGuests: 0,
    images: [
      'https://images.unsplash.com/photo-1771267174948-a1bf95e7a9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYW56YXJvdGUlMjB2b2xjYW5pYyUyMGxhbmRzY2FwZSUyMG9jZWFuJTIwYWVyaWFsfGVufDF8fHx8MTc3MjEzMTY4MXww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    amenities: [],
    location: 'Lanzarote',
    featured: false,
    status: 'coming-soon',
  },
]
