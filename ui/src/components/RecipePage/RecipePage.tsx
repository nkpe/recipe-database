import { Bean, Egg, Milk, Nut, Wheat } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import { Recipe } from "@/lib/recipeData";

const allergenIcons = [
    { allergen: "gluten", value: "gluten", icon: <Wheat /> },
    { allergen: "dairy", value: "dairy", icon: <Milk /> },
    { allergen: "nuts", value: "nuts", icon: <Nut /> },
    { allergen: "eggs", value: "eggs", icon: <Egg /> },
    { allergen: "soy", value: "soy", icon: <Bean /> }
]

// ADD ALLERGENS WITH ICONS 
// ADD MEAL CATEGORIES USING SHADCN BADGE

export const RecipePage = ({ recipe }: { recipe: Recipe }) => {
    return (
        <main>
            <div className="recipe-top-wrapper flex flex-row">
                <div className="w-1/4 aspect-square overflow-hidden ">
                    <img className="h-full w-full object-cover" src={recipe.img} alt={recipe.name} />
                </div>

                <div id="recipe-info-wrapper" className="flex flex-col gap-4">
                    <h1>{recipe.name}</h1>
                    <p>{recipe.description}</p>
                    <ul className="flex gap-4 flex-row ">
                        <li>Prep time: {recipe.prepTime}</li>
                        <li>Total time: {recipe.totalTime}</li>
                    </ul>

                    <div id="recipe-details flex flex-col gap-4">
                        <div id="recipe-allergens">
                            <h2>Allergens:</h2>
                            <ul className="flex flex-row flex-wrap gap-2">
                                {recipe.allergenCategories.map((al: string, i: number) => {
                                    const icon = allergenIcons.find(({ allergen }) => allergen === al);
                                    console.log("icon: ", icon)
                                    return <li id={`${icon?.allergen}-category`} key={i} className="flex flex-row">{icon?.icon} <p>{icon?.allergen}</p></li>
                                })}
                            </ul>
                        </div>
                        <div id="recipe-categories"></div>
                    </div>
                </div>
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