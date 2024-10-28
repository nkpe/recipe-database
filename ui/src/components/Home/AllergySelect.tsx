import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label"


const allergies = [
    { allergy: "Gluten", value: "gluten" },
    { allergy: "Diary", value: "meat" },
    { allergy: "Milk", value: "milk" },
    { allergy: "Nuts", value: "nuts" },
    { allergy: "Eggs", value: "egg" },
]

glutenIcon == "gluten";
glutenIcon == AllergyCategory.Gluten;

export const AllergySelect = ({ allergies }: { allergies: string[] }) => {
    return (
        <div className="allergy-container flex flex-col gap-2" id="allergy-container">
            <Label htmlFor="allergy-container">Select Allergens:</Label>
            {allergies.map((item) => {
                return (
                    <div className="flex gap-1" key={item.value}>
                        <Checkbox id={`${item.value}-checkbox`} />
                        <Label htmlFor={`${item.value}-checkbox`}>
                            {item.allergy}
                        </Label>
                    </div>
                )
            })}
        </div>
    )
}