import {
    createBrowserRouter,
} from "react-router-dom";
import Shered from "../shered/Shered";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";

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
            },
        ]
    },
]);


export default router