import Recipe from "./Recipe";

const RecipeList = ({cakes,averageRating}) => {
    return (
        <>
            <section>
                {
                    cakes.map((cake, index) => {
                        return(
                            <div key={index}>
                                <Recipe cakeName={cake.cakeName} ingredients={cake.ingredients} rating={cake.rating} />
                            </div>
                        )
                    })
                }
            </section>
            <section>
                <h4>Average cake rating: </h4>
                <p>{averageRating(cakes)}</p>
            </section>
        </>
    )

}

export default RecipeList;