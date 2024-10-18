import { CakeSlice, FishSymbol, Ham, LeafyGreen, Soup } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


const categories = [
    { category: "Soups and Starters", value: "starter", icon: <Soup /> },
    { category: "Meat", value: "meat", icon: <Ham /> },
    { category: "Fish", value: "fish", icon: <FishSymbol /> },
    { category: "Veggie", value: "veggie", icon: <LeafyGreen /> },
    { category: "Desserts", value: "dessert", icon: <CakeSlice /> },
]

export const CategoryIcons = () => {
    return (
        <div className="category-conatiner flex items-center flex-col gap-2">
            <Label htmlFor="category-select">Categories</Label>
            <div className="w-100 category-icons-wrapper flex flex-wrap gap-1" id="category-select">
                {categories.map((cat) => {
                    return (
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="outline" size="icon" key={cat.value}>
                                        {cat.icon}
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{cat.category}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )
                })}
            </div>
        </div>
    )
}