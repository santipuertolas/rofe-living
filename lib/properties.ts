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
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1259509649846962431/original/8afe216e-5519-4c3e-bc5b-9e4723bd090b.jpeg',
      'https://a0.muscache.com/im/pictures/miso/Hosting-1259509649846962431/original/38e55abe-6968-4ce8-954b-055ebd28d680.jpeg',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1259509649846962431/original/4d16c4ee-ed3c-4e6b-90da-adec0fdcaaa8.jpeg',
      'https://a0.muscache.com/im/pictures/miso/Hosting-1259509649846962431/original/96b10e35-d295-4494-a480-0c0d253f72dd.jpeg',
      'https://a0.muscache.com/im/pictures/miso/Hosting-1259509649846962431/original/cbef10e6-d85e-4843-8151-d0b2a20cafc3.jpeg',
      'https://a0.muscache.com/im/pictures/miso/Hosting-1259509649846962431/original/9473f361-2f06-4b88-a501-26a24d561a5a.jpeg',
      'https://a0.muscache.com/im/pictures/miso/Hosting-1259509649846962431/original/b8af094b-376b-462c-ac97-c7c60de30b72.jpeg',
      'https://a0.muscache.com/im/pictures/miso/Hosting-1259509649846962431/original/c7ec1f91-95b7-4b34-b3a0-fb1c71c1d885.jpeg',
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
