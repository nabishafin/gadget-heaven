import {
    createBrowserRouter,
} from "react-router-dom";
import Shered from "../shered/Shered";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import DetilsOfProducts from "../components/DetilsOfProducts";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Shered />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/statistics",
                element: <Statistics />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
                loader: () => fetch('/public/public.json')
            },
            {
                path: "/details/:productsId",
                element: <DetilsOfProducts />,
                loader: () => fetch('/public/public.json')
            },

        ]
    },
]);


export default router