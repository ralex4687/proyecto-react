import{useState} from "react"


const Contador = (props) => {
    const [count, setCount] = useState(1);

    console.log('contador', count);

    const sumar = () => {
        setCount(count + 1);
    }

    const restar = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }
    console.log('Contador');
    

    return (
        <div>
            <button className="btn btn-danger" onClick={restar}>-</button>
            <span className="btn">{count}</span>
            <button className="btn btn-success" onClick={sumar}>+</button>
            <button className="btn btn-primary" onClick={() => setCount(1)}>Reset</button>
        </div>
    )
}

export default Contador;