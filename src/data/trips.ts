export const voyages = [
  {
    id: "paris-2025",
    title: "Week-end à Paris",
    description: "Découverte des monuments parisiens",
    coverImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",
    days: [
      {
        day: 1,
        date: "2025-02-09",
        transport: "foot" as const,
        points: [
          {
            id: 1,
            name: "Tour Eiffel",
            position: [48.8584, 2.2945],
            arrival: "09:00",
            departure: "11:00",
            description: "Symbole emblématique de Paris",
            photos: [
              "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=600&q=80"
            ]
          },
          {
            id: 2,
            name: "Arc de Triomphe",
            position: [48.8738, 2.2950],
            arrival: "12:00",
            departure: "13:30",
            description: "Monument historique sur les Champs-Élysées",
            photos: [
              "https://images.unsplash.com/photo-1569959220744-ff553533f492?w=600&q=80"
            ]
          },
          {
            id: 3,
            name: "Musée du Louvre",
            position: [48.8606, 2.3376],
            arrival: "14:30",
            departure: "17:30",
            description: "Le plus grand musée d'art au monde",
            photos: [
              "https://images.unsplash.com/photo-1544413660-299165566b1d?w=600&q=80"
            ]
          }
        ]
      },
      {
        day: 2,
        date: "2025-02-10",
        transport: "driving" as const,
        points: [
          {
            id: 4,
            name: "Château de Versailles",
            position: [48.8048, 2.1203],
            arrival: "10:00",
            departure: "15:00",
            description: "Résidence royale historique",
            photos: [
              "https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=600&q=80"
            ]
          },
          {
            id: 5,
            name: "Sacré-Cœur",
            position: [48.8867, 2.3431],
            arrival: "16:00",
            departure: "18:00",
            description: "Basilique au sommet de Montmartre",
            photos: [
              "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=600&q=80"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "cote-azur-2025",
    title: "Escapade sur la Côte d'Azur",
    description: "Découverte de la French Riviera",
    coverImage: "https://images.unsplash.com/photo-1533757704860-9ed3d9d6b8ef?w=600&q=80",
    days: [
      {
        day: 1,
        date: "2025-07-15",
        transport: "foot" as const,
        points: [
          {
            id: 6,
            name: "Promenade des Anglais",
            position: [43.6952, 7.2632],
            arrival: "09:00",
            departure: "11:00",
            description: "Célèbre promenade de Nice",
            photos: [
              "https://images.unsplash.com/photo-1533760881669-80db4d7b341c?w=600&q=80"
            ]
          },
          {
            id: 7,
            name: "Vieux Nice",
            position: [43.6967, 7.2796],
            arrival: "11:30",
            departure: "14:30",
            description: "Quartier historique de Nice",
            photos: [
              "https://images.unsplash.com/photo-1558434392-15c0a33da163?w=600&q=80"
            ]
          }
        ]
      },
      {
        day: 2,
        date: "2025-07-16",
        transport: "driving" as const,
        points: [
          {
            id: 8,
            name: "Monaco",
            position: [43.7384, 7.4246],
            arrival: "10:00",
            departure: "14:00",
            description: "Principauté de Monaco",
            photos: [
              "https://images.unsplash.com/photo-1588526779929-d2d2e3ca4bc3?w=600&q=80"
            ]
          },
          {
            id: 9,
            name: "Antibes",
            position: [43.5808, 7.1283],
            arrival: "15:30",
            departure: "18:00",
            description: "Ville côtière historique",
            photos: [
              "https://images.unsplash.com/photo-1564506414752-a73e4972d830?w=600&q=80"
            ]
          }
        ]
      }
    ]
  }
];
