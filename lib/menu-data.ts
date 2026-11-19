export type ServicePeriod = 'dinner' | 'lunch' | 'tasting' | 'brunch' | 'drinks';

export type DietaryTag = 'seafood' | 'vegetarian' | 'gluten-free' | 'clay-oven';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  priceCents: number;
  priceUnit?: string;
  service: ServicePeriod;
  course: string;
  dietary: DietaryTag[];
  featured?: boolean;
}

export interface ServiceMetadata {
  id: ServicePeriod;
  label: string;
  hours: string;
  subtitle: string;
}

export const RESTAURANT_INFO = {
  name: 'Blue Cilantro',
  chef: 'Vidyadhara Shetty',
  chefCredential: 'Executive Chef & Proprietor · Former President, Cayman Culinary Society',
  streetAddress: '1 Gecko Link, Fidelity Financial Centre',
  corridor: 'West Bay Road · Seven Mile Beach',
  cityCountry: 'George Town, Grand Cayman, Cayman Islands',
  plusCode: '8JG9+4G George Town, Cayman Islands',
  phoneDisplay: '+1 (345) 945-4372',
  phoneHref: 'tel:+13459454372',
  email: 'bluecilantromanager@candw.ky',
  openTableUrl: 'https://www.opentable.com/restaurant/profile/1045189',
  googleMapsUrl:
    'https://www.google.com/maps/place/Blue+Cilantro/@19.3253204,-81.3812268,17z/data=!3m1!4b1!4m6!3m5!1s0x8f2587a9a8f36a1d:0xcc52819f7de56010!8m2!3d19.3253204!4d-81.3812268!16s%2Fg%2F1pzsy2lzh',
  googleRating: '4.5',
  googleReviewCount: '250+',
  hours: [
    { label: 'Lunch', schedule: 'Monday – Saturday', time: '11:00 AM – 2:30 PM' },
    { label: 'Dinner', schedule: 'Daily', time: '6:00 PM – 10:00 PM' },
    { label: 'Sunday Brunch', schedule: 'Sundays', time: '11:00 AM – 3:00 PM' },
  ],
  accessibilityNote:
    'Step-free wheelchair accessible entrance, ground-floor dining room seating, and attentive accommodation for allergies and dietary preferences.',
} as const;

export const SERVICE_TABS: ServiceMetadata[] = [
  {
    id: 'dinner',
    label: 'Dinner',
    hours: 'Daily, 6:00 PM – 10:00 PM',
    subtitle: 'French technique, Mediterranean brightness, and aromatic Asian spice crafted from daily island catch.',
  },
  {
    id: 'lunch',
    label: 'Lunch',
    hours: 'Monday – Saturday, 11:00 AM – 2:30 PM',
    subtitle: 'Midday plates, wood-blistered clay oven flatbreads, crisp raw-bar starters, and light coastal entrées.',
  },
  {
    id: 'tasting',
    label: 'Tasting Menu',
    hours: 'Evening Service · Table Participation',
    subtitle: 'A curated multi-course progression personally composed by Chef Vidyadhara Shetty.',
  },
  {
    id: 'brunch',
    label: 'Sunday Brunch',
    hours: 'Sundays, 11:00 AM – 3:00 PM',
    subtitle: 'Grand Cayman’s beloved à la carte Sunday ritual featuring raw bar, sushi, clay oven breads, and optional Champagne.',
  },
  {
    id: 'drinks',
    label: 'Bar & Cellar',
    hours: 'Served at the Blue Perspex Bar & Dining Room',
    subtitle: 'Hand-crafted Caribbean-spiced cocktails, signature martinis, and an international cellar curated for fusion cuisine.',
  },
];

export const COURSE_ORDER: Record<ServicePeriod, string[]> = {
  dinner: [
    'Clay Oven & Chutneys',
    'Raw Bar & Starters',
    'Soups & Salads',
    'Signature Entrées',
    'Desserts & Artisanal Cheeses',
  ],
  lunch: ['Clay Oven Flatbreads', 'Midday Starters & Salads', 'Lunch Entrées'],
  tasting: ['Chef’s Tasting Experience', 'Curated Pairings'],
  brunch: ['Raw Bar & Sushi', 'Brunch Classics & Entrées', 'Pastries & Champagne'],
  drinks: ['Signature Cocktails', 'By the Glass & Cellar'],
};

export const MENU_ITEMS: MenuItem[] = [
  // DINNER — Clay Oven & Chutneys
  {
    id: 'din-flatbread-trio',
    name: 'Stuffed Clay Oven Flatbreads',
    description:
      'Hand-stretched and blistered to order in our clay oven. Choice of Pepper Jack cheese, Black Forest ham, Kalamata olive, or spiced Yukon Gold potato, accompanied by mint-cilantro, roasted garlic, sweet plum, and jalapeño chutneys.',
    priceCents: 1600,
    service: 'dinner',
    course: 'Clay Oven & Chutneys',
    dietary: ['clay-oven', 'vegetarian'],
    featured: true,
  },
  {
    id: 'din-shrimp-clay',
    name: 'Clay Oven-Roasted Jumbo Shrimp',
    description:
      'Marinated in toasted coriander, Kashmiri chili, and Meyer lemon, seared in the tandoor and finished with chilled cucumber raita.',
    priceCents: 2400,
    service: 'dinner',
    course: 'Clay Oven & Chutneys',
    dietary: ['seafood', 'gluten-free', 'clay-oven'],
  },

  // DINNER — Raw Bar & Starters
  {
    id: 'din-wahoo-ceviche',
    name: 'Local Wahoo Ceviche Carpaccio',
    description:
      'Line-caught Cayman wahoo sliced translucent, cured in fresh key lime and young coconut milk with crisp radish, micro cilantro, and subtle scotch bonnet oil.',
    priceCents: 2200,
    service: 'dinner',
    course: 'Raw Bar & Starters',
    dietary: ['seafood', 'gluten-free'],
    featured: true,
  },
  {
    id: 'din-tuna-tartare',
    name: 'Yellowfin Tuna Tartare',
    description:
      'Hand-diced sashimi-grade yellowfin tossed with toasted sesame, scallions, avocado mousse, and ginger-soy reduction, served with crisp wonton sheets.',
    priceCents: 2300,
    service: 'dinner',
    course: 'Raw Bar & Starters',
    dietary: ['seafood'],
  },
  {
    id: 'din-crab-cakes',
    name: 'Jumbo Lump Crab Cakes',
    description:
      'Pan-seared golden with sweet-tart tamarind glaze, ripe Hass avocado salad, and fresh cilantro oil.',
    priceCents: 2500,
    service: 'dinner',
    course: 'Raw Bar & Starters',
    dietary: ['seafood'],
  },
  {
    id: 'din-conch-fritters',
    name: 'Cayman Conch Fritters',
    description:
      'Crisp island conch fritters delicately seasoned with bell pepper and thyme, paired with house jerk aioli.',
    priceCents: 1900,
    service: 'dinner',
    course: 'Raw Bar & Starters',
    dietary: ['seafood'],
  },

  // DINNER — Soups & Salads
  {
    id: 'din-lobster-chowder',
    name: 'Lobster & Clam Chowder',
    description:
      'Velvety bisque-style chowder enriched with Caribbean lobster, tender littleneck clams, aged brandy cream, and snipped chives.',
    priceCents: 1800,
    service: 'dinner',
    course: 'Soups & Salads',
    dietary: ['seafood'],
  },
  {
    id: 'din-mushroom-soup',
    name: 'Forest Mushroom Velouté',
    description:
      'Roasted wild chanterelle and porcini soup finished with white truffle oil and crisp aged-cheese croutons.',
    priceCents: 1500,
    service: 'dinner',
    course: 'Soups & Salads',
    dietary: ['vegetarian'],
  },
  {
    id: 'din-spinach-salad',
    name: 'Baby Spinach & Local Greens',
    description:
      'Cayman organic greens, whipped chèvre, roasted heirloom beets, toasted pine nuts, and bright passion fruit vinaigrette.',
    priceCents: 1600,
    service: 'dinner',
    course: 'Soups & Salads',
    dietary: ['vegetarian', 'gluten-free'],
  },

  // DINNER — Signature Entrées
  {
    id: 'din-wild-salmon',
    name: 'Zaatar-Rubbed Wild Salmon',
    description:
      'Pan-seared crispy-skin wild salmon resting over seasoned sushi rice with aromatic black truffle ponzu reduction and charred baby bok choy.',
    priceCents: 4200,
    service: 'dinner',
    course: 'Signature Entrées',
    dietary: ['seafood'],
    featured: true,
  },
  {
    id: 'din-local-snapper',
    name: 'Whole Local Snapper',
    description:
      'Prepared in the clay oven with Mediterranean herbs or presented over handmade udon noodles in fragrant Thai red-coconut curry.',
    priceCents: 4600,
    service: 'dinner',
    course: 'Signature Entrées',
    dietary: ['seafood', 'clay-oven'],
  },
  {
    id: 'din-rack-of-lamb',
    name: 'Herb-Crusted New Zealand Rack of Lamb',
    description:
      'Roasted to rosy medium-rare and paired with silky forest mushroom risotto, baby root vegetables, and rosemary-port jus.',
    priceCents: 4900,
    service: 'dinner',
    course: 'Signature Entrées',
    dietary: ['gluten-free'],
    featured: true,
  },
  {
    id: 'din-pork-two-ways',
    name: 'Pork Two Ways',
    description:
      'Slow-braised pork belly steeped in tropical guava marinade alongside tender vindaloo-glazed baby back ribs and charred scallion purée.',
    priceCents: 4100,
    service: 'dinner',
    course: 'Signature Entrées',
    dietary: ['gluten-free'],
  },
  {
    id: 'din-ny-strip',
    name: 'Certified Angus 8oz New York Strip',
    description:
      'Char-grilled to order, accompanied by bright herb chimichurri, roasted garlic confit, and crisp house-cut frites.',
    priceCents: 4800,
    service: 'dinner',
    course: 'Signature Entrées',
    dietary: ['gluten-free'],
  },
  {
    id: 'din-seared-tuna',
    name: 'Sesame-Crusted Sushi-Grade Tuna',
    description:
      'Rare-seared yellowfin loin served with ginger-sake beurre blanc, jasmine rice cake, and pickled daikon.',
    priceCents: 4400,
    service: 'dinner',
    course: 'Signature Entrées',
    dietary: ['seafood', 'gluten-free'],
  },
  {
    id: 'din-botanical-risotto',
    name: 'Saffron & Roasted Vegetable Risotto',
    description:
      'Carnaroli rice slowly folded with Kashmiri saffron, charred island pumpkin, asparagus tips, and crisp sage.',
    priceCents: 3200,
    service: 'dinner',
    course: 'Signature Entrées',
    dietary: ['vegetarian', 'gluten-free'],
  },

  // DINNER — Desserts & Cheeses
  {
    id: 'din-pastry-selection',
    name: 'Chef’s Artisanal Pastry Quartet',
    description:
      'Daily rotating tasting of house-crafted miniature pastries, dark chocolate ganache tartlet, and tropical fruit sorbet.',
    priceCents: 1600,
    service: 'dinner',
    course: 'Desserts & Artisanal Cheeses',
    dietary: ['vegetarian'],
  },
  {
    id: 'din-cheese-board',
    name: 'International Cheese & Charcuterie Board',
    description:
      'Triple-cream French Brie, aged Spanish Manchego, Italian Fontal, Toscano fennel salami, spiced fig compote, and toasted walnut bread.',
    priceCents: 2400,
    service: 'dinner',
    course: 'Desserts & Artisanal Cheeses',
    dietary: [],
  },

  // LUNCH
  {
    id: 'lun-flatbread',
    name: 'Garlic & Herb Clay Oven Flatbread',
    description:
      'Fresh from the tandoor with rosemary sea salt, accompanied by four house chutneys: mint-cilantro, roasted garlic, sweet plum, and jalapeño.',
    priceCents: 1400,
    service: 'lunch',
    course: 'Clay Oven Flatbreads',
    dietary: ['clay-oven', 'vegetarian'],
  },
  {
    id: 'lun-ham-pepperjack',
    name: 'Black Forest Ham & Pepper Jack Flatbread',
    description:
      'Stuffed clay-oven flatbread layered with smoked ham, melted pepper jack, and caramelized onion relish.',
    priceCents: 1700,
    service: 'lunch',
    course: 'Clay Oven Flatbreads',
    dietary: ['clay-oven'],
  },
  {
    id: 'lun-wahoo-ceviche',
    name: 'Local Wahoo Ceviche',
    description:
      'Chilled Cayman wahoo carpaccio with coconut milk, key lime, fresh cilantro, and crisp plantain ribbons.',
    priceCents: 2000,
    service: 'lunch',
    course: 'Midday Starters & Salads',
    dietary: ['seafood', 'gluten-free'],
  },
  {
    id: 'lun-arugula-manchego',
    name: 'Wild Arugula & Roasted Beet Salad',
    description:
      'Shaved Spanish Manchego, honey-roasted baby beets, candied pecans, and citrus-shallot dressing.',
    priceCents: 1500,
    service: 'lunch',
    course: 'Midday Starters & Salads',
    dietary: ['vegetarian', 'gluten-free'],
  },
  {
    id: 'lun-black-bean',
    name: 'Tropical Black Bean Soup',
    description:
      'Slow-simmered spiced black beans topped with smoky tasso pork and bright green mango relish.',
    priceCents: 1400,
    service: 'lunch',
    course: 'Midday Starters & Salads',
    dietary: ['gluten-free'],
  },
  {
    id: 'lun-salmon-ponzu',
    name: 'Pan-Seared Salmon with Truffle Ponzu',
    description:
      'Zaatar-spiced wild salmon fillet, sushi rice quenelle, truffle ponzu drizzle, and crisp seasonal greens.',
    priceCents: 3100,
    service: 'lunch',
    course: 'Lunch Entrées',
    dietary: ['seafood'],
  },
  {
    id: 'lun-market-catch',
    name: 'Island Market Catch & Mushroom Risotto',
    description:
      'Daily local catch pan-roasted to golden perfection over creamy wild mushroom risotto with lemon-caper emulsion.',
    priceCents: 3400,
    service: 'lunch',
    course: 'Lunch Entrées',
    dietary: ['seafood', 'gluten-free'],
  },
  {
    id: 'lun-lobster-ravioli',
    name: 'House-Made Lobster Ravioli',
    description:
      'Delicate saffron pasta filled with sweet lobster, finished in light lemongrass-tomato cream.',
    priceCents: 3200,
    service: 'lunch',
    course: 'Lunch Entrées',
    dietary: ['seafood'],
  },

  // TASTING MENU
  {
    id: 'tast-four-course',
    name: 'Four-Course Chef’s Tasting',
    description:
      'Amuse-bouche from the clay oven, raw-bar starter, choice of local seafood or prime meat entrée, and artisanal dessert progression curated by Chef Shetty.',
    priceCents: 9500,
    priceUnit: '/ guest',
    service: 'tasting',
    course: 'Chef’s Tasting Experience',
    dietary: [],
    featured: true,
  },
  {
    id: 'tast-six-course',
    name: 'Six-Course Grand Degustation',
    description:
      'A complete expression of Blue Cilantro’s French, Mediterranean, and Asian pantry—spanning chilled Cayman crudo, clay-oven delicacies, twin mains, cheese course, and finale.',
    priceCents: 13500,
    priceUnit: '/ guest',
    service: 'tasting',
    course: 'Chef’s Tasting Experience',
    dietary: [],
    featured: true,
  },
  {
    id: 'tast-botanical',
    name: 'Four-Course Botanical Tasting',
    description:
      'Plant-forward seasonal progression highlighting Cayman farm produce, wild mushrooms, saffron grains, and clay oven breads.',
    priceCents: 8500,
    priceUnit: '/ guest',
    service: 'tasting',
    course: 'Chef’s Tasting Experience',
    dietary: ['vegetarian'],
  },
  {
    id: 'tast-wine-pairing',
    name: 'Sommelier Wine Pairing',
    description:
      'Four or six international pours selected from our cellar to harmonize with delicate spices, coastal seafood, and roasted meats.',
    priceCents: 6500,
    priceUnit: '/ guest',
    service: 'tasting',
    course: 'Curated Pairings',
    dietary: ['gluten-free', 'vegetarian'],
  },

  // SUNDAY BRUNCH
  {
    id: 'bru-raw-bar',
    name: 'Chilled Oysters & Local Wahoo Ceviche',
    description:
      'Freshly shucked East Coast oysters with mignonette alongside carpaccio-style local wahoo in coconut-lime dressing.',
    priceCents: 2400,
    service: 'brunch',
    course: 'Raw Bar & Sushi',
    dietary: ['seafood', 'gluten-free'],
  },
  {
    id: 'bru-sushi-platter',
    name: 'Chef’s Sunday Sushi Selection',
    description:
      'Yellowfin tuna, Scottish salmon, and crisp vegetable maki rolls served with pickled ginger, wasabi, and aged soy.',
    priceCents: 2600,
    service: 'brunch',
    course: 'Raw Bar & Sushi',
    dietary: ['seafood'],
  },
  {
    id: 'bru-crab-benedict',
    name: 'Lump Crab & Brioche Benedict',
    description:
      'Poached pasture-raised eggs over warm brioche and sweet crab cakes, crowned with saffron-lime hollandaise.',
    priceCents: 2500,
    service: 'brunch',
    course: 'Brunch Classics & Entrées',
    dietary: ['seafood'],
  },
  {
    id: 'bru-clay-oven-brunch',
    name: 'Warm Clay Oven Breads & Chutneys',
    description:
      'Freshly blistered stuffed flatbreads served to the table with all four signature Blue Cilantro chutneys.',
    priceCents: 1500,
    service: 'brunch',
    course: 'Brunch Classics & Entrées',
    dietary: ['clay-oven', 'vegetarian'],
  },
  {
    id: 'bru-steak-eggs',
    name: 'Angus Strip & Chimichurri Brunch Plate',
    description:
      'Char-grilled Certified Angus strip, softly scrambled farm eggs, herb chimichurri, and crisp breakfast potatoes.',
    priceCents: 3400,
    service: 'brunch',
    course: 'Brunch Classics & Entrées',
    dietary: ['gluten-free'],
  },
  {
    id: 'bru-pastries',
    name: 'Artisanal Morning Pastry Table & Champagne',
    description:
      'Warm butter croissants, cardamom brioche, and miniature fruit tarts; optional bottomless Champagne enhancement available.',
    priceCents: 4500,
    priceUnit: '/ Champagne option',
    service: 'brunch',
    course: 'Pastries & Champagne',
    dietary: ['vegetarian'],
  },

  // BAR & CELLAR
  {
    id: 'drk-mango-caipiroshka',
    name: 'Spicy Mango Caipiroshka',
    description:
      'Blue Cilantro signature cocktail—crisp vodka muddled with ripe island mango, fresh key lime, and house-infused scotch bonnet syrup.',
    priceCents: 1600,
    service: 'drinks',
    course: 'Signature Cocktails',
    dietary: ['gluten-free', 'vegetarian'],
    featured: true,
  },
  {
    id: 'drk-cilantro-martini',
    name: 'Blue Cilantro Botanical Martini',
    description:
      'Small-batch botanical gin shaken ice-cold with crushed coriander leaf, cucumber essence, and dry French vermouth.',
    priceCents: 1700,
    service: 'drinks',
    course: 'Signature Cocktails',
    dietary: ['gluten-free', 'vegetarian'],
  },
  {
    id: 'drk-lychee-aperitif',
    name: 'Ginger & Lychee Spritz',
    description:
      'Freshly pressed ginger, chilled lychee nectar, elderflower liqueur, and dry sparkling wine.',
    priceCents: 1500,
    service: 'drinks',
    course: 'Signature Cocktails',
    dietary: ['gluten-free', 'vegetarian'],
  },
  {
    id: 'drk-champagne-glass',
    name: 'Brut Reserve Champagne',
    description:
      'Fine mousse with crisp brioche and green apple notes, poured by the flute or chilled bottle for celebrations and Sunday brunch.',
    priceCents: 2200,
    priceUnit: '/ glass',
    service: 'drinks',
    course: 'By the Glass & Cellar',
    dietary: ['gluten-free', 'vegetarian'],
  },
  {
    id: 'drk-sancerre',
    name: 'Loire Valley Sancerre',
    description:
      'Mineral-driven Sauvignon Blanc with bright citrus acidity tailored to raw-bar ceviche and local snapper.',
    priceCents: 1800,
    priceUnit: '/ glass',
    service: 'drinks',
    course: 'By the Glass & Cellar',
    dietary: ['gluten-free', 'vegetarian'],
  },
  {
    id: 'drk-burgundy-pinot',
    name: 'Côte de Beaune Pinot Noir',
    description:
      'Silky red cherry, forest floor, and gentle spice selected to accompany herb-crusted lamb and zaatar salmon.',
    priceCents: 2100,
    priceUnit: '/ glass',
    service: 'drinks',
    course: 'By the Glass & Cellar',
    dietary: ['gluten-free', 'vegetarian'],
  },
];
