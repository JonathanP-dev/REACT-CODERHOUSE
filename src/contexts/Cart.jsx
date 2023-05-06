import { createContext, useState } from 'react';

export const CartContext = createContext()

export function CartProvider ( { children } ) {
    const [totalCompras, setTotalCompras] = useState(0)
    return (
        <CartContext.Provider value={{
            totalCompras,
            setTotalCompras
        }}>
            {children}
        </CartContext.Provider>
    )
}