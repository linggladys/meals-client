import React, { useState, useContext } from 'react';
import "./styles.css"
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { MyContext } from '../../context';
import axios from 'axios';

function AppJumbotron() {

  
 const [searchInput, setsearchInput] = useState("");
 const {setProducts} = useContext (MyContext);



  function handleSearch(){
      const apiKey = '5b7352b1e88c4266b41e95b2442f8405';
      axios.get (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchInput}`)
      .then (({data}) => setProducts(data.results))

  }
    return (
        <div className="app-jumbotron">
          <h1 className="text-light">Meals Meals Meals</h1>
          <div className="button-input">
        <InputGroup className="mb-3">
        <FormControl
      placeholder="Search the recipe!"
      aria-label="Meal Search Input"
      aria-describedby="meal-search-btn"
      value ={searchInput}
      // take the function from value
      onChange={(e) => setsearchInput (e.target.value)}
    />
    <Button variant="secondary" id="meal-search-btn" onClick={handleSearch}>
        Search
    </Button>
  </InputGroup>
  </div>
  </div>
     
    )
}

export default AppJumbotron
