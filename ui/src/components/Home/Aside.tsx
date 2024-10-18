import { IngredientSelect } from "./IngredientSelect";
import { CategoryIcons } from "./CategoryIcons";

export const Aside = () => {
    return (
        <div className="h-100 w-1/5 flex flex-col items-center gap-4" style={{backgroundColor: "pink"}}>
            <IngredientSelect />
            <CategoryIcons />
            <div>Allergy checkboxes</div>
        </div>
    )
}