import { Aside } from "./Aside";
import { FeaturedRecipes } from "./FeaturedRecipes";

import recipesJson from "../../assets/recipes.json";

export const allergenCategory = ["gluten", "dairy", "nuts", "eggs", "soy"];
const mealCategory = ["starter", "meat", "fish", "veggie", "dessert"];

export class Recipe {
    name: string;
    img: string;
    ingredients: string[];
    instructions: string;
    allergenCategories: string[];
    mealCategories: string[];
    totalTime: number;
    prepTime: number;
    featured: boolean;

    constructor(name: string, img: string, ingredients: string[], instructions: string, allergenCategories: string[], mealCategories: string[], totalTime: number, prepTime: number, featured: boolean) {
        this.name = name;
        this.img = img;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.allergenCategories = allergenCategories;
        this.mealCategories = mealCategories;
        this.totalTime = totalTime;
        this.prepTime = prepTime;
        this.featured = featured
    }
};

const parseRecipeJson = (recipesJson: Recipe[]) => {
    console.log(typeof recipesJson)
    const parsedRecipes: Recipe[] = [];

    recipesJson.forEach((r) => {
        console.log(r);
        const parsedRecipeAllergies: string[] = [];
        const parsedMealCategories: string[] = [];

        r.allergenCategories.forEach((val: string) => {
            if (allergenCategory.includes(val)) {
                parsedRecipeAllergies.push(val)
            } else (
                console.log("Unexpected meal category: ", val)
            )
        });
        r.mealCategories.forEach((val: string) => {
            if (mealCategory.includes(val)) {
                parsedMealCategories.push(val)
            } else (
                console.log("Unexpected meal category: ", val)
            )
        });

        const newRecipe = new Recipe(r.name, r.img, r.ingredients, r.instructions, parsedRecipeAllergies, parsedMealCategories, r.totalTime, r.prepTime, r.featured);
        parsedRecipes.push(newRecipe);
    })

    return parsedRecipes;
}


export const Home = () => {
    const recipes: Recipe[] = parseRecipeJson(recipesJson);

    return (
        <main className="h-screen flex m-4 box-border gap-4">
            <Aside recipes={recipes} allergenCategories={allergenCategory}/>
            <div className="h-100 flex-col w-4/5">
                <FeaturedRecipes recipes={recipes} />
                <p></p>
            </div>
        </main>
    )
};