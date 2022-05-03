//import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useCart } from "../../Providers/Cart";
//import { addCartThunk } from "../../store/modules/cart/thunks";
import { Li } from "./style"

const Card = ({product}) =>{

    //const dispatch = useDispatch()
    //const {cart} = useSelector(state => state)
    const { cart, addCart} = useCart()

    const {id,src,name,price} = product
    
    const handleClick = () =>{
        const igual = cart.filter(product => product.id === id)
        if(!igual.length){
            addCart(product)
            toast.success("Produto adicionado ao carrinho")
        }else{
            toast.error("Produto já no carrinho")
        }
    }

    return(
        <Li key={id} id={id}>
            <figure>
            <img src={src} alt={name}/>
            </figure>
            <div>
                <p>{name}</p>
                <span>R$ {price.toFixed(2)}</span>
            </div>
            <button onClick={handleClick}>Adicionar ao carrinho</button>
        </Li>
        
    )
}

export default Card