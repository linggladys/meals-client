import React from 'react'
import AppMealCard from '../MealCard'
import './styles.css'
function AppMealsContainer({ products }) {
    return (
       <div className="meals-container">
           {products.map ((product =>
            <AppMealCard key={product.id} {...product}/>
            ))}
       </div>
    )
}

export default AppMealsContainer
