import { useContext } from "react";
import ScrollCards from "../global/ScrollCards";
import { Recipe } from "@/lib/recipeData";
import { RecentlyViewedRecipesContext } from "../global/Context";

const RecentlyViewedRecipes = ({recipes}: {recipes: Recipe[]}) => {
    const recentlyViewedRecipes = useContext(RecentlyViewedRecipesContext);

    if (!recentlyViewedRecipes.length || !Array.isArray(recentlyViewedRecipes)){
        console.log("No recently viewed recipes");
        return
    }
    console.log("Recently view recipes")
    return (<ScrollCards recipes={recentlyViewedRecipes}/>)
}

export default RecentlyViewedRecipes;