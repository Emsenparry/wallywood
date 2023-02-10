import { CartIconStyle } from "./CartIcon.style";
import { ReactComponent as CartIconSVG } from "../../assets/images/svg/icon_cart.svg";
import { useCartData } from "../../components/providers/CartProvider";

const CartIcon = () => {
    const { cartData } = useCartData() 

    return(
        <CartIconStyle>
            <CartIconSVG />
            <p>Du har {cartData.length} varer i kurven</p>
        </CartIconStyle>
    )
}

export default CartIcon;