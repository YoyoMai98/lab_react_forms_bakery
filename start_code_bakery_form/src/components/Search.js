import { useState } from "react";
import Recipe from "./Recipe";

const Search = ({onSubmit}) => {

    const [name,setName] = useState("")
    const [searchedCake, setSearchedCake] = useState("")
    const [isSearched, setIsSearched] = useState(false)

    const handleNameChange=(event)=>{
        setName(event.target.value)
    }

    const handleSearchSubmission = (event) => {
        event.preventDefault();
        const cakeName = name

        if (cakeName!=="") {
            setIsSearched(true)
            setSearchedCake(onSubmit(cakeName)[0])
            setName("")
        }else{
            setIsSearched(false)
        }
    }

 
   

    return(
        <>
        <form onSubmit={handleSearchSubmission}>
            <label htmlFor="search-field">Search for a cake:</label>
            <input type="text" id="search-field" onChange={handleNameChange} value={name}/>
            <input type="submit" />
        </form>
        {isSearched ? <Recipe cakeName={searchedCake.cakeName} ingredients={searchedCake.ingredients} rating={searchedCake.rating}/> : (
            <div></div>
        )}
        </>
    )

}

export default Search;