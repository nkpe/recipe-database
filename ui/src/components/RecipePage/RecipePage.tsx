import { Separator } from "@/components/ui/separator";

import { Recipe } from "@/lib/recipeData";


export const RecipePage = ({ recipe }: { recipe: Recipe }) => {
    return (
        <main>
            <div className="recipe-top flex flex-row">
                <div className="w-1/4 aspect-square overflow-hidden ">
                    <img className="h-full w-full object-cover" src={recipe.img} alt={recipe.name} />
                </div>
                <h1>{recipe.name}</h1>
            </div>
            <Separator />
            <div className="recipe-details">
                <ul>
                    {recipe.ingredients.map((ingredient, i) => {
                        return <li key={i}>{ingredient}</li>
                    })}
                </ul>
                <article>{recipe.instructions}</article>
            </div>
        </main>
    )
}