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
  unitCount?: number  // for building-level cards
  href?: string       // override link target for cards
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
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1259509649846962431/original/8afe216e-5519-4c3e-bc5b-9e4723bd090b.jpeg',
      'https://a0.muscache.com/im/pictures/miso/Hosting-1259509649846962431/original/38e55abe-6968-4ce8-954b-055ebd28d680.jpeg',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1259509649846962431/original/4d16c4ee-ed3c-4e6b-90da-adec0fdcaaa8.jpeg',
      'https://a0.muscache.com/im/pictures/miso/Hosting-1259509649846962431/original/96b10e35-d295-4494-a480-0c0d253f72dd.jpeg',
      'https://a0.muscache.com/im/pictures/miso/Hosting-1259509649846962431/original/cbef10e6-d85e-4843-8151-d0b2a20cafc3.jpeg',
    ],
    amenities: [
      'Ocean View Terrace',
      'Mountain Views',
      'High-Speed WiFi',
      'Fully Equipped Kitchen',
      'Air Conditioning',
      'Smart TV',
      'Washer',
      'Private Entrance',
      'Free Parking',
      '5-min Walk to Beach',
      'Near La Santa Sport Resort',
      'Quiet Location',
    ],
    location: 'La Santa, Lanzarote',
    featured: true,
    status: 'available',
    bookingIframeUrl: 'https://oomsi.com/book/cmlikxr210001lb040kfmx4fy',
  },
  {
    id: 'rofe-arrecife-calima',
    href: '/properties/rofe-arrecife/calima',
    name: 'CALIMA',
    type: 'Studio · Top Floor',
    shortDescription: 'Top-floor studio named after the warm Saharan wind — with ~50 m² of private rooftop terrace.',
    description:
      'CALIMA is a top-floor studio designed for two, named after the warm Saharan wind that sweeps across the islands, bringing hazy golden light. Your own private rooftop hideaway in the heart of Arrecife — with ~50 m² of private terrace, a specialty coffee corner, Marshall speaker, and a fully equipped kitchen with induction hob (no oven).',
    bedrooms: 0,
    bathrooms: 1,
    maxGuests: 2,
    images: [
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1700944210440706348/original/3a4298e9-6dac-4892-9ff6-d0f463cb8048.jpeg',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1700944210440706348/original/32248413-637c-499b-b939-a29d41ef4eab.jpeg',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1700944210440706348/original/e5c7326d-67dc-4271-933c-db1c00243587.jpeg',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1700944210440706348/original/07ab96b0-4e20-4d8b-820b-b1bcc8d1fc11.jpeg',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1700944210440706348/original/6a85c765-01ef-4cea-9073-e8cfc78c4a56.jpeg',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1700944210440706348/original/a5dd5adc-faf6-4ba8-84e4-6b68360606fa.jpeg',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1700944210440706348/original/f4696eff-4f7a-494b-88e7-6c39b683b622.jpeg',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1700944210440706348/original/505610c4-adc9-4b8d-9106-c4caee7e211b.jpeg',
    ],
    amenities: [
      'Private Rooftop Terrace (~50 m²)',
      'Specialty Coffee Corner (AeroPress)',
      'Marshall Bluetooth Speaker',
      'Induction Kitchen (no oven)',
      'Integrated Fridge',
      'High-Speed Wi-Fi (300 Mbps)',
      'Smart TV',
      'Fresh Linens & Toiletries',
      'Shared Laundry Room',
    ],
    location: 'Arrecife, Lanzarote',
    featured: true,
    status: 'available',
  },
  {
    id: 'rofe-arrecife-mojo',
    href: '/properties/rofe-arrecife/mojo',
    name: 'MOJO',
    type: '1 Bedroom · First Floor',
    shortDescription: 'One-bedroom apartment with a private balcony, named after the iconic Canarian sauce.',
    description:
      'MOJO is a one-bedroom apartment on the first floor, designed for two and named after the iconic Canarian sauce — simple ingredients, bold flavour, unmistakably local. It has a large private balcony overlooking the street, a specialty coffee corner, Marshall speaker, and a fully equipped kitchen.',
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    images: [
      'https://images.unsplash.com/photo-1673746214924-6ccd171a2c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYW56YXJvdGUlMjB2b2xjYW5pYyUyMGJlYWNoJTIwbHV4dXJ5fGVufDF8fHx8MTc3MjEyNjkxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    amenities: [
      'Private Balcony',
      'Specialty Coffee Corner (AeroPress)',
      'Marshall Bluetooth Speaker',
      'Fully Equipped Kitchen',
      'Integrated Fridge',
      'High-Speed Wi-Fi (300 Mbps)',
      'Smart TV',
      'Fresh Linens & Toiletries',
      'Shared Rooftop Terrace',
      'Shared Laundry Room',
    ],
    location: 'Arrecife, Lanzarote',
    featured: true,
    status: 'available',
  },
  {
    id: 'rofe-arrecife-picon',
    href: '/properties/rofe-arrecife/picon',
    name: 'PICÓN',
    type: '2 Bedrooms · First Floor',
    shortDescription: 'Two-bedroom apartment for up to four, named after the volcanic gravel of Lanzarote.',
    description:
      "PICÓN is a two-bedroom apartment on the first floor, designed for up to four guests. Named after the volcanic gravel used across Lanzarote to nurture crops in the most unlikely soil — the same stone as rofe itself. One bedroom has a queen bed; the other has two singles that combine into a king. Full bathroom with shower and separate toilet.",
    bedrooms: 2,
    bathrooms: 1,
    maxGuests: 4,
    images: [
      'https://images.unsplash.com/photo-1771267174948-a1bf95e7a9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYW56YXJvdGUlMjB2b2xjYW5pYyUyMGxhbmRzY2FwZSUyMG9jZWFuJTIwYWVyaWFsfGVufDF8fHx8MTc3MjEzMTY4MXww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    amenities: [
      'Two Bedrooms (Queen + Twin/King)',
      'Full Bathroom + Separate WC',
      'Specialty Coffee Corner (AeroPress)',
      'Marshall Bluetooth Speaker',
      'Fully Equipped Kitchen',
      'Integrated Fridge',
      'High-Speed Wi-Fi (300 Mbps)',
      'Smart TV',
      'Fresh Linens & Toiletries',
      'Shared Rooftop Terrace',
      'Shared Laundry Room',
    ],
    location: 'Arrecife, Lanzarote',
    featured: true,
    status: 'available',
  },
]

// ─── RØFE Arrecife unit data ───────────────────────────────────────────────

export type ArrecifeUnitId = 'calima' | 'mojo' | 'picon'

export interface ArrecifeUnit {
  id: ArrecifeUnitId
  displayName: string
  type: string
  shortDescription: string
  description: string
  bedrooms: number
  bathrooms: number
  maxGuests: number
  images: string[]
  amenities: string[]
}

export const arrecifeUnits: ArrecifeUnit[] = [
  {
    id: 'calima',
    displayName: 'CALIMA',
    type: 'Studio · Top Floor',
    shortDescription: 'Top-floor studio named after the warm Saharan wind — with ~50 m² of private rooftop terrace.',
    description:
      'CALIMA is a top-floor studio designed for two, named after the warm Saharan wind that sweeps across the islands, bringing hazy golden light. Your own private rooftop hideaway in the heart of Arrecife — with ~50 m² of private terrace, a specialty coffee corner, Marshall speaker, and a fully equipped kitchen with induction hob (no oven).',
    bedrooms: 0,
    bathrooms: 1,
    maxGuests: 2,
    images: [
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1700944210440706348/original/3a4298e9-6dac-4892-9ff6-d0f463cb8048.jpeg',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1700944210440706348/original/32248413-637c-499b-b939-a29d41ef4eab.jpeg',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1700944210440706348/original/e5c7326d-67dc-4271-933c-db1c00243587.jpeg',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1700944210440706348/original/07ab96b0-4e20-4d8b-820b-b1bcc8d1fc11.jpeg',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1700944210440706348/original/6a85c765-01ef-4cea-9073-e8cfc78c4a56.jpeg',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1700944210440706348/original/a5dd5adc-faf6-4ba8-84e4-6b68360606fa.jpeg',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1700944210440706348/original/f4696eff-4f7a-494b-88e7-6c39b683b622.jpeg',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1700944210440706348/original/505610c4-adc9-4b8d-9106-c4caee7e211b.jpeg',
    ],
    amenities: [
      'Private Rooftop Terrace (~50 m²)',
      'Specialty Coffee Corner (AeroPress)',
      'Marshall Bluetooth Speaker',
      'Induction Kitchen (no oven)',
      'Integrated Fridge',
      'High-Speed Wi-Fi (300 Mbps)',
      'Smart TV',
      'Fresh Linens & Toiletries',
      'Shared Rooftop Terrace',
      'Shared Laundry Room',
    ],
  },
  {
    id: 'mojo',
    displayName: 'MOJO',
    type: '1 Bedroom · First Floor',
    shortDescription: 'One-bedroom apartment with a private balcony, named after the iconic Canarian sauce.',
    description:
      'MOJO is a one-bedroom apartment on the first floor, designed for two and named after the iconic Canarian sauce — simple ingredients, bold flavour, unmistakably local. It has a large private balcony overlooking the street, a specialty coffee corner, Marshall speaker, and a fully equipped kitchen.',
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    images: [
      'https://images.unsplash.com/photo-1673746214924-6ccd171a2c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYW56YXJvdGUlMjB2b2xjYW5pYyUyMGJlYWNoJTIwbHV4dXJ5fGVufDF8fHx8MTc3MjEyNjkxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    amenities: [
      'Private Balcony',
      'Specialty Coffee Corner (AeroPress)',
      'Marshall Bluetooth Speaker',
      'Fully Equipped Kitchen',
      'Integrated Fridge',
      'High-Speed Wi-Fi (300 Mbps)',
      'Smart TV',
      'Fresh Linens & Toiletries',
      'Shared Rooftop Terrace',
      'Shared Laundry Room',
    ],
  },
  {
    id: 'picon',
    displayName: 'PICÓN',
    type: '2 Bedrooms · First Floor',
    shortDescription: 'Two-bedroom apartment for up to four, named after the volcanic gravel of Lanzarote.',
    description:
      "PICÓN is a two-bedroom apartment on the first floor, designed for up to four guests. Named after the volcanic gravel used across Lanzarote to nurture crops in the most unlikely soil — the same stone as rofe itself. One bedroom has a queen bed; the other has two singles that combine into a king. Full bathroom with shower and separate toilet.",
    bedrooms: 2,
    bathrooms: 1,
    maxGuests: 4,
    images: [
      'https://images.unsplash.com/photo-1771267174948-a1bf95e7a9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYW56YXJvdGUlMjB2b2xjYW5pYyUyMGxhbmRzY2FwZSUyMG9jZWFuJTIwYWVyaWFsfGVufDF8fHx8MTc3MjEzMTY4MXww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    amenities: [
      'Two Bedrooms (Queen + Twin/King)',
      'Full Bathroom + Separate WC',
      'Specialty Coffee Corner (AeroPress)',
      'Marshall Bluetooth Speaker',
      'Fully Equipped Kitchen',
      'Integrated Fridge',
      'High-Speed Wi-Fi (300 Mbps)',
      'Smart TV',
      'Fresh Linens & Toiletries',
      'Shared Rooftop Terrace',
      'Shared Laundry Room',
    ],
  },
]
