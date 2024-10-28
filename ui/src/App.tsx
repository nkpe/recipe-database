import { useState } from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';


import { Home } from './components/Home/Home'

import { RecipePage } from './components/RecipePage/RecipePage.tsx';
import { MainLayout } from './components/MainLayout.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home/",
        element: <Home />,
      }, {
        path: "recipe-page/",
        element: <RecipePage />
      }
    ]
  }
])

function App() {
  // const [count, setCount] = useState(0);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
