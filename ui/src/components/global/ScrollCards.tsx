import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Recipe } from "@/lib/recipeData";

import { Link } from "react-router-dom";

type ImgProps = {
    src: string,
    alt: string
};

const ImgCard = ({ src, alt }: ImgProps) => {
    return (
        <div className="overflow-hidden rounded-md" >
            <img className="aspect-[3/4] h-fit object-cover w-60" src={src} alt={alt} />
        </div>
    )
};

const ScrollCards = ({ recipes, title, scrollCardsId }: { recipes: Recipe[], title: string, scrollCardsId?: string }) => {

    return (
        <div className="h-100 w-100" id={scrollCardsId}>
            <h1>{title}</h1>
            <ScrollArea className="h-98 whitespace-nowrap rounded-md border-solid border-2" scrollHideDelay={1200} >
                <div className="flex w-max space-x-4 p-2">
                    {recipes.map((recipe, i) => {
                        return (
                            <Link to={`/recipe:${recipe.id}`} key={i}>
                                <ImgCard src={recipe.img} alt={recipe.name}></ImgCard>
                            </Link>)
                    })}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>)
}

export default ScrollCards;