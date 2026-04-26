const ItemListContainer = (props) => {
    console.log(props)
    const { saludo, itemsdisponibles } = props
    return (
        <div>
            <h1>{saludo}</h1>
            <h2>{itemsdisponibles}</h2>
        </div>
    )
}

export default ItemListContainer