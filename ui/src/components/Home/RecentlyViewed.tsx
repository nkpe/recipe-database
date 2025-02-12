import { useContext } from "react";
import ScrollCards from "../global/ScrollCards";
import { Recipe } from "@/lib/recipeData";
import { GlobalContext } from "../global/Context";

// const storeRecentlyViewed = () => {

// }

const RecentlyViewed = () => {
    const globalContext = useContext(GlobalContext);
    const recentlyViewedRecipes: Recipe[]= globalContext.RecentlyViewedRecipes;

    if (!recentlyViewedRecipes.length || !Array.isArray(recentlyViewedRecipes)){
        console.log("No recently viewed recipes");
        return
    }
    console.log("Recently view recipes")
    return (<ScrollCards recipes={recentlyViewedRecipes}/>)
}

export default RecentlyViewed;