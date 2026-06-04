import { useState, useEffect } from "react"
import { getProductos } from "../mock/asyncData"
import ItemList from "./ItemList"
import ComponentFetch from "./ComponentFetch"

const ItemListContainer = (props) => {
    const { saludo, itemsdisponibles } = props
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProductos()
            .then((res) => setProductos(res))
            .catch((error) => {
                console.error(error)
            }) 
    }, []) 
    console.log(productos)
    console.log('ItemListContainer')   

    return (
        <div>
            <h1>{saludo}</h1>
            <h2>{itemsdisponibles}</h2>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer