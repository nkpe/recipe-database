import { Recipe, allergenCategory } from "@/lib/recipeData";
import { Aside } from "./Aside";
import { FeaturedRecipes } from "./FeaturedRecipes";
import RecentlyViewedRecipes from "./RecentlyViewedRecipes";

export const Home = ({recipes}: {recipes: Recipe[]}) => {

    return (
        <main className="flex">
            <Aside recipes={recipes} allergenCategories={allergenCategory}/>
            <div className="h-100 flex-col w-4/5">
                <FeaturedRecipes recipes={recipes} />
                <p></p>

                <RecentlyViewedRecipes />
            </div>
        </main>
    )
};