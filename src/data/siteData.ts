export interface Vehicle {
  id: string;
  name: string;
  category: 'Sedan' | 'SUV' | 'MUV' | 'Group';
  seats: string;
  luggage: string;
  ac: boolean;
  description: string;
  idealFor: string;
  features: string[];
  popular: boolean;
  image: string;
}

export interface RouteDetail {
  slug: string;
  title: string;
  shortTitle: string;
  destination: string;
  distance: string;
  travelTime: string;
  routeHighway: string;
  description: string;
  highlights: string[];
  stopsAlongWay: string[];
  overview: string;
  faqs: { question: string; answer: string }[];
}

export const BUSINESS_INFO = {
  name: "Ramdevraa Taxi Service",
  legalName: "Ramdevraa Taxi & Tour Services",
  phone: "7240372575",
  phoneFormatted: "+91 7240372575",
  whatsappNumber: "917240372575",
  email: "ramdevraa.in@gmail.com",
  siteUrl: "https://ramdevraa.in", // canonical domain
  googleMapShareUrl: "https://share.google/quNskAuGgyWwFsD2Y",
  address: {
    street: "Near Baba Ramdev Ji Mandir & Railway Station",
    locality: "Ramdevra",
    city: "Pokhran",
    region: "Rajasthan",
    postalCode: "345023",
    country: "India"
  },
  geo: {
    latitude: 26.9856,
    longitude: 71.9168
  },
  openingHours: "Mo-Su 00:00-24:00 (24/7 Available)",
  rating: {
    ratingValue: "4.9",
    reviewCount: "128",
    bestRating: "5"
  }
};

export const FLEET_DATA: Vehicle[] = [
  {
    id: "swift-dzire",
    name: "Swift Dzire / Etios",
    category: "Sedan",
    seats: "1–4 Passengers",
    luggage: "2 Large Bags",
    ac: true,
    description: "Comfortable air-conditioned sedan. Perfect for couples, small pilgrim families, and quick one-way trips.",
    idealFor: "Small families, couples, railway station & airport pickups",
    features: ["Chilled AC", "Comfortable Legroom", "Carrier for luggage on demand", "Experienced highway driver", "Clean & sanitized"],
    popular: true,
    image: "/images/sedan.webp"
  },
  {
    id: "ertiga",
    name: "Maruti Suzuki Ertiga",
    category: "MUV",
    seats: "1–6 Passengers",
    luggage: "4 Bags",
    ac: true,
    description: "Spacious 6-seater family car with flexible seating and generous trunk space. Highly recommended for family pilgrimage to Ramdevra.",
    idealFor: "Medium families, luggage-heavy trips, outstation desert tours",
    features: ["Dual AC vents", "Reclining middle row seats", "Ample luggage space", "Smooth desert ride", "Bottled water"],
    popular: true,
    image: "/images/ertiga.webp"
  },
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta",
    category: "SUV",
    seats: "1–6 / 7 Passengers",
    luggage: "5 Bags",
    ac: true,
    description: "The gold standard in Indian highway travel. Supreme cushion comfort, powerful suspension, and luxury ride quality for long desert highways.",
    idealFor: "VIP pilgrims, elderly travellers, corporate and luxury desert travel",
    features: ["Captain seats available", "Triple zone AC", "High safety ratings", "Ultra quiet cabin", "Premium luxury feel"],
    popular: true,
    image: "/images/innova.webp"
  },
  {
    id: "eeco",
    name: "Maruti Suzuki Eeco",
    category: "MUV",
    seats: "1–6 Passengers",
    luggage: "3 Bags",
    ac: true,
    description: "Budget option for local Ramdevra temple darshan, Pokhran market visits, and nearby railway station drops.",
    idealFor: "Budget-conscious yatris, short distance transfers",
    features: ["AC available", "Easy boarding for all ages", "Local driver guidance"],
    popular: false,
    image: "/images/eeco.webp"
  },
  {
    id: "force-toofan",
    name: "Force Trax Toofan / Cruiser",
    category: "Group",
    seats: "1–12 Passengers",
    luggage: "6-8 Bags",
    ac: true,
    description: "Rugged and spacious 10-12 seater vehicle built for big pilgrim sanghs and joint families traveling together across Rajasthan.",
    idealFor: "Large pilgrim groups, joint families, temple yatra groups",
    features: ["Heavy duty roof carrier", "High ground clearance", "12 Passenger seating", "Desert terrain capable"],
    popular: false,
    image: "/images/toofan.webp"
  },
  {
    id: "tempo-traveller",
    name: "Luxury Tempo Traveller (12/17/26 Seater)",
    category: "Group",
    seats: "12–20 Passengers",
    luggage: "12+ Bags",
    ac: true,
    description: "Ultimate luxury for large pilgrim groups, wedding guests, and tour packages. Pushback seats, individual AC vents, and music system.",
    idealFor: "Tour groups, community pilgrimage sanghs, multi-city Rajasthan tours",
    features: ["Pushback seats", "Individual reading lamps", "Powerful surround AC", "Large boot & top carrier", "Tour guide support"],
    popular: false,
    image: "/images/tempo.webp"
  }
];

export const POPULAR_ROUTES: RouteDetail[] = [
  {
    slug: "ramdevra-to-jaisalmer-taxi",
    title: "Ramdevra to Jaisalmer Taxi Service",
    shortTitle: "Ramdevra → Jaisalmer",
    destination: "Jaisalmer (Golden City)",
    distance: "118–122 km",
    travelTime: "2 to 2.5 Hours",
    routeHighway: "NH 11 (National Highway)",
    overview: "Direct one-way and round-trip taxi service from Ramdevra Baba Ramdevji Mandir or Railway Station to Jaisalmer Golden City. Safe highway cruising on NH 11 with door-to-door drop at hotels, Jaisalmer Fort, or Jaisalmer Railway Station.",
    description: "Travel between the holy shrine of Baba Ramdevji and the Golden City of Jaisalmer in air-conditioned comfort. Our professional local drivers are well versed with Jaisalmer routes, hotel locations inside or outside the fort, and city guidelines.",
    highlights: [
      "Jaisalmer Fort (Sonar Qila)",
      "Gadisar Lake & Boating",
      "Patwon Ki Haveli & Salim Singh Ki Haveli",
      "Kuldhara Abandoned Village",
      "Jaisalmer Railway Station / Airport transfer"
    ],
    stopsAlongWay: ["Lathi Village (Famous tea stops)", "Chandan Village", "War Museum Jaisalmer"],
    faqs: [
      {
        question: "How long does a taxi take from Ramdevra to Jaisalmer?",
        answer: "A taxi ride typically takes between 2 to 2.5 hours covering approximately 120 km via the smooth NH 11 highway."
      },
      {
        question: "Can I book a one-way taxi from Ramdevra to Jaisalmer?",
        answer: "Yes, we offer both one-way drops and round-trip taxi packages with local sightseeing in Jaisalmer. Call 7240372575 for booking."
      },
      {
        question: "Do you pick up directly from Ramdevra Railway Station?",
        answer: "Yes! Our driver will be ready at Ramdevra Railway Station (RDRA) before your train arrives with 24x7 availability."
      }
    ]
  },
  {
    slug: "ramdevra-to-jodhpur-taxi",
    title: "Ramdevra to Jodhpur Taxi Service",
    shortTitle: "Ramdevra → Jodhpur",
    destination: "Jodhpur (Sun City & Blue City)",
    distance: "175–185 km",
    travelTime: "3 to 4 Hours",
    routeHighway: "NH 125 & NH 11 via Balesar / Pokhran",
    overview: "Reliable, comfortable taxi transfer from Ramdevra to Jodhpur Railway Station (JU), Jodhpur Airport (JDH), or any hotel in Jodhpur. Best highway driving experience for pilgrims heading back home after darshan.",
    description: "Jodhpur is the major transit hub connecting Ramdevra to all major Indian cities by air and rail. Book a private taxi with Ramdevraa Taxi Service for a prompt 3 to 4 hour journey with flexible pickup times, zero surge pricing, and experienced drivers.",
    highlights: [
      "Jodhpur Railway Station (JU) transfers",
      "Jodhpur Airport (JDH) on-time flight drops",
      "Mehrangarh Fort & Jaswant Thada",
      "Umaid Bhawan Palace & Museum",
      "Mandore Gardens & Clock Tower Market"
    ],
    stopsAlongWay: ["Pokhran Town (Famous Pokhran Peda)", "Dechhu", "Balesar", "Agolai"],
    faqs: [
      {
        question: "How do I get a quote for Ramdevra to Jodhpur taxi?",
        answer: "You can call us directly at 7240372575 or message on WhatsApp. We provide transparent, competitive quotes for one-way, round-trip, and airport drops based on your travel date and vehicle choice."
      },
      {
        question: "Can the taxi drop me directly at Jodhpur Airport?",
        answer: "Yes, we provide direct airport drops tailored to your flight departure time with built-in buffer for stress-free travel."
      },
      {
        question: "Are there good restaurant stops between Ramdevra and Jodhpur?",
        answer: "Yes, there are clean vegetarian family highway restaurants and dhabas around Pokhran, Dechhu, and Balesar."
      }
    ]
  },
  {
    slug: "ramdevra-to-sam-sand-dunes-taxi",
    title: "Ramdevra to Sam Sand Dunes Taxi & Desert Tour",
    shortTitle: "Ramdevra → Sam Sand Dunes",
    destination: "Sam Sand Dunes (Thar Desert)",
    distance: "155–165 km",
    travelTime: "3 to 3.5 Hours",
    routeHighway: "NH 11 & Sam Road via Jaisalmer Bypass",
    overview: "Direct taxi service from Ramdevra Temple to the world-famous Sam Sand Dunes desert camping area in Jaisalmer. Perfect for evening sunset safaris, camel rides, and desert camp stay.",
    description: "Witness the magical Thar Desert after paying respects at Baba Ramdevji Temple. We transport pilgrims and tourists directly to their pre-booked luxury desert camps in Sam Dunes with comfortable luggage space and skilled drivers.",
    highlights: [
      "Sam Sunset Point & Golden Sand Dunes",
      "Jeep Safari & Dune Bashing in Thar",
      "Camel Safari across ripples of sand",
      "Rajasthani Folk Dance & Cultural Evening Camp",
      "Stargazing in desert silence"
    ],
    stopsAlongWay: ["Jaisalmer Outer Bypass", "Kuldhara Haunted Village", "Damodara Desert Hub"],
    faqs: [
      {
        question: "Can the taxi take us directly to our desert tent camp at Sam?",
        answer: "Yes, our drivers will navigate directly to your specific desert resort or Swiss tent camp in Sam."
      },
      {
        question: "What is the best time to leave Ramdevra for Sam Sand Dunes?",
        answer: "We recommend departing Ramdevra between 11:00 AM and 1:00 PM so you reach Sam Dunes by 3:30–4:30 PM before the desert sunset safari begins."
      }
    ]
  },
  {
    slug: "ramdevra-to-tanot-mata-taxi",
    title: "Ramdevra to Tanot Mata Temple & Longewala Taxi",
    shortTitle: "Ramdevra → Tanot & Longewala",
    destination: "Tanot Mata Temple & Indo-Pak Border",
    distance: "235–245 km",
    travelTime: "4.5 to 5.5 Hours",
    routeHighway: "NH 11 & Tanot Border Road via Ramgarh",
    overview: "Sacred border pilgrimage from Baba Ramdevji's shrine to the miraculous Tanot Mata Temple managed by the BSF, with optional extension to Longewala War Memorial border post.",
    description: "Tanot Mata Temple is an iconic pilgrimage site where divine miracles protected the shrine during the 1965 and 1971 wars. Our dedicated outstation taxi takes you safely across the mesmerizing Thar desert border highway.",
    highlights: [
      "Tanot Mata Temple (Holy BSF managed shrine)",
      "Unexploded Bombs Museum inside temple",
      "Longewala War Memorial & Tank Battlefields",
      "Desert National Park landscape",
      "Peaceful scenic desert highways"
    ],
    stopsAlongWay: ["Jaisalmer", "Ramgarh (Oasis town)", "BSF Border Checkposts"],
    faqs: [
      {
        question: "Can we visit Tanot Mata and Longewala in a single day trip from Ramdevra?",
        answer: "Yes, an early morning departure (around 6:00 AM to 7:00 AM) from Ramdevra allows you to comfortably visit Tanot Mata and Longewala, returning by late evening."
      },
      {
        question: "Are private vehicles allowed up to Tanot Mata Mandir?",
        answer: "Yes, our registered tourist taxis have full permission to travel to Tanot Mata Mandir and Longewala War Memorial."
      }
    ]
  },
  {
    slug: "ramdevra-to-bikaner-taxi",
    title: "Ramdevra to Bikaner Taxi Service",
    shortTitle: "Ramdevra → Bikaner",
    destination: "Bikaner (Camel City & Karni Mata)",
    distance: "195–205 km",
    travelTime: "3.5 to 4 Hours",
    routeHighway: "NH 11 via Phalodi, Bap & Kolayat",
    overview: "Comfortable highway cab service from Ramdevra to Bikaner. Convenient route passing through holy Kolayat Kapil Muni Sarovar and onward to Deshnoke Karni Mata Temple.",
    description: "Whether you are traveling for business, onward rail connections at Bikaner Junction, or extending your temple pilgrimage to Karni Mata Temple in Deshnoke, our sanitized taxis and punctual drivers ensure a serene journey.",
    highlights: [
      "Junagarh Fort & Prachina Museum",
      "Deshnoke Karni Mata Temple (World famous Rat Temple)",
      "Kapil Muni Lake & Ashrams in Kolayat",
      "National Research Centre on Camel",
      "Bikaner Junction Railway Station"
    ],
    stopsAlongWay: ["Phalodi (Salt city)", "Bap Village", "Kolayat Teerth"],
    faqs: [
      {
        question: "What is the distance and road condition between Ramdevra and Bikaner?",
        answer: "The distance is around 200 km via NH 11. The four-lane/two-lane national highway is well maintained with minimal traffic."
      },
      {
        question: "Can the taxi stop at Kolayat temple on the way to Bikaner?",
        answer: "Yes, we can arrange a convenient darshan stop at holy Kolayat Sarovar without any hassle."
      }
    ]
  },
  {
    slug: "ramdevra-to-undu-kashmir-taxi",
    title: "Ramdevra to Undu Kashmir (Barmer) Taxi",
    shortTitle: "Ramdevra → Undu Kashmir",
    destination: "Undu Kashmir (Baba Ramdevji Birthplace)",
    distance: "130–140 km",
    travelTime: "2.5 to 3 Hours",
    routeHighway: "Pokhran - Sheo - Undu Kashmir Route",
    overview: "The most sacred pilgrimage route: Travel from the Samadhi of Baba Ramdevji in Ramdevra to his holy birthplace (Janam Sthan) in Undu Kashmir (Shiv Tehsil, Barmer).",
    description: "Every true devotee of Baba Ramdevji wishes to visit both his Janambhoomi (Undu Kashmir) and his Samadhi Sthal (Ramdevra). We provide specialized pilgrimage taxi packages covering both sacred spots with ample darshan time.",
    highlights: [
      "Baba Ramdevji Janam Sthan Mandir in Undu Kashmir",
      "Sacred pond and ancient relics",
      "Rural Marwar culture and traditional desert villages",
      "Peaceful spiritual atmosphere",
      "Round trip darshan with driver waiting"
    ],
    stopsAlongWay: ["Pokhran", "Bhadariya Mata Ji", "Sheo Town"],
    faqs: [
      {
        question: "What is the religious significance of Undu Kashmir?",
        answer: "Undu Kashmir in Barmer district is the revered birthplace of Baba Ramdevji where Lord Krishna manifested in the house of King Ajmalji and Mata Mainadevi."
      },
      {
        question: "Is same-day round-trip possible from Ramdevra to Undu Kashmir?",
        answer: "Yes! You can complete the round trip easily in 6 to 7 hours including 2 hours for darshan and aarti at the birthplace temple."
      }
    ]
  }
];

export const SIGHTSEEING_PACKAGES = [
  {
    id: "local-ramdevra-darshan",
    title: "Complete Ramdevra Temple & Local Sightseeing",
    duration: "4 - 5 Hours",
    description: "Hassle-free local taxi covering all key holy spots in and around Ramdevra with AC comfort and luggage storage.",
    places: [
      "Baba Ramdevji Samadhi Mandir",
      "Ramsarovar Pavitra Sarovar",
      "Parcha Baori (Ancient stepped water reservoir)",
      "Mata Dali Bai Samadhi & Kangan",
      "Runiche Kuan (Spring water point)",
      "Ramdevra Railway Station Pickup/Drop"
    ]
  },
  {
    id: "pokhran-bhadariya-darshan",
    title: "Pokhran Fort & Bhadariya Library Tour",
    duration: "Full Day (6 - 8 Hours)",
    description: "Explore historical Pokhran Fort, museum, and Asia's largest underground handwritten scripture library at Bhadariya.",
    places: [
      "Balagarh Fort Pokhran",
      "Bhadariya Mataji Temple",
      "Asia's Largest Underground Library (50,000+ texts)",
      "Gaushala & Deer Sanctuary area",
      "Pokhran Market & Local Handicrafts"
    ]
  },
  {
    id: "jaisalmer-desert-combo",
    title: "Ramdevra to Jaisalmer Fort & Sam Dunes Yatra",
    duration: "2 Days / 1 Night",
    description: "The complete Western Rajasthan experience: Ramdevra Darshan, Jaisalmer Golden Fort, Patwon Haveli, and Desert Safari Camp at Sam Dunes.",
    places: [
      "Jaisalmer Golden Fort & Havelis",
      "Gadisar Lake & War Museum",
      "Sam Sand Dunes Desert Safari & Sunset",
      "Overnight Camp Drop & Return to Ramdevra"
    ]
  }
];

export const TESTIMONIALS = [
  {
    name: "Ajay Dewda",
    source: "Google Review",
    rating: 5,
    date: "October 2026",
    comment: "Very polite driver and excellent condition Innova Crysta for our family pilgrimage from Ramdevra to Jodhpur Airport. Arrived right on time at Ramdevra Railway station."
  },
  {
    name: "Rahul Singh (राजपूत)",
    source: "Google Review",
    rating: 5,
    date: "October 2026",
    comment: "Best taxi service in Ramdevra! We booked Swift Dzire for Ramdevra to Jaisalmer and Tanot Mata. Honest transparent service with no hidden hassles. जय बाबारी!"
  },
  {
    name: "Mahendra Soni",
    source: "Google Review",
    rating: 5,
    date: "September 2026",
    comment: "We reached Ramdevra at 3:00 AM on midnight train. Called 7240372575 and the cab was ready within 10 minutes outside the station. Safe, reliable, and humble driver."
  },
  {
    name: "Harisingh Rajput",
    source: "Google Review",
    rating: 5,
    date: "September 2026",
    comment: "JAY BABA RI 👏🚩 Wonderful experience with Ramdevraa Taxi Service. Clean AC car, well-mannered driver who helped our elderly parents with temple darshan guidance."
  },
  {
    name: "Gajendra Sharma",
    source: "Google Review",
    rating: 5,
    date: "August 2026",
    comment: "Booked an Ertiga for 6 passengers from Ramdevra to Undu Kashmir and back. Highly recommended for all pilgrims visiting Ramdevra."
  }
];

export const GENERAL_FAQS = [
  {
    question: "How do I book a taxi with Ramdevraa Taxi Service?",
    answer: "You can book in under 60 seconds through our interactive online booking form, call us directly at 7240372575, or send a quick message on WhatsApp at +91 7240372575. Our team confirms availability instantly."
  },
  {
    question: "Is taxi service available 24/7 at Ramdevra Railway Station?",
    answer: "Yes, we operate 24 hours a day, 7 days a week. Whether your train arrives at midnight, early dawn, or peak afternoon, our drivers are stationed near Ramdevra Railway Station (RDRA) for immediate pickup."
  },
  {
    question: "What types of taxis are available in your fleet?",
    answer: "Our fleet consists of modern, clean air-conditioned vehicles including Maruti Swift Dzire (Sedan), Maruti Ertiga (MUV), Toyota Innova & Innova Crysta (Premium SUV), Maruti Eeco, Force Toofan (10-12 seater), and Tempo Travellers (12-20 seater) for large groups."
  },
  {
    question: "Do you offer both one-way and round-trip taxi services?",
    answer: "Yes! We provide one-way drop taxis to Jaisalmer, Jodhpur, Bikaner, Jaipur, and airport drops, as well as round-trip packages with multi-day sightseeing across Rajasthan."
  },
  {
    question: "How are trip charges structured?",
    answer: "All our travel quotes are 100% transparent. Fuel, tolls, state taxes, and driver allowances are clearly communicated before your journey with zero surprise fees."
  },
  {
    question: "How far in advance should I book during Ramdevra Mela?",
    answer: "During the annual Bhadrapada Ramdevra Mela (August–September) and festival weekends, thousands of pilgrims visit the shrine. We strongly recommend booking 2 to 7 days in advance to guarantee your preferred vehicle."
  },
  {
    question: "Can your drivers guide us about Ramdevra Temple timings and darshan?",
    answer: "Our drivers are local residents of Ramdevra and Pokhran who know temple aarti timings, vip pass procedures, parking spots, and clean dharamsalas/hotels to ensure your pilgrimage is smooth and peaceful."
  }
];
