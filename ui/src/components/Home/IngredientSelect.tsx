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
import { Label } from "@/components/ui/label";
import { RecipeIngredient } from "@/lib/recipeData";


export const IngredientSelect = ({ ingredientsList }: { ingredientsList: Set<RecipeIngredient> }) => {
    const [open, setOpen] = React.useState<boolean>(false);
    const [value, setValue] = React.useState<string>("");

    return (
        <Popover open={open} onOpenChange={setOpen}>

            <Label htmlFor="ingredient-select">Find by Ingredient</Label>
            <PopoverTrigger asChild>
                <Button id="ingredient-select" variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
                    {value || "Select ingredient..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>

            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search ingredient..." />
                    <CommandList>
                        <CommandEmpty>No ingredient found.</CommandEmpty>
                        <CommandGroup>
                            {Array.from(ingredientsList).map((ingredient) => (
                                <CommandItem key={ingredient.item} value={ingredient.item} onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                }}
                                >
                                    <Check className={cn(
                                        "mr-2 h-4 w-4",
                                        value === ingredient.item ? "opacity-100" : "opacity-0"
                                    )}
                                    />
                                    {ingredient.item}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

