import { Box, CssBaseline, Stack, ThemeProvider, alpha } from '@mui/material';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { theme } from './theme';
import Home from "./routes/Home";
import Header from "./components/static/Header";
import Footer from './components/static/Footer';


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
        <Box sx={(theme) => ({
          position: { sm: 'relative', md: '' },
          flexGrow: 1,
          backgroundColor: alpha(theme.palette.background.default, 1),
          overflow: 'auto',
        })} >
          <Stack direction="column" sx={{ height: "100%" }}>
            <Header />
            <Box component="main">
              <RouterProvider router={router} />
            </Box>
            <Footer />
          </Stack>
        </Box>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App;
