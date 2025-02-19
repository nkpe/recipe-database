import recipesJson from "../assets/recipes.json";

// listed if contains the allergen
export enum AllergenCategory {
    Gluten = "gluten", 
    Dairy = "dairy", 
    Nuts = "nuts", 
    Eggs = "eggs", 
    Soy = "soy",
}
export enum MealCategory {
    Starter = "starter",
    Meat = "meat",
    Fish = "fish",
    Veggie = "veggie",
    Dessert = "dessert",
    Healthy = "healthy",
}

export type RecipeIngredient = {
    quantity: number | string;
    unit: string;
    item: string;
}
interface RecipeProps {
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
}
export class Recipe {
    id: number;
    name: string;
    description : string;
    img: string;
    ingredients: RecipeIngredient[];
    instructions: string[];
    allergenCategories: AllergenCategory[];
    mealCategories: MealCategory[];
    totalTime: number;
    prepTime: number;
    featured: boolean;
    serves: number;
    urlSource: string;

    constructor({id, name, description, img, ingredients, instructions, allergenCategories, mealCategories, totalTime, prepTime, featured, serves, urlSource}: RecipeProps) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.img = img;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.allergenCategories = allergenCategories.filter((allergen): allergen is AllergenCategory => Object.values(AllergenCategory).includes(allergen as AllergenCategory));
        this.mealCategories = mealCategories.filter((cat): cat is MealCategory => Object.values(MealCategory).includes(cat as MealCategory));
        this.totalTime = totalTime;
        this.prepTime = prepTime;
        this.featured = featured;
        this.serves = serves;
        this.urlSource = urlSource;
    }
};

export class RecipeCatalog {
    catalog: Recipe[];

    constructor(catalog: Recipe[]){
        this.catalog = catalog;
    }

    getRecipesById(id: number[]): Recipe[] {
        return this.catalog.filter(recipe => id.includes(recipe.id));
    }

    getFeaturedRecipes(): Recipe[] {
        return this.catalog.filter(recipe => recipe.featured === true)
    }

    getUniqueIngredients(): Set<RecipeIngredient> {
        const uniqueIngredients: Set<RecipeIngredient> = new Set();
        
        this.catalog.map((r)=> {
            // console.log("r: ", r)
            r.ingredients.map((ingredient) => {
                uniqueIngredients.add(ingredient);
            })
        })

        return uniqueIngredients;
    }
}


export const recipes: RecipeCatalog = new RecipeCatalog(recipesJson.map(recipe => new Recipe(recipe)));