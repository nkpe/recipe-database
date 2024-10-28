// import { BeanOff, EggOff, MilkOff, NutOff, WheatOff } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label"

export const AllergySelect = ({ allergenCategories }: { allergenCategories: string[] }) => {

    // const allergensIcons = [
    //     { allergen: "gluten", value: "gluten", icon: <WheatOff /> },
    //     { allergen: "dairy", value: "dairy", icon: <MilkOff /> },
    //     { allergen: "nuts", value: "nuts", icon: <NutOff /> },
    //     { allergen: "eggs", value: "eggs", icon: <EggOff /> },
    //     { allergen: "soy", value: "soy", icon: <BeanOff /> }
    // ]

    return (
        <div className="allergy-container flex flex-col gap-2" id="allergy-container">
            <Label htmlFor="allergy-container">Select Allergens:</Label>
            {allergenCategories.map((allergen) => {
                return (
                    <div className="flex gap-1" key={allergen}>
                        <Checkbox id={`${allergen}-checkbox`} />
                        <Label htmlFor={`${allergen}-checkbox`}>
                            {allergen}
                        </Label>
                    </div>
                )
            })}
        </div>
    )
}