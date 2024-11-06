import {
    createBrowserRouter,
} from "react-router-dom";
import Shered from "../shered/Shered";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import DetilsOfProducts from "../components/DetilsOfProducts";
import ErrorPage from "../components/ErrorPage";
import About from "../pages/Offers";
import Offers from "../pages/Offers";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Shered />,
        errorElement: <ErrorPage />,
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
                path: "/offers",
                element: <Offers />,
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