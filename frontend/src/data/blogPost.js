const blogPosts = [
    {
        _id: "blog1",
        title: "5 Essential Winter Fashion Trends for 2026",
        slug: "5-essential-winter-fashion-trends-for-2026",
        content: `
      <p>As the temperature drops, it's time to elevate your wardrobe with the latest winter fashion trends. This season is all about blending comfort with high-end style.</p>
      <h2>1. Oversized Silhouettes</h2>
      <p>Oversized hoodies and coats continue to dominate the streets. The key is to balance the volume with more fitted pieces or structured accessories.</p>
      <h2>2. Sustainable Fabrics</h2>
      <p>More than ever, sleepers are looking for organic cotton and recycled materials. Our latest collection focuses heavily on these eco-friendly options.</p>
      <p>Stay warm and stay stylish this season with our curated picks.</p>
    `,
        excerpt: "Discover the top winter fashion trends of 2026, from oversized hoodies to sustainable knitwear.",
        authorId: "user1",
        category: "Fashion",
        tags: ["Winter", "Trends", "Style Guide"],
        featuredImage: "/blog/winter-fashion-trends.png",
        relatedProducts: ["prod1", "prod5"], // Men's Winter Hoodie, Street Style Oversized Hoodie
        isPublished: true,
        publishedAt: new Date("2026-01-15"),
        views: 1240,
        createdAt: new Date("2026-01-14"),
        updatedAt: new Date("2026-01-15")
    },
    {
        _id: "blog2",
        title: "The Ultimate Guide to Sustainable Clothing",
        slug: "the-ultimate-guide-to-sustainable-clothing",
        content: `
      <p>Sustainability is no longer just a buzzword; it's a necessity. In this guide, we explore how you can build a more eco-friendly wardrobe without sacrificing style.</p>
      <h2>What Makes Clothing Sustainable?</h2>
      <p>From the sourcing of raw materials like organic linen to the ethical treatment of workers, many factors contribute to a garment's sustainability footprint.</p>
      <p>By choosing high-quality pieces that last longer, you're already making a huge difference.</p>
    `,
        excerpt: "Learn how to build an eco-friendly wardrobe with our comprehensive guide to sustainable fashion.",
        authorId: "user1",
        category: "Sustainability",
        tags: ["Eco-friendly", "Linen", "Ethical Fashion"],
        featuredImage: "/blog/sustainable-clothing.png",
        relatedProducts: ["prod3", "prod8"], // Women's Cozy Sweater, Women's Soft Cardigan
        isPublished: true,
        publishedAt: new Date("2026-02-01"),
        views: 850,
        createdAt: new Date("2026-01-30"),
        updatedAt: new Date("2026-02-01")
    },
    {
        _id: "blog3",
        title: "Mastering the Streetwear Look this Spring",
        slug: "mastering-the-streetwear-look-this-spring",
        content: `
      <p>Streetwear is evolving. This spring, we're seeing a shift towards more vibrant colors and tech-wear influences mixed with classic urban staples.</p>
      <h2>Key Items to Own</h2>
      <ul>
        <li>Graphic Oversized Tees</li>
        <li>Utility Cargo Pants</li>
        <li>Statement Sneakers</li>
      </ul>
      <p>The goal is to look effortless while making a statement.</p>
    `,
        excerpt: "Get ready for spring with our guide on how to master the modern streetwear aesthetic.",
        authorId: "user2",
        category: "Streetwear",
        tags: ["Spring", "Streetwear", "Urban Fashion"],
        featuredImage: "/blog/streetwear-style-guide.png",
        relatedProducts: ["prod5", "prod6"], // Street Style Oversized Hoodie, Premium Leather Jacket
        isPublished: true,
        publishedAt: new Date("2026-02-20"),
        views: 2100,
        createdAt: new Date("2026-02-18"),
        updatedAt: new Date("2026-02-20")
    },
    {
        _id: "blog4",
        title: "Why Every Wardrobe Needs a Classic Leather Jacket",
        slug: "why-every-wardrobe-needs-a-classic-leather-jacket",
        content: `
      <p>If there's one piece of clothing that never goes out of style, it's the leather jacket. It's versatile, durable, and adds an instant edge to any outfit.</p>
      <h2>How to Style It</h2>
      <p>Pair it with jeans for a classic rebel look, or throw it over a dress to balance femininity with toughness.</p>
      <p>Invest in quality, and it will last you a lifetime.</p>
    `,
        excerpt: "Explore the timeless appeal of the leather jacket and learn how to style it for any occasion.",
        authorId: "user2",
        category: "Style",
        tags: ["Leather Jacket", "Classics", "Must-haves"],
        featuredImage: "/blog/winter-wardrobe-essentials.png",
        relatedProducts: ["prod2", "prod6"], // Men's Classic Jacket, Premium Leather Jacket
        isPublished: true,
        publishedAt: new Date("2026-03-05"),
        views: 450,
        createdAt: new Date("2026-03-04"),
        updatedAt: new Date("2026-03-05")
    }
];

export default blogPosts;
