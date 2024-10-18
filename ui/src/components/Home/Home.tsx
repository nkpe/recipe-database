import { Aside } from "./Aside";
import { FeatureRecipes } from "./FeatureRecipes";

fetch('server/app/src/main/resources/data/recipes.json')
    .then((res)=> res.json())
    .then((json) => console.log(json))

export const Home = () => {
    return (
        <main className="h-screen flex m-4 box-border gap-4">
            <Aside />
            <div className="h-100 flex-col w-4/5">
                <FeatureRecipes />
                <p></p>
            </div>
        </main>
    )
}