import React from 'react'
import { ProductContextProvider } from '../context/product.context'
import { CollectionContextProvider } from '../context/collection.context'
import { TestimonialProvider } from '../context/testimonials.context'

const AppProvider = ({ children }) => {
    return (
        <ProductContextProvider>
            <CollectionContextProvider>
                <TestimonialProvider>
                    {children}
                </TestimonialProvider>
            </CollectionContextProvider>
        </ProductContextProvider>
    )
}

export default AppProvider