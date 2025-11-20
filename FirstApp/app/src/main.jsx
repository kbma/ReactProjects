import React from 'react'
import ReactDOM from 'react-dom/client'
/* import FormulaireContact from './components/FormulaireContact.jsx';
 */import Blogs from './pages/Blogs.jsx';
 import BlogDetail from './pages/BlogDetail.jsx';

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Box from './components/Box.jsx';

/* const router = createBrowserRouter([
  {
    path: "/",           // route principale
    element: <Layout />, // page Layout
    children: [
      { index: true, element: <Home /> },  // route par défaut = Page d'accueil
      { path: "blogs", element: <Blogs /> },
       { path: "about", element: <About /> },
       { path: "blogs/:id", element: <BlogDetail /> },
    ],
  },
]);
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Box  />
  </React.StrictMode>
)


