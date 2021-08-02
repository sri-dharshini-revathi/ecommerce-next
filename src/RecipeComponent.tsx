import { IRecipe } from "./IRecipe";

const RecipeComponent = (props: { recipe: IRecipe }) => {
    const { recipe } = props;
    return (
        <div className="recipe">
            <div className="title">
                <img src={recipe.thumbnail || 'https://lh3.googleusercontent.com/uEhGxkpLs3kQGOGp4uJbn6ZFjQSyS5re-SMnsbyCMZ2mMO91qvvi1w25PnViozVEglwdgQ=s80'} alt={recipe.title} />
                <p>{recipe.title}</p>
            </div>
            {recipe.ingredients &&
                <ul>
                    {recipe.ingredients.split(',').map(ingredient => <li>{ingredient}</li>)}
                </ul>
            }
            <a href={recipe.href} target="_bla">View Recipe</a>
        </div>
    )
};

export default RecipeComponent;