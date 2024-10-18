import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label"


const ingredientsList = [
    { key: "Chicken breasts", value: "chickenBreasts" },
    { key: "Sweet potatoes", value: "sweetPotatoes" },
    { key: "Olive oil", value: "oliveOil" },
    { key: "Rosemary", value: "rosemary" },
    { key: "Garlic", value: "garlic" },
    { key: "Salt", value: "salt" },
    { key: "Pepper", value: "pepper" },
    { key: "Pasta", value: "pasta" },
    { key: "Cream", value: "cream" },
    { key: "Parmesan cheese", value: "parmesanCheese" },
    { key: "Butter", value: "butter" },
    { key: "Pork loin", value: "porkLoin" },
    { key: "Soy sauce", value: "soySauce" },
    { key: "Ginger", value: "ginger" },
    { key: "Brown sugar", value: "brownSugar" },
    { key: "Sesame oil", value: "sesameOil" },
    { key: "Coconut milk", value: "coconutMilk" },
    { key: "Curry powder", value: "curryPowder" },
    { key: "Onions", value: "onions" },
    { key: "Eggs", value: "eggs" },
    { key: "Bacon", value: "bacon" },
    { key: "Pesto", value: "pesto" },
    { key: "Nuts", value: "nuts" },
    { key: "Avocado", value: "avocado" },
    { key: "Mixed greens", value: "mixedGreens" },
    { key: "Vegetable broth", value: "vegetableBroth" },
    { key: "Butternut squash", value: "butternutSquash" },
    { key: "Ladyfingers", value: "ladyfingers" },
    { key: "Mascarpone cheese", value: "mascarponeCheese" },
    { key: "Coffee", value: "coffee" },
    { key: "Sugar", value: "sugar" },
    { key: "Cocoa powder", value: "cocoaPowder" }
];


export const IngredientSelect = () => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>

            <Label htmlFor="ingredient-select">Find by Ingredient</Label>
            <PopoverTrigger asChild>
                <Button id="ingredient-select" variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
                    {value ? ingredientsList.find((ingredient) => ingredient.value === value)?.key : "Select ingredient..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>

            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search ingredient..." />
                    <CommandList>
                        <CommandEmpty>No ingredient found.</CommandEmpty>
                        <CommandGroup>
                            {ingredientsList.map((ingredient) => (
                                <CommandItem key={ingredient.value} value={ingredient.value} onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <Check className={cn(
                                            "mr-2 h-4 w-4",
                                            value === ingredient.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {ingredient.key}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

