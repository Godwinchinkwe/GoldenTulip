
import img1 from '../../Assets/Deluxe.jpg';
import img2 from '../../Assets/Outside.jpg';
import img3 from '../../Assets/Lounge Bar.jpg';

export const posts = [
  {
    id: 1,
    title: "How to Make Your Hotel Stay Perfect",
    slug: "how-to-make-your-hotel-stay-perfect",
    date: "2025-11-15",
    excerpt:
      "Simple tips to elevate your hotel stay—packing, check-in hacks, and room setup ideas.",
    content: `
<p>Make the most of your hotel stay with these practical tips. Start by packing smart—bring a universal adapter and a small laundry bag. Request early check-in if your flight arrives early, and consider room location (higher floors are quieter).</p>

<p>On arrival, inspect the room for cleanliness, check Wi-Fi access, and ask for extra towels or pillows if needed. Use the mini-fridge for snacks and avoid noisy areas near elevators. Finally, explore concierge services — they often know the best local spots.</p>
<p>Make the most of your hotel stay with these practical tips. Start by packing smart—bring a universal adapter and a small laundry bag. Request early check-in if your flight arrives early, and consider room location (higher floors are quieter).</p>

<p>On arrival, inspect the room for cleanliness, check Wi-Fi access, and ask for extra towels or pillows if needed. Use the mini-fridge for snacks and avoid noisy areas near elevators. Finally, explore concierge services — they often know the best local spots.</p>
    `,
    image: img1,
  },
    {
    id: 2,
    title: "How to Make Your Hotel Stay Perfect",
    slug: "how-to-make-your-hotel-stay-perfect",
    date: "2025-11-15",
    excerpt:
      "Simple tips to elevate your hotel stay—packing, check-in hacks, and room setup ideas.",
    content: `
<p>Make the most of your hotel stay with these practical tips. Start by packing smart—bring a universal adapter and a small laundry bag. Request early check-in if your flight arrives early, and consider room location (higher floors are quieter).</p>

<p>On arrival, inspect the room for cleanliness, check Wi-Fi access, and ask for extra towels or pillows if needed. Use the mini-fridge for snacks and avoid noisy areas near elevators. Finally, explore concierge services — they often know the best local spots.</p>
    `,
    image: img1,
  },

  {
    id: 3,
    title: "Top Local Attractions Near Our Hotel",
    slug: "top-local-attractions-near-our-hotel",
    date: "2025-10-28",
    excerpt:
      "A curated list of must-see places, walking tours and hidden gems within 10 minutes of the hotel.",
    content: `
<p>Discover cultural landmarks, markets, and scenic viewpoints close to the hotel. Start your morning with a guided walking tour through the old quarter, visit the weekend craft market for unique souvenirs, and enjoy sunset at the riverside promenade.</p>

<p>Our concierge can arrange tickets for museums and recommend less crowded times to visit popular attractions.</p>
    `,
    image: img2,
  },
  {
    id: 4,
    title: "Top Local Attractions Near Our Hotel",
    slug: "top-local-attractions-near-our-hotel",
    date: "2025-10-28",
    excerpt:
      "A curated list of must-see places, walking tours and hidden gems within 10 minutes of the hotel.",
    content: `
<p>Discover cultural landmarks, markets, and scenic viewpoints close to the hotel. Start your morning with a guided walking tour through the old quarter, visit the weekend craft market for unique souvenirs, and enjoy sunset at the riverside promenade.</p>

<p>Our concierge can arrange tickets for museums and recommend less crowded times to visit popular attractions.</p>
    `,
    image: img2,
  },

  {
    id: 5,
    title: "Dining Experience: What to Expect from Our Restaurant",
    slug: "dining-experience-what-to-expect-from-our-restaurant",
    date: "2025-09-02",
    excerpt:
      "An inside look at the dining concept, signature dishes, and seasonal menu highlights.",
    content: `
<p>Our restaurant blends local ingredients with contemporary technique. Expect fresh seafood classics, signature grilled entrees, and farm-to-table salads. We rotate our menu seasonally to highlight the best produce.</p>

<p>Book a table for our weekend chef's tasting to experience a 5-course menu with wine pairing.</p>
    `,
    image: img3,
  },
];

// helper to retrieve post by slug
export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}
