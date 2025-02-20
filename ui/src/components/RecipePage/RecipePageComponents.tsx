import { Bean, Egg, Milk, Nut, Wheat } from "lucide-react";
import { Badge } from "@/components/ui/badge"
import { AllergenCategory, MealCategory, RecipeIngredient } from "@/lib/recipeData";

const allergenIcons = [
    { allergen: "gluten", value: "gluten", icon: <Wheat /> },
    { allergen: "dairy", value: "dairy", icon: <Milk /> },
    { allergen: "nuts", value: "nuts", icon: <Nut /> },
    { allergen: "eggs", value: "eggs", icon: <Egg /> },
    { allergen: "soy", value: "soy", icon: <Bean /> }
];

const RecipeAllergenInfo = ({ recipeAllergens }: { recipeAllergens: AllergenCategory[] }) => {
    return (
        <div id="recipe-allergens" className="flex flex-col gap-2">
            <h2>Allergens</h2>
            <ul className="flex flex-row flex-wrap gap-2">
                {recipeAllergens.length === 0 ? <p>none</p> :
                    recipeAllergens.map((al: string, i: number) => {
                        const icon = allergenIcons.find(({ allergen }) => allergen === al);
                        return <li id={`${icon?.allergen}-category`} key={i} className="flex flex-row">{icon?.icon} <Badge variant="secondary">{icon?.allergen}</Badge></li>
                    })}
            </ul>
        </div>
    )
}

const RecipeMealCategories = ({recipeMealCategories}: {recipeMealCategories: MealCategory[]}) => {
    return (
        <div id="recipe-meal-categories" className="flex flex-col gap-2">
            <h2>Categories</h2>
            <ul className="flex flex-row flex-wrap gap-2">
                {recipeMealCategories.map((cat: string, i: number) => {
                    // console.log("cat: ", cat);
                    return <li key={i}><Badge variant="secondary" >{cat}</Badge></li>
                })}
            </ul>
        </div>
    )
}

const RecipeTimeInfo = ({ recipePrepTime, recipeTotalTime }: { recipePrepTime: number, recipeTotalTime: number }) => {

    const toHoursAndMinutes = (totalMins: number) => {
        const hours: number = Math.floor(totalMins / 60);
        const mins: number = totalMins % 60;

        return `${hours > 0 ? `${hours} hours` : ''} ${mins > 0 ? ` ${mins} minutes` : ''}`;
    }

    const prepTimeMins: string = toHoursAndMinutes(recipePrepTime);
    const totalTimeMins: string = toHoursAndMinutes(recipeTotalTime);

    return (
        <ul className="flex gap-4 flex-row ">
            <li>Prep time: {prepTimeMins} </li>
            <li>Total time: {totalTimeMins} </li>
        </ul>
    )
};

const RecipeIngredientList = ({ recipeIngredients }: { recipeIngredients: RecipeIngredient[] }) => {
    return (
        <div className="flex flex-col gap-2">
            <h2>Ingredients</h2>
            <ul className="list-disc list-inside">
                {recipeIngredients.map((ingredient, i) => {
                    return <li key={i}>{`${ingredient.quantity} ${ingredient.unit} ${ingredient.item}`}</li>
                })}
            </ul>
        </div>
    )
};

const RecipeInstructions = ({ recipeInstructions }: { recipeInstructions: string[] }) => {
    return (
        <div className="flex flex-col gap-2">
            <h2>Step by Step instructions</h2>
            <article>
                <ul>
                    {recipeInstructions.map((step, i) => {
                        return <li key={i}>{step}</li>
                    })}
                </ul>
            </article>
        </div>
    )
};

export { RecipeIngredientList, RecipeInstructions, RecipeTimeInfo, RecipeAllergenInfo, RecipeMealCategories };