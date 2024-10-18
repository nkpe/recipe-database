import { Aside } from "./Aside";
import { FeatureRecipes } from "./FeatureRecipes";


export const Home = () => {
    return (
        <main className="h-screen flex">
            <Aside />
            <div className="h-100 flex-col  w-4/5">
                <FeatureRecipes />
            </div>
        </main>
    )
}