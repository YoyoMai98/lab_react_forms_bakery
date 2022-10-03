import Recipe from "./Recipe";

const RecipeList = ({cakes}) => {
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
                <p>{(cakes.reduce((total, cake) => total + cake.rating, 0)/ cakes.length)}</p>
            </section>
        </>
    )

}

export default RecipeList;