const CartWidget = (props) => {
    return (
        <div>
            <span>🛒</span>
            <span style={{ color: "red", fontWeight: "bold" }}>{props.itemCount}</span>
        </div>
    )
}

export default CartWidget