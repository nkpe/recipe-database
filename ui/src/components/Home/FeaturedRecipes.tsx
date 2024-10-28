
import { useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { Recipe } from "./Home";

type ImgProps = {
    src :string
};

const ImgCard = ({ src } :ImgProps ) => {
    return (
        <div className="overflow-hidden rounded-md" >
            <img className="aspect-[3/4] h-fit object-cover w-60" src={src} alt="recipe-img" />
        </div>
    )
};

export const FeaturedRecipes = ({recipes} : {recipes :Recipe[]}) => {
    console.log("Recipes array inside FeaturedRecipes", recipes)
    const [featuredRecipesData, setFeaturedRecipesData] = useState<Recipe[]>([]);
    
    useEffect(() => {
        const filtered :Recipe[] = [];

        recipes.forEach((r) => {
            if (r.featured == true) {
                filtered.push(r)
            } else {
                console.log("Recipe not featured: ", r.name)
            }
        });
        
        console.log(filtered);
        setFeaturedRecipesData(filtered);
    }, []);


    return(
        <div className="h-100 w-100">
            <h1>Featured Recipes</h1>
            {/* CSS Grid on ScrollArea? */}
            <ScrollArea className="h-98 whitespace-nowrap rounded-md border-solid border-2 " >
                <div className="flex w-max space-x-4 p-2">
                    {featuredRecipesData.map((recipe, i) => {return <ImgCard src={recipe.img} key={i}></ImgCard>})}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    )
};