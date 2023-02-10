import { AddToCartButtonStyle } from "./AddToCartButton.style"
import { useAuth } from '../../components/providers/AuthProvider'
import axios from "axios"
import { useCartData } from "../../components/providers/CartProvider"

const AddToCartButton = props => {
    const { loginData } = useAuth()
    const { cartData, setCartData } = useCartData()

    const submitToCart = async () => {
        console.log(cartData)
        const options = {
            headers: {
                Authorization: `Bearer ${loginData.access_token}`
            }
        }

        const formData = new URLSearchParams()
        formData.append('poster_id', props.id)
        formData.append('quantity', 1)
        const endpoint = `http://localhost:4000/cart`
        const result = await axios.post(endpoint, formData, options)
        if(result.data)  {
            const newCartData = await axios.get(endpoint, options)
            setCartData(newCartData.data)
        }
        console.log(result)
    }

    return cartData.find(x => x.poster_id === props.id) ? 
    (
        <>Dette produkt ligger allerede i kurven</>
    ) :
    (
        <AddToCartButtonStyle onClick={submitToCart}>
            {props.children}
        </AddToCartButtonStyle>
    );
}
export default AddToCartButton