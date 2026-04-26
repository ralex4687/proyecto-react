import { BsCart4 } from "react-icons/bs";
const CartWidgetRI = () => {
    return (
        <div>
            <BsCart4 fontSize={'1.3rem'} />
            <Badge bg="success">{props.compras}</Badge>
        </div>
    )
}

export default CartWidgetRI