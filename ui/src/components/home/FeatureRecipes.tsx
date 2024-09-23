import { ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material";


type AllergenCategory = "milk" | "lactose" | "gluten" | "shellfish";
type MealCategory = "breakfast" | "lunch" | "dinner" | "dessert" | "starter";

class Recipe {
    name: string;
    img: string;
    ingredients: string[];
    instructions: string;
    allergenCategories: AllergenCategory[];
    mealCategories: MealCategory[];

    constructor(name: string, img: string, ingredients: string[], instructions: string, allergenCategories: AllergenCategory[], mealCategories: MealCategory[]) {
        this.name = name;
        this.img = img;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.allergenCategories = allergenCategories;
        this.mealCategories = mealCategories;
    }
}

const chickenCurry = new Recipe("Chicken Curry", "./src/assets/recipe-imgs/curry-chicken.jpg", ["chicken", "curry"], "Chop and cook chicken, add to curry",[], ["dinner"]);
const pastaCarbonara = new Recipe("Pasta Carbonara", "./src/assets/recipe-imgs/pasta-carbonara.jpg", ["100g pancetta", "50g pecorino cheese", "50g parmesan", "3 large eggs", "350g spaghetti", "2 plump garlic cloves, peeled and left whole", "50g unsalted butter", "sea salt and freshly ground black pepper"], "make sauce, add pasta", ["milk", "lactose", "gluten"], ["dinner"]);
const pastaPesto = new Recipe("Pesto Pasta", "./src/assets/recipe-imgs/pasta-pesto.jpg", [], "", ["gluten"], ["dinner", "lunch"]);
const saladAdvoEgg = new Recipe("Advocado and Egg Salad", "./src/assets/recipe-imgs/salad-avocado-egg.jpg", [], "", [], ["dinner", "lunch"]);
const soupButternutSquash = new Recipe("Butternut Squash Soup", "./src/assets/recipe-imgs/soup-butternutsquash.jpg", [], "", ["gluten"], ["dinner", "lunch"]);
const tiramisu = new Recipe("Tiramisu", "./src/assets/recipe-imgs/tiramisu.jpg", [], "", ["gluten", "milk", "lactose"], ["dessert"]);

export const FeatureRecipes = () => {

    // REPLACE WITH DATA FROM MONGODB  
    const recipes = [chickenCurry, pastaCarbonara, pastaPesto, saladAdvoEgg, soupButternutSquash, tiramisu]

    return (
        <>
            <Typography variant="h2">Featured Recipes</Typography>
            <ImageList variant="masonry" cols={3} gap={8}>
                {recipes.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.name}
                            loading="lazy" />
                    <ImageListItemBar position="below" title={item.name} />
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    )
}