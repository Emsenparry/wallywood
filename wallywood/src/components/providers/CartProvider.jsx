import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from './AuthProvider'

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [ cartData, setCartData ] = useState([])
    const { loginData } = useAuth()

    useEffect(() => {
        const getData = async () => {
            const options = {
                headers: {
                    Authorization: `Bearer ${loginData}`
                }
            }

            const endpoint = `http://localhost:4000/cart`
            try {
            if(loginData && loginData.access_token) {
                const result = await axios.get(endpoint, options)
                setCartData(result.data)
            }
            } catch(err) {
            console.error(`Fejl i kald af cart: ${err}`)
            }
        }
        getData()
        
    }, [children, loginData])

    return(
        <CartContext.Provider value={{ cartData, setCartData }}>
            {children}
        </CartContext.Provider>
    );
}

const useCartData = () => useContext(CartContext)

export { CartProvider, useCartData }