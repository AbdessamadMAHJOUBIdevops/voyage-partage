export interface Point {
  type: string;
  name: string;
  coordinates: [number, number];
  arrivalTime: string;
  departureTime: string;
  photos: string[];
  description: string;
}

export interface Day {
  date: string;
  transportMode: 'walking' | 'driving';
  points: Point[];
}

export interface Voyage {
  id: string;
  title: string;
  days: Day[];
}
