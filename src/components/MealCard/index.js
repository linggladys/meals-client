import React from 'react'
import {Card, Button} from 'react-bootstrap';
import MealModal from '../MealModal';

function AppMealCard({ title, image }) {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          {/* <Button variant="primary">View the recipe 🍰</Button> */}
          <MealModal title={title}/>
        </Card.Body>
      </Card>
    )
}

export default AppMealCard
