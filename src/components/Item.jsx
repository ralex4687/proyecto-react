import React from 'react'

const Item = ({ producto }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.Img} />
      <Card.Body>
        <Card.Title>{producto.name}</Card.Title>
        <Card.Text>
          {producto.precio}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default Item