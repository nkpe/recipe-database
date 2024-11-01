import { Separator } from "@/components/ui/separator";

import { Recipe } from "@/lib/recipeData";


export const RecipePage = ({ recipe }: { recipe: Recipe }) => {
    return (
        <main>
            <h1>{recipe.name}</h1>
            <img src={recipe.img} alt={recipe.name} />
            <Separator />
            <ul>
                {recipe.ingredients.map((ingredient, i) => {
                    return <li key={i}>{ingredient}</li>
                })}
            </ul>
            <article>{recipe.instructions}</article>

        </main>
    )
}