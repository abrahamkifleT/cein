const products = [
  {
    _id: "prod1",
    name: "Men's Winter Hoodie",
    description: "Thick fleece hoodie perfect for cold weather.",
    price: 85,
    salePrice: 70,
    categoryId: "cat3", // Men > Hoodies
    collectionIds: ["col1", "col2"], // Winter + Trending
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    ],
    isNew: true,
    isTrending: true,
    isBestSeller: false,
    isFavorite: true,
  },
  {
    _id: "prod2",
    name: "Men's Classic Jacket",
    description: "Stylish and warm winter jacket.",
    price: 150,
    salePrice: null,
    categoryId: "cat4", // Men > Jackets
    collectionIds: ["col1"],
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
    ],
    isNew: false,
    isTrending: false,
    isBestSeller: true,
    isFavorite: true,
  },
  {
    _id: "prod3",
    name: "Women's Cozy Sweater",
    description: "Soft knit sweater for everyday comfort.",
    price: 65,
    salePrice: 55,
    categoryId: "cat6", // Women > Sweaters
    collectionIds: ["col1", "col2"],
    images: [
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e"
    ],
    isNew: true,
    isTrending: true,
    isBestSeller: true,
    isFavorite: true,
  },
  {
    _id: "prod4",
    name: "Women's Elegant Dress",
    description: "Perfect dress for winter evenings.",
    price: 120,
    salePrice: 95,
    categoryId: "cat5", // Women > Dresses
    collectionIds: ["col3"],
    images: [
      "https://images.unsplash.com/photo-1495121605193-b116b5b09a7e"
    ],
    isNew: false,
    isTrending: true,
    isBestSeller: false,
    isFavorite: false,
  },
  {
    _id: "prod5",
    name: "Street Style Oversized Hoodie",
    description: "Modern oversized hoodie with urban vibe.",
    price: 95,
    salePrice: null,
    categoryId: "cat3",
    collectionIds: ["col3", "col2"],
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
    ],
    isNew: true,
    isTrending: true,
    isBestSeller: false,
    isFavorite: false,
  },
  {
    _id: "prod6",
    name: "Premium Leather Jacket",
    description: "High quality leather jacket for bold looks.",
    price: 250,
    salePrice: 220,
    categoryId: "cat4",
    collectionIds: ["col2"],
    images: [
      "https://images.unsplash.com/photo-1520974735194-9b3f6d39f2b0"
    ],
    isNew: false,
    isTrending: true,
    isBestSeller: true,
    isFavorite: false,
  },
  {
    _id: "prod7",
    name: "Casual Knit Dress",
    description: "Comfortable knit dress for daily wear.",
    price: 90,
    salePrice: null,
    categoryId: "cat5",
    collectionIds: ["col1"],
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552"
    ],
    isNew: false,
    isTrending: false,
    isBestSeller: true,
    isFavorite: true,
  },
  {
    _id: "prod8",
    name: "Women's Soft Cardigan",
    description: "Lightweight cardigan for layering.",
    price: 70,
    salePrice: 60,
    categoryId: "cat6",
    collectionIds: ["col1", "col3"],
    images: [
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb"
    ],
    isNew: true,
    isTrending: false,
    isBestSeller: false,
    isFavorite: true,
  },
];

export default products;