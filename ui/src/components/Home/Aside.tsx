import { IngredientSelect } from "./IngredientSelect"

export const Aside = () => {
    return (
        <div className="h-100 w-1/5" style={{backgroundColor: "pink"}}>
            <IngredientSelect />
            <div>Icons here</div>
            <div>Allergy checkboxes</div>
        </div>
    )
}