import {useState} from "react"
import RecipeList from '../components/RecipeList'
import CakeForm from "../components/CakeForm"
import Search from "../components/Search"

const RecipeContainer = () => {

    const [cakes, setCakes] = useState([
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5
        }
    ])

    const addNewRecipe = newRecipe => {
        const updatedCakes = [...cakes, newRecipe];
        setCakes(updatedCakes);
    }

    const searchRecipes = (recipeName) => {
        return cakes.filter(cake=>recipeName===cake.cakeName);
    
    }

    return (
        <>
            <Search onSubmit={searchRecipes} />
            <RecipeList cakes={cakes} />
            <CakeForm onSubmit={addNewRecipe} />
            
        </>
    );
}

export default RecipeContainer;