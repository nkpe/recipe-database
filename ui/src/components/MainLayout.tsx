import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import { RecentlyViewedRecipesContext } from "./global/Context";

import { Header } from "./static/Header";
import { Footer } from "./static/Footer";

export const MainLayout = () => {
    const [recentlyViewedRecipes, setRecentlyViewedRecipes] = useState<string[]>([]);
    const location = useLocation();
    const currentPath: string = location.pathname;

    useEffect(() => {
        let recentPaths: string[] = recentlyViewedRecipes;

        if (currentPath.includes("/recipe:")){
            if(recentlyViewedRecipes.includes(currentPath)){
                recentPaths = recentlyViewedRecipes.filter(path => path !== currentPath);
            }
            setRecentlyViewedRecipes([currentPath , ...recentPaths])
        }
        
        console.log("RECENTS STATE: ", [...recentlyViewedRecipes]);
    }, [currentPath]);

    return (
        <RecentlyViewedRecipesContext.Provider value={recentlyViewedRecipes}>
            <Header />
                <Outlet /> 
            <Footer />
        </RecentlyViewedRecipesContext.Provider>
    )
}