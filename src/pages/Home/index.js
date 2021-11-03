import React from 'react'
import { useEffect, useContext } from 'react';
import axios from 'axios';
import AppJumbotron from '../../components/Jumbotron';
import AppMealsContainer from '../../components/MealsContainer';
import { MyContext } from '../../context';
import "./styles.css"


// use the state to store the data

function Home() {
    // useState returns an array
    const {products, setProducts} = useContext(MyContext);
    const apiKey = '5b7352b1e88c4266b41e95b2442f8405';
    useEffect(() => {
    axios.get (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=pizza`)
    .then(({data}) => setProducts(data.results))
    .catch((error) => console.log(error));
    }, [])

    return (
        <div>
                <AppJumbotron/>
                <AppMealsContainer products={products}/>
        </div>
    )
}

export default Home;
