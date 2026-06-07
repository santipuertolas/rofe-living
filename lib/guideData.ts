export type Unit = 'calima' | 'mojo' | 'picon'

export interface AccessStep {
  door: string
  instruction: string
}

export interface UnitData {
  displayName: string
  descriptionParagraphs: string[]
  accessIntro: string
  accessSteps: AccessStep[]
  accessNote?: string
}

export const unitData: Record<Unit, UnitData> = {
  calima: {
    displayName: 'CALIMA',
    descriptionParagraphs: [
      'CALIMA is a top-floor studio designed for two — named after the warm Saharan wind that sweeps across the islands, bringing hazy golden light. Your own private rooftop hideaway in the heart of Arrecife.',
      'A few things we\'re particularly proud of: the specialty coffee corner (AeroPress, hand grinder, gooseneck kettle with temperature control, precision scale, and beans to get you started), the Marshall speaker for your own soundtrack (connect via Bluetooth, look for "Acton III"), a fully equipped kitchen with induction hob and integrated fridge, and ~50 m² of private terrace with a sun lounger and outdoor furniture.',
      'You\'ll also find fresh bed linens, towels, and toiletries (shampoo, conditioner, body soap) and a hair dryer in the bathroom.',
    ],
    accessIntro: 'All doors use codes shared in your Airbnb message — no keys needed. Three doors between the street and your bed:',
    accessSteps: [
      {
        door: '🔑 Building entrance (Calle Fajardo 11)',
        instruction: 'Keypad → enter code → tap the bell icon to open → stairs to second floor',
      },
      {
        door: '🔑 Terrace door (rooftop)',
        instruction: 'Smart lock → code → # → rotate to open',
      },
      {
        door: '🔑 CALIMA (glass sliding door — turn right on the terrace, a few metres ahead)',
        instruction: 'Smart lock → code → # → rotate → slide open',
      },
    ],
  },
  mojo: {
    displayName: 'MOJO',
    descriptionParagraphs: [
      'MOJO is a one-bedroom apartment on the first floor, designed for two — named after the iconic Canarian sauce. Simple ingredients, bold flavour, unmistakably local.',
      'A few things we\'re particularly proud of: the specialty coffee corner (AeroPress, hand grinder, gooseneck kettle with temperature control, precision scale, and beans to get you started), the Marshall speaker for your own soundtrack (connect via Bluetooth, look for "Acton III"), a fully equipped kitchen with induction hob and integrated fridge, and a large private balcony overlooking the street.',
      'You\'ll also find fresh bed linens, towels, and toiletries (shampoo, conditioner, body soap) and a hair dryer in the bathroom.',
    ],
    accessIntro: 'All doors use codes shared in your Airbnb message — no keys needed. Two doors between the street and your bed:',
    accessSteps: [
      {
        door: '🔑 Building entrance (Calle Fajardo 11)',
        instruction: 'Keypad → enter code → tap the bell icon to open → stairs to first floor',
      },
      {
        door: '🔑 MOJO (first door on the left in the hallway)',
        instruction: 'Smart lock → code → # → rotate to open',
      },
    ],
    accessNote: 'The shared rooftop terrace is accessible via a separate door upstairs — same lock type (code → # → rotate). Your code works between 8:00 and 21:00.',
  },
  picon: {
    displayName: 'PICÓN',
    descriptionParagraphs: [
      'PICÓN is a two-bedroom apartment on the first floor, designed for up to four guests — named after the volcanic gravel used across Lanzarote to nurture crops in the most unlikely soil. The same stone as rofe itself.',
      'A few things we\'re particularly proud of: the specialty coffee corner (AeroPress, hand grinder, gooseneck kettle with temperature control, precision scale, and beans to get you started), the Marshall speaker for your own soundtrack (connect via Bluetooth, look for "Acton III"), and a fully equipped kitchen with induction hob and integrated fridge.',
      'The apartment has two bedrooms — one with a queen bed, one with two single beds that can be combined into a king. There\'s a full bathroom with shower and a separate toilet. You\'ll also find fresh bed linens, towels, and toiletries (shampoo, conditioner, body soap) and a hair dryer.',
    ],
    accessIntro: 'All doors use codes shared in your Airbnb message — no keys needed. Two doors between the street and your bed:',
    accessSteps: [
      {
        door: '🔑 Building entrance (Calle Fajardo 11)',
        instruction: 'Keypad → enter code → tap the bell icon to open → stairs to first floor',
      },
      {
        door: '🔑 PICÓN (door at the end of the corridor)',
        instruction: 'Smart lock → code → # → rotate to open',
      },
    ],
    accessNote: 'The shared rooftop terrace is accessible via a separate door upstairs — same lock type (code → # → rotate). Your code works between 8:00 and 21:00.',
  },
}
