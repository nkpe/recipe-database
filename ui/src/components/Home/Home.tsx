import { RecipeCatalog, AllergenCategory } from "@/lib/recipeData";
import { Aside } from "./Aside";
import { FeaturedRecipes } from "./FeaturedRecipes";
import RecentlyViewedRecipes from "./RecentlyViewedRecipes";

export const Home = ({allRecipes}: {allRecipes: RecipeCatalog}) => {
    const featuredRecipes = allRecipes.getFeaturedRecipes();

    return (
        <main className="flex">
            <Aside allRecipes={allRecipes} allergenCategories={Object.values(AllergenCategory)}/>
            <div className="h-100 flex-col w-4/5">
                <FeaturedRecipes recipes={featuredRecipes} />
                <p></p>

                <RecentlyViewedRecipes />
            </div>
        </main>
    )
};