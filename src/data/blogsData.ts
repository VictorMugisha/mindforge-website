export interface Blog {
  id: number;
  title: string;
  date: string;
  author: string;
  summary: string;
  imageUrl: string;
  // Additional properties for the detailed BlogPost page
  content?: string; // HTML content for the full blog post
  externalLinks?: {
    label: string;
    url: string;
  }[];
  readTime?: string;
  tags?: string[];
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Uncovering the Depths of Corruption in Tanzania",
    date: "February 20, 2025",
    author: "Jane Doe",
    summary:
      "An in-depth analysis of the pervasive corruption affecting various sectors in Tanzania and the ongoing efforts to combat it.",
    imageUrl: "/blogs/tanzania-corruption.jpg",
    readTime: "6 min read",
    tags: ["corruption", "Tanzania", "investigation"],
    content: `
      <p>This blog post delves into the intricate networks of corruption in Tanzania. Through in-depth research and exclusive interviews, we expose how public funds are misused and the impact on local communities.</p>
      <p>The investigation reveals connections between influential figures and shadowy entities, prompting widespread calls for reform.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula quam vel quam porttitor ac iaculis elit pulvinar. Proin gravida arcu nisl, a dignissim mauris placerat in. Curabitur imperdiet felis at est posuere bibendum.</p>
      <img src="/blogs/tanzania-detail.jpg" alt="Investigative scene" class="w-full h-auto my-4 rounded-md" />
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      <p>More details emerge as we dive deeper into the labyrinth of official and unofficial financial flows that maintain the status quo.</p>
    `,
    externalLinks: [
      {
        label: "Read more on BBC",
        url: "https://www.bbc.com/news/world-africa",
      },
    ],
  },
  {
    id: 2,
    title: "The Profiteers: Following the Money in South Sudan",
    date: "March 5, 2025",
    author: "John Smith",
    summary:
      "Investigating the flow of funds from South Sudan’s government coffers to private accounts, fueling conflict and corruption.",
    imageUrl: "/blogs/south-sudan-profiteers.jpg",
    readTime: "5 min read",
    tags: ["South Sudan", "finance", "investigation"],
    content: `
      <p>This article uncovers the financial maneuvers that funnel money from South Sudan's government to private accounts, undermining the nation's stability.</p>
      <p>Documented evidence and expert analysis outline the steps taken by those profiting from the turmoil.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non massa sit amet nibh viverra malesuada. Cras quis nulla sed urna placerat sollicitudin.</p>
      <img src="/blogs/southsudan-extra.jpg" alt="Financial charts" class="w-full h-auto my-4 rounded-md" />
      <p>Further insights reveal complex layers of economic manipulation and international financial irregularities that have raised global concerns.</p>
    `,
    externalLinks: [
      {
        label: "Detailed report by Reuters",
        url: "https://www.reuters.com/",
      },
    ],
  },
  {
    id: 3,
    title: "Pandora Papers: Unmasking Offshore Assets in Kenya",
    date: "March 15, 2025",
    author: "Emily Johnson",
    summary:
      "Revealing the offshore companies linked to Kenyan political figures and the implications for the nation’s fight against corruption.",
    imageUrl: "/blogs/pandora-papers-kenya.jpg",
    readTime: "7 min read",
    tags: ["Pandora Papers", "Kenya", "finance"],
    content: `
      <p>An investigative report shedding light on offshore assets held by prominent Kenyan figures.</p>
      <p>Discover how these hidden accounts play a role in the ongoing corruption and what measures are being implemented to curb such practices.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel mauris quam. In hac habitasse platea dictumst. Mauris nec ante vel arcu efficitur commodo.</p>
      <img src="/blogs/kenya-offshore.jpg" alt="Offshore assets diagram" class="w-full h-auto my-4 rounded-md" />
      <p>Subsequent research and expert testimonies have expanded the understanding of this global financial phenomenon.</p>
    `,
    externalLinks: [
      {
        label: "Full analysis on The Guardian",
        url: "https://www.theguardian.com",
      },
    ],
  },
  {
    id: 4,
    title: "Fertile Deception: The Fake Fertilizer Scandal in Kenya",
    date: "April 10, 2025",
    author: "Michael Lee",
    summary:
      "Exposing the distribution of counterfeit fertilizer to Kenyan farmers and the subsequent government response.",
    imageUrl: "/blogs/fake-fertilizer-kenya.jpg",
    readTime: "4 min read",
    tags: ["Kenya", "scandal", "agriculture"],
    content: `
      <p>This post explores the distribution of counterfeit fertilizer in Kenya, exposing the scandal that affected thousands of farmers.</p>
      <p>We break down how the scam unfolded and its repercussions on the agricultural sector.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet orci eu arcu bibendum ultrices. Integer vel metus nec elit dictum imperdiet.</p>
      <img src="/blogs/fertilizer-extra.jpg" alt="Fake fertilizer bags" class="w-full h-auto my-4 rounded-md" />
      <p>The fallout has spurred regulatory changes and increased scrutiny on supply chains within the agriculture industry.</p>
    `,
    externalLinks: [
      {
        label: "In-depth analysis on Al Jazeera",
        url: "https://www.aljazeera.com",
      },
    ],
  },
  {
    id: 5,
    title: "The Legacy of Floribert Bwana Chui: A Martyr Against Corruption",
    date: "April 25, 2025",
    author: "Sophia Martinez",
    summary:
      "Honoring the life and legacy of Floribert Bwana Chui, who was martyred for his stand against corruption in Congo.",
    imageUrl: "/blogs/floribert-bwana-chui.jpeg",
    readTime: "5 min read",
    tags: ["Congo", "legacy", "corruption"],
    content: `
      <p>This tribute honors Floribert Bwana Chui, whose brave stance against corruption in Congo has inspired many.</p>
      <p>Through his legacy, we reflect on the ongoing fight for justice and accountability in the region.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Duis nec lacus vel ligula mattis fringilla non eu risus.</p>
      <img src="/blogs/congo-legacy.jpg" alt="Memorial scene" class="w-full h-auto my-4 rounded-md" />
      <p>Further narratives and archival material provide deeper insights into his contributions and the lasting impact of his actions.</p>
    `,
    externalLinks: [
      {
        label: "Read more on CNN",
        url: "https://www.cnn.com",
      },
    ],
  },
];
