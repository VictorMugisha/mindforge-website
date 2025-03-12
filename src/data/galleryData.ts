export interface Image {
  id: number;
  src: string;
  alt: string;
}

export const images: Image[] = [
  { id: 1, src: "/challenge-2.jpg", alt: "Challenge 2 - The Voice of Massai" },
  {
    id: 2,
    src: "/challenge-3.jpeg",
    alt: "Challenge 3 - Umuganda with Mayor of Kigali City",
  },
  { id: 3, src: "/mindforge-team.jpg", alt: "Mindforge Team" },
  { id: 4, src: "/challenge-4.jpg", alt: "Challenge 4 - A Visit to Minaffet" },
];
