import { Separator } from "@/components/ui/separator";

import { Recipe } from "@/lib/recipeData";


export const RecipePage = ({ recipe }: { recipe: Recipe }) => {
    return (
        <main>
            <div className="">
                <h1>{recipe.name}</h1>
                <div className="w-1/4 aspect-square overflow-hidden ">
                    <img className="h-full w-full object-cover" src={recipe.img} alt={recipe.name} />
                </div>
            </div>
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