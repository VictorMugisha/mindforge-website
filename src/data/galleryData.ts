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
  {
    id: 5,
    src: "/gallery/gallery-pic-1.jpg",
    alt: "Happy Africans - A society we deserve",
  },
  { id: 6, src: "/gallery/gallery-pic-2.jpg", alt: "Boaz Doing Umuganda" },
  {
    id: 7,
    src: "/gallery/gallery-pic-3.jpg",
    alt: "Our visit to Ministry of Foreign Affairs and International Cooperation",
  },
];
