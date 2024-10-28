import { IngredientSelect } from "./IngredientSelect";
import { CategoryIcons } from "./CategoryIcons";
import { AllergySelect } from "./AllergySelect";

import { Recipe } from "./Home";

export const Aside = ({recipes, allergenCategories} : {recipes: Recipe[], allergenCategories: string[]}) => {
    const uniqueIngredients: Set<string> = new Set();

    recipes.forEach((r)=> {
        r.ingredients.forEach((ingredient) => {
            uniqueIngredients.add(ingredient);
        })
    })

    return (
        <div className="h-100 w-1/5 flex flex-col items-center gap-4 bg-secondary rounded-md">
            <IngredientSelect ingredientsList={uniqueIngredients}/>
            <CategoryIcons />
            <AllergySelect allergenCategories={allergenCategories}/>
        </div>
    )
}