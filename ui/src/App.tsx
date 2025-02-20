// import { useState } from 'react';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import { recipes } from './lib/recipeData.ts';
import { Home } from './components/Home/Home';
import { RecipePage } from './components/RecipePage/RecipePage.tsx';
import { MainLayout } from './components/MainLayout.tsx';

const recipeRoutes = recipes.catalog.map(recipe => ({
  path: `recipe:${recipe.id}`,
  element: <RecipePage recipe={recipe}/>,
}))

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true,
        element: <Home allRecipes={recipes}/>,
      },
      ...recipeRoutes,
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
