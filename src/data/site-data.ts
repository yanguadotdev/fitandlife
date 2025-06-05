export const navLinks = [
  {
    text: 'classes',
    link: '#classes'
  },
  {
    text: 'bonuses',
    link: '#bonuses'
  },
  {
    text: 'memberships',
    link: '#memberships'
  },
  {
    text: 'locations',
    link: '#locations'
  }
]


export const benefits = [
  {
    label: 'unparallaled personal training',
    img: '/images/personal-training.webp'
  },
  {
    label: 'unrivaled group fitness classes',
    img: '/images/group-training.webp'
  },
  {
    label: 'studios and luxury amenities',
    img: '/images/luxury-amenities.webp'
  }
]


export const classes = [
  {
    category: 'exclusive studio',
    classesAvailable: [
      {
        name: 'trx',
        goal: 'get stronger',
        duration: '45 mins',
        membership: 'exclusive',
        imgsrc: '/images/classes/trx.webp',
      },
      {
        name: 'fly-yoga',
        goal: 'get fitter',
        duration: '01 hour',
        membership: 'exclusive',
        imgsrc: '/images/classes/fly-yoga.webp',
      },
      {
        name: 'cycle',
        goal: 'get stronger',
        duration: '45 mins',
        membership: 'exclusive',
        imgsrc: '/images/classes/cycle.webp',
      },
    ],
  },
  {
    category: 'group training',
    classesAvailable: [
      {
        name: 'body shape',
        goal: 'aesthetic body',
        duration: '50 mins',
        membership: 'all inclusive',
        imgsrc: '/images/classes/body-shape.webp',
      },
      {
        name: 'hiit cardio',
        goal: 'improve endurance',
        duration: '45 mins',
        membership: 'super',
        imgsrc: '/images/classes/hiit-cardio.webp',
      },
      {
        name: 'zumba',
        goal: 'have fun',
        duration: '01 hour',
        membership: 'all inclusive',
        imgsrc: '/images/classes/zumba.webp',
      },
    ],
  },
  {
    category: 'mind & body',
    classesAvailable: [
      {
        name: 'vinyasa yoga',
        goal: 'improve flexibility',
        duration: '01 hour',
        membership: 'super',
        imgsrc: '/images/classes/vinyasa-yoga.webp',
      },
      {
        name: 'pilates',
        goal: 'tone your core',
        duration: '50 mins',
        membership: 'all inclusive',
        imgsrc: '/images/classes/pilates.webp',
      },
      {
        name: 'breathwork',
        goal: 'reduce stress',
        duration: '30 mins',
        membership: 'super',
        imgsrc: '/images/classes/breathwork.webp',
      },
    ],
  },
];


export const bonuses = [
  {
    title: 'anual club card in installments',
    img: '/images/bonuses/bonus1.webp',
    styles: '2lg:-rotate-y-12'
  },
  {
    title: 'logal system for regular customers',
    img: '/images/bonuses/bonus3.webp'
  },
  {
    title: '50% of trial personal training',
    img: '/images/bonuses/bonus2.webp',
    styles: '2lg:rotate-y-12'
  },
  {
    title: 'installment classes suscription',
    img: '/images/bonuses/bonus4.webp'
  }
]


export const memberships = [
  {
    id: 1,
    name: "Middle",
    price: 50,
    currency: "$",
    period: "month",
    features: [
      "Gym without trainer",
      "Unlimited access",
      "Access to all clubs"
    ]
  },
  {
    id: 2,
    name: "Super",
    price: 90,
    currency: "$",
    period: "month",
    features: [
      "Gym with trainer",
      "Unlimited access",
      "Access to all clubs",
      "Training for some classes"
    ]
  },
  {
    id: 3,
    name: "All Inclusive",
    price: 120,
    currency: "$",
    period: "month",
    features: [
      "Gym with trainer",
      "Unlimited access",
      "Access to all clubs",
      "Training for all classes"
    ]
  },
  {
    id: 4,
    name: "Exclusive",
    price: 150,
    currency: "$",
    period: "month",
    features: [
      "Gym with trainer",
      "Unlimited access",
      "Access to all clubs",
      "Training for all classes",
      "Exclusive studios"
    ]
  }
];
