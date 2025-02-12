import { IngredientSelect } from "./IngredientSelect";
import { CategoryIcons } from "./CategoryIcons";
import { AllergySelect } from "./AllergySelect";

import { Recipe } from "@/lib/recipeData";
import { Separator } from "@/components/ui/separator";

export const Aside = ({recipes, allergenCategories} : {recipes: Recipe[], allergenCategories: string[]}) => {
    const uniqueIngredients: Set<string> = new Set();

    recipes.forEach((r)=> {
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