import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/myComponents/Layout/Layout";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import About from "./Pages/About/About";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";
import NotFound from "./Pages/NotFound";




const routes=createBrowserRouter([
    {
    path: "/",
    element: <Layout/>,
    children: [
    {index:true , element:<Home/>},
    {path:"/blog", element:<Blog/>},
    {path:"/about", element:<About/>},
    {path:"/blog/:slug",element:<BlogDetails/> },
    { path: "*", element: <NotFound /> },
    ],
    },
])

export default routes