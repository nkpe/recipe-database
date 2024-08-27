import { CssBaseline, ThemeProvider } from '@mui/material';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { theme } from './theme';
import Home from "./routes/Home";
import Header from "./components/static/Header";


const router = createBrowserRouter([
  {
    path: "/",
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
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Header />
        <main>
          <RouterProvider router={router} />
        </main>
        <footer>
          Copyright 2024
        </footer>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App;
