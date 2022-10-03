import { useState } from "react";

const CakeForm = ({onSubmit}) => {
    const [name,setName] = useState("")
    const [ingredients,setIngredients] = useState("")
    const [rating,setRating] = useState(0)

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleIngredientsChange = (event) => {
        const arr = event.target.value.split(",")
        setIngredients(arr)
    }
    const handleRatingChange = (event) => {
        setRating(event.target.value)
    }

    const handleFormSubmission = (event) => {
        event.preventDefault();
        const newCake ={
            cakeName: name,
            ingredients: ingredients,
            rating: +rating
        }
        setName("")
        setIngredients("")
        setRating(0)
        onSubmit(newCake)
    }

    return (
        <form onSubmit={handleFormSubmission}>
            <label htmlFor="name">Cake Name:</label>
            <input 
            type="text" 
            id="name"
            onChange={handleNameChange}
            value={name}
             />
            <label htmlFor="ingredients">Ingredients:</label>
            <textarea cols="30" rows="1" id="ingredients" onChange={handleIngredientsChange} value={ingredients}></textarea>
            <label htmlFor="rating">Rating:</label>
            <input 
            type="number" 
            id="rating" 
            min={1} max={5}
            onChange={handleRatingChange}
            value={rating}
            />
            <input type="submit"/>
        </form>
    )

}

export default CakeForm;