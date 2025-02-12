
import { useEffect, useState } from "react";
import ScrollCards from "../global/ScrollCards";
import { Recipe } from "@/lib/recipeData";

export const FeaturedRecipes = ({recipes} : {recipes :Recipe[]}) => {
    
    // console.log("Recipes array inside FeaturedRecipes", recipes);
    const [featuredRecipesData, setFeaturedRecipesData] = useState<Recipe[]>([]);
    
    useEffect(() => {
        const filtered :Recipe[] = [];

        recipes.forEach((r) => {
            if (r.featured == true) {
                filtered.push(r)
            } else {
                // console.log("Recipe not featured: ", r.name)
            }
        });
        
        // console.log(filtered);
        setFeaturedRecipesData(filtered);
    }, [recipes]);


    return(
        <ScrollCards recipes={featuredRecipesData}/>
    )
};