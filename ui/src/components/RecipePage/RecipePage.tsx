import { Bean, Egg, Milk, Nut, Wheat } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge"

import { Recipe } from "@/lib/recipeData";

const allergenIcons = [
    { allergen: "gluten", value: "gluten", icon: <Wheat /> },
    { allergen: "dairy", value: "dairy", icon: <Milk /> },
    { allergen: "nuts", value: "nuts", icon: <Nut /> },
    { allergen: "eggs", value: "eggs", icon: <Egg /> },
    { allergen: "soy", value: "soy", icon: <Bean /> }
]

const RecipeIngredientList = ({ recipe }: {recipe: Recipe}) => {
    return (
        <div className="flex flex-col gap-2">
            <h2>Ingredients</h2>
            <ul className="list-disc list-inside">
                {recipe.ingredients.map((ingredient, i) => {
                    return <li key={i}>{ingredient}</li>
                })}
            </ul>
        </div>
    )
}

const RecipeInstructions = ({recipe}: {recipe: Recipe}) =>{
    return (
        <div className="flex flex-col gap-2">
            <h2>Step by Step instructions</h2>
            <article>
                <ul>
                {recipe.instructions.map((step, i) => {
                    return <li key={i}>{step}</li>
                })}
                </ul>
            </article>
        </div>
    )
}

export const RecipePage = ({ recipe }: { recipe: Recipe }) => {
    console.log("CAT: ", recipe.mealCategories)
    return (
        <main className="flex flex-col gap-4">
            <div className="recipe-top-wrapper flex flex-row gap-4">
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

                    <div id="recipe-categories" className="flex flex-col gap-4">
                        <div id="recipe-allergens" className="flex flex-col gap-2">
                            <h2>Allergens</h2>
                            <ul className="flex flex-row flex-wrap gap-2">
                                {recipe.allergenCategories.map((al: string, i: number) => {
                                    const icon = allergenIcons.find(({ allergen }) => allergen === al);
                                    return <li id={`${icon?.allergen}-category`} key={i} className="flex flex-row">{icon?.icon} <Badge variant="secondary">{icon?.allergen}</Badge></li>
                                })}
                            </ul>
                        </div>

                        <div id="recipe-meal-categories" className="flex flex-col gap-2">
                            <h2>Categories</h2>
                            <ul className="flex flex-row flex-wrap gap-2"> 
                                {recipe.mealCategories.map((cat: string, i: number) => {
                                    console.log("cat: ", cat);
                                    return <li key={i}><Badge variant="secondary" >{cat}</Badge></li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Separator />
            <div className="recipe-details flex flex-col gap-4">
                <RecipeIngredientList recipe={recipe}/>
                <RecipeInstructions recipe={recipe} />
            </div>
        </main>
    )
}