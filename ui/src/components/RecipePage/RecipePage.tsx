import { Separator } from "@/components/ui/separator";
import { Recipe } from "@/lib/recipeData";

import {
    RecipeIngredientList,
    RecipeInstructions,
    RecipeTimeInfo,
    RecipeAllergenInfo,
    RecipeMealCategories
} from "./RecipePageComponents";

import RecentlyViewedRecipes from "../Home/RecentlyViewedRecipes";

export const RecipePage = ({ recipe }: { recipe: Recipe }) => {

    // console.log("CAT: ", recipe.mealCategories)
    return (
        <main className="flex flex-col gap-4">
            <div id="recipe-header" className="flex flex-col gap-4">
                <h1>{recipe.name}</h1>
                <RecipeTimeInfo recipePrepTime={recipe.prepTime} recipeTotalTime={recipe.totalTime} />
            </div>
            <Separator />
            <div className="recipe-top-wrapper flex flex-row gap-4 py-3">
                <div className="w-1/4 aspect-square overflow-hidden ">
                    <img className="h-full w-full object-cover" src={recipe.img} alt={recipe.name} />
                </div>

                <div id="recipe-info-wrapper" className="flex flex-col gap-4">
                    <p>{recipe.description}</p>
                    <div id="recipe-categories" className="flex flex-col gap-4">
                        <RecipeAllergenInfo recipeAllergens={recipe.allergenCategories}/>
                        <RecipeMealCategories recipeMealCategories={recipe.mealCategories}/>
                    </div>
                </div>
            </div>
            <Separator />
            <div className="recipe-details flex flex-col gap-4">
                <RecipeIngredientList recipeIngredients={recipe.ingredients} />
                <RecipeInstructions recipeInstructions={recipe.instructions} />
            </div>

            <RecentlyViewedRecipes allRecipes={allRecipes} />
        </main>
    )
};