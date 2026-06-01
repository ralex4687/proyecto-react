import React from 'react'
import {Card, Button} from 'react-bootstrap'

const Item = ({ producto }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.img} />
      <Card.Body>
        <Card.Title>{producto.name}</Card.Title>
        <Card.Text>
          {producto.precio}
        </Card.Text>
        <Button variant="primary">Ver detalle</Button>
      </Card.Body>
    </Card>
  )
}

export default Item