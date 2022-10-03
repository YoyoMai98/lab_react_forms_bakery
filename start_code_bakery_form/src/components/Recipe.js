const Recipe = ({cakeName, ingredients, rating}) => {
    return (
        <div className="cake-card">
            <header>
                <h3>{cakeName}</h3>
            </header>
            <main>
            <ul>
                {ingredients.map((ingredient, index)=>{
                    return (
                        <li key={index}>{ingredient}</li>
                    )
                })}
            </ul>
            <p>Rating: {rating}</p>
            </main>
        </div>
    )
}

export default Recipe