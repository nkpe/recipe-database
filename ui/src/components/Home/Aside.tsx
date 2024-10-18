import { IngredientSelect } from "./IngredientSelect"

export const Aside = () => {
    return (
        <div className="h-100 w-1/5 flex flex-col items-center" style={{backgroundColor: "pink"}}>
            <IngredientSelect />
            <div>Icons here</div>
            <div>Allergy checkboxes</div>
        </div>
    )
}