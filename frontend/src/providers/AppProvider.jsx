import React from 'react'
import { ProductContextProvider } from '../context/product.context'
import { CollectionContextProvider } from '../context/collection.context'

const AppProvider = ({ children }) => {
    return (
        <ProductContextProvider>
            <CollectionContextProvider>
                {children}
            </CollectionContextProvider>
        </ProductContextProvider>
    )
}

export default AppProvider