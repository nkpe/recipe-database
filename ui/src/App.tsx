import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: "recipes",
    //     element: <Recipes />,
    //     // loader: recipeLoader,
    //   }
    // ],
  },
]);


function App() {
  return (
    <>
      <header>
        <h1>Recipe Finder</h1>
      </header>
      <RouterProvider router={router} />
      <footer>
      Copyright 2024
      </footer>
    </>
  );
}

export default App;
