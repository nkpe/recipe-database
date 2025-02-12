import recipesJson from "../assets/recipes.json";

// listed if contains the allergen
export const allergenCategory = ["gluten", "dairy", "nuts", "eggs", "soy"];
export const mealCategory = ["starter", "meat", "fish", "veggie", "dessert", "healthy"];

export type RecipeIngredient = {
    quantity: number | string;
    unit: string;
    item: string;
}
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

export const recipes: Recipe[] = recipesJson;
