import { useContext } from "react";
import ScrollCards from "../global/ScrollCards";
import { RecentlyViewedRecipesContext } from "../global/Context";
import { Recipe, RecipeCatalog } from "@/lib/recipeData";

const RecentlyViewedRecipes = ({allRecipes}: {allRecipes: RecipeCatalog}) => {
    const recentlyViewedRecipePaths: string[] = useContext(RecentlyViewedRecipesContext);
    
    if (!recentlyViewedRecipePaths.length || !Array.isArray(recentlyViewedRecipePaths)){
        console.log("No recently viewed recipes");
        return
    };

    const recentlyViewRecipeIds: number[] = recentlyViewedRecipePaths.map((path) => {
        return Number(path.slice(8))
    });

    const recentlyViewedRecipes: Recipe[]= allRecipes.getRecipesById(recentlyViewRecipeIds)

    return (
        <ScrollCards recipes={recentlyViewedRecipes}/>
    );
}

export default RecentlyViewedRecipes;