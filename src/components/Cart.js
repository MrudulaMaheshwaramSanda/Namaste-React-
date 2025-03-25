import { ItemList } from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store)=> store.cart.items); //to use the store
    const dispatch = useDispatch(); //to update the store

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return( 
    <div className="font-bold text-center m-4 p-4">
        <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-black text-white rounded-lg hover:cursor-pointer" onClick = {handleClearCart}
            >Clear Cart</button>
            {(cartItems.length === 0) && <h1>Your cart is Empty</h1>}
            <ItemList items={cartItems}/>
        </div>
    </div>
    )
};

export default Cart;