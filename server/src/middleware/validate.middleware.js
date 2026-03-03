import { z } from "zod";

/**
 * validate(schema) — middleware factory
 * Validates req.body against a Zod schema.
 * Returns 400 with a clear list of field errors on failure.
 */
export const validate = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
        const errors = result.error.errors.map((e) => ({
            field: e.path.join("."),
            message: e.message,
        }));
        return res.status(400).json({ message: "Validation failed", errors });
    }
    req.body = result.data; // replace body with safe, parsed data
    next();
};

// ─── Auth ─────────────────────────────────────────────────────────────────────

export const registerSchema = z.object({
    name: z.string({ required_error: "Name is required" }).min(2, "Name must be at least 2 characters"),
    email: z.string({ required_error: "Email is required" }).email("Invalid email format"),
    password: z.string({ required_error: "Password is required" }).min(8, "Password must be at least 8 characters"),
});

export const loginSchema = z.object({
    email: z.string({ required_error: "Email is required" }).email("Invalid email format"),
    password: z.string({ required_error: "Password is required" }).min(1, "Password is required"),
});

// ─── User ─────────────────────────────────────────────────────────────────────

export const updateUserSchema = z.object({
    name: z.string().min(2).optional(),
    email: z.string().email().optional(),
    password: z.string().min(8).optional(),
}).strict();

// ─── Product ──────────────────────────────────────────────────────────────────

export const createProductSchema = z.object({
    name: z.string({ required_error: "Product name is required" }).min(2),
    description: z.string({ required_error: "Description is required" }).min(10),
    price: z.coerce.number({ required_error: "Price is required" }).min(0, "Price cannot be negative"),
    salePrice: z.coerce.number().min(0).nullable().optional(),
    categoryId: z.string({ required_error: "Category ID is required" }).length(24, "Invalid category ID"),
    collectionIds: z.array(z.string().length(24, "Invalid collection ID")).optional(),
    tags: z.array(z.string()).optional(),
    isNew: z.coerce.boolean().optional(),
    isTrending: z.coerce.boolean().optional(),
    isBestSeller: z.coerce.boolean().optional(),
});

export const updateProductSchema = createProductSchema.partial();

// ─── Category ─────────────────────────────────────────────────────────────────

export const createCategorySchema = z.object({
    name: z.string({ required_error: "Category name is required" }).min(2),
    slug: z.string({ required_error: "Slug is required" })
        .min(2)
        .regex(/^[a-z0-9-]+$/, "Slug must be lowercase letters, numbers, and hyphens"),
    parentId: z.string().length(24, "Invalid parent ID").nullable().optional(),
});

export const updateCategorySchema = createCategorySchema.partial();

// ─── Collection ───────────────────────────────────────────────────────────────

export const createCollectionSchema = z.object({
    name: z.string({ required_error: "Name is required" }).min(2),
    slug: z.string({ required_error: "Slug is required" })
        .min(2)
        .regex(/^[a-z0-9-]+$/, "Slug must be lowercase letters, numbers, and hyphens"),
    description: z.string({ required_error: "Description is required" }).min(5),
    image: z.string({ required_error: "Image URL is required" }).url("Must be a valid URL"),
    type: z.enum(["featured", "seasonal", "custom"]).optional(),
    isActive: z.boolean().optional(),
});

export const updateCollectionSchema = createCollectionSchema.partial();

// ─── Variant ──────────────────────────────────────────────────────────────────

export const createVariantSchema = z.object({
    product: z.string({ required_error: "Product ID is required" }).length(24, "Invalid product ID"),
    color: z.string({ required_error: "Color is required" }).min(1),
    size: z.string({ required_error: "Size is required" }).min(1),
    price: z.coerce.number({ required_error: "Price is required" }).min(0, "Price cannot be negative"),
    stock: z.coerce.number({ required_error: "Stock is required" }).int().min(0, "Stock cannot be negative"),
    sku: z.string().optional(),
});

export const updateVariantSchema = createVariantSchema.partial();
