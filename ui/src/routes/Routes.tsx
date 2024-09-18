import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../components/Home';
import { Recipes } from '../components/Recipes';

export const Routes = () => {

    const router = createBrowserRouter([
        {
          path:"/",
          element: <Home />,
        //   loader brings data into the route
        //   loader: rootLoader,
          children: [
            {
              path: "recipes",
              element: <Recipes />,
              // loader: recipeLoader,
            }
          ],
        },
      ]);
      
    return (
        <RouterProvider router={router} />
    )
}