import { IngredientSelect } from "./IngredientSelect";
import { CategoryIcons } from "./CategoryIcons";
import { AllergySelect } from "./AllergySelect";

export const Aside = () => {
    return (
        <div className="h-100 w-1/5 flex flex-col items-center gap-4 bg-secondary rounded-md">
            <IngredientSelect />
            <CategoryIcons />
            <AllergySelect />
        </div>
    )
}