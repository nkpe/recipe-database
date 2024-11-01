import { Recipe, allergenCategory } from "@/lib/recipeData";
import { Aside } from "./Aside";
import { FeaturedRecipes } from "./FeaturedRecipes";



export const Home = ({recipes}: {recipes: Recipe[]}) => {
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