const categories = [
  // Parent Categories
  {
    _id: "cat1",
    name: "Men",
    slug: "men",
    parentId: null,
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
  {
    _id: "cat2",
    name: "Women",
    slug: "women",
    parentId: null,
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },

  // Sub Categories (Men)
  {
    _id: "cat3",
    name: "Hoodies",
    slug: "men-hoodies",
    parentId: "cat1",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
  {
    _id: "cat4",
    name: "Jackets",
    slug: "men-jackets",
    parentId: "cat1",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },

  // Sub Categories (Women)
  {
    _id: "cat5",
    name: "Dresses",
    slug: "women-dresses",
    parentId: "cat2",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
  {
    _id: "cat6",
    name: "Sweaters",
    slug: "women-sweaters",
    parentId: "cat2",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
];

export default categories;