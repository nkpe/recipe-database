import recipesJson from "../assets/recipes.json";

// listed if contains the allergen
export const allergenCategory = ["gluten", "dairy", "nuts", "eggs", "soy"];
export const mealCategory = ["starter", "meat", "fish", "veggie", "dessert", "healthy"];

export class RecipeIngredient {
    quantity: number;
    unit: string;
    item: string;

    constructor(quantity: number, unit: string, item: string){
        this.quantity = quantity;
        this.unit = unit;
        this.item = item;
    }
};

export class Recipe {
    id: number;
    name: string;
    description : string;
    img: string;
    ingredients: RecipeIngredient[];
    instructions: string[];
    allergenCategories: string[];
    mealCategories: string[];
    totalTime: number;
    prepTime: number;
    featured: boolean;
    serves: number;
    urlSource: string;

    constructor(id: number, name: string, description: string, img: string, ingredients: RecipeIngredient[], instructions: string[], allergenCategories: string[], mealCategories: string[], totalTime: number, prepTime: number, featured: boolean, serves: number, urlSource: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.img = img;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.allergenCategories = allergenCategories;
        this.mealCategories = mealCategories;
        this.totalTime = totalTime;
        this.prepTime = prepTime;
        this.featured = featured;
        this.serves = serves;
        this.urlSource = urlSource;
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

        const newRecipe = new Recipe(r.id, r.name, r.description, r.img, r.ingredients, r.instructions, parsedRecipeAllergies, parsedMealCategories, r.totalTime, r.prepTime, r.featured, r.serves, r.urlSource);
        parsedRecipes.push(newRecipe);
    })

    return parsedRecipes;
}

export const recipes: Recipe[] = parseRecipeJson(recipesJson);
