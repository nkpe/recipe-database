import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const imgSrcs = ["./src/assets/recipe-imgs/curry-chicken.jpg",
    "./src/assets/recipe-imgs/pasta-carbonara.jpg",
    "./src/assets/recipe-imgs/pasta-pesto.jpg",
    "./src/assets/recipe-imgs/salad-avocado-egg.jpg",
    "./src/assets/recipe-imgs/soup-butternutsquash.jpg",
    "./src/assets/recipe-imgs/tiramisu.jpg"]

type ImgProps = {
    src :string
}

const ImgCard = ({ src } :ImgProps ) => {
    return (
        <div className="overflow-hidden rounded-md" >
            <img className=" aspect-[3/4] h-fit w-fit object-cover w-60 " src={src} alt="recipe-img" />
        </div>
    )
}

export const FeatureRecipes = () => {
    return(
        <div className="h-100 w-100" style={{backgroundColor: "darkgrey"}}>
            <h1 style={{backgroundColor: "turquoise"}}>Feature Recipes</h1>
            {/* CSS Grid on ScrollArea? */}
            <ScrollArea className="h-98 whitespace-nowrap rounded-md border-solid border-2 " >
                <div className="flex w-max space-x-4 p-2">
                    {imgSrcs.map((src) => {return <ImgCard src={src}></ImgCard>})}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    )
}