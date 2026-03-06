import React from 'react'
import { ProductContextProvider } from '../context/product.context'
import { CollectionContextProvider } from '../context/collection.context'
import { TestimonialProvider } from '../context/testimonials.context'
import { BlogPostProvider } from '../context/blogpost.context'
import { CustomerGalleryProvider } from '../context/customerGallery.context'

const AppProvider = ({ children }) => {
    return (
        <ProductContextProvider>
            <CollectionContextProvider>
                <TestimonialProvider>
                    <BlogPostProvider>
                        <CustomerGalleryProvider>
                            {children}
                        </CustomerGalleryProvider>
                    </BlogPostProvider>
                </TestimonialProvider>
            </CollectionContextProvider>
        </ProductContextProvider>
    )
}

export default AppProvider