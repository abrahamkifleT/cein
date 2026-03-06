const customerGallery = [
    {
        _id: "gallery1",
        userId: "user1",
        productId: "prod1", // Men's Winter Hoodie
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7", // Candid hoodie shot
        caption: "Loving this thick fleece hoodie! Perfect for the freezing mornings.",
        isApproved: true,
        createdAt: new Date("2026-02-10"),
        updatedAt: new Date("2026-02-10")
    },
    {
        _id: "gallery2",
        userId: "user2",
        productId: "prod4", // Women's Elegant Dress
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b", // Elegant dress street fashion
        caption: "Wore this to a winter dinner party. So comfortable yet elegant!",
        isApproved: true,
        createdAt: new Date("2026-02-14"),
        updatedAt: new Date("2026-02-15")
    },
    {
        _id: "gallery3",
        userId: "user3",
        productId: "prod5", // Street Style Oversized Hoodie
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f", // Streetwear urban shot
        caption: "The oversized fit is exactly what I was looking for. Streetwear essential.",
        isApproved: true,
        createdAt: new Date("2026-02-28"),
        updatedAt: new Date("2026-02-28")
    },
    {
        _id: "gallery4",
        userId: "user4",
        productId: "prod8", // Women's Soft Cardigan
        image: "https://images.unsplash.com/photo-1434389678232-0545fca91322", // Soft cardigan lifestyle shot
        caption: "So soft and perfect for layering over my casual outfits.",
        isApproved: true,
        createdAt: new Date("2026-03-01"),
        updatedAt: new Date("2026-03-02")
    },
    {
        _id: "gallery5",
        userId: "user5",
        productId: "prod6", // Premium Leather Jacket
        image: "https://images.unsplash.com/photo-1520975954732-57dd22299614", // Leather jacket fashion shot
        caption: "This leather jacket is incredible quality. It instantly elevates any look.",
        isApproved: false, // Pending approval example
        createdAt: new Date("2026-03-05"),
        updatedAt: new Date("2026-03-05")
    }
];

export default customerGallery;
