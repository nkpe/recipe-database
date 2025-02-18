import { IngredientSelect } from "./IngredientSelect";
import { CategoryIcons } from "./CategoryIcons";
import { AllergySelect } from "./AllergySelect";

import { AllergenCategory, RecipeCatalog, RecipeIngredient } from "@/lib/recipeData";
import { Recipe } from "@/lib/recipeData";

import { Separator } from "@/components/ui/separator";

export const Aside = ({allRecipes, allergenCategories} : {allRecipes: RecipeCatalog, allergenCategories: AllergenCategory[]}) => {
    const uniqueIngredients = allRecipes.getUniqueIngredients();

    allRecipes.catalog.forEach((r)=> {
        // console.log("r: ", r)
        r.ingredients.forEach((ingredient) => {
            uniqueIngredients.add(ingredient);
        })
    })

    return (
        <div className="h-100 w-1/5 flex flex-row gap-4 rounded-md py-2">
            <div className="flex flex-col gap-4 items-center">
                <IngredientSelect ingredientsList={uniqueIngredients}/>
                <CategoryIcons />
                <AllergySelect allergenCategories={allergenCategories}/>
            </div>
            <Separator orientation="vertical" />
        </div>
    )
}