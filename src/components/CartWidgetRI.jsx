import { BsCart4 } from "react-icons/bs";
import { Badge } from 'react-bootstrap'; 

const CartWidgetRI = (props) => {
    console.log('CartWidgetRI');
    return (
        <div>
            <BsCart4 fontSize={'1.3rem'} />
            <Badge bg="success">{props.compras}</Badge>
        </div>
    )
}

export default CartWidgetRI