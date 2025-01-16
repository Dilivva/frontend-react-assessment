import Layout from "../components/Layout";
import Home from "../pages/Home";
import Properties from "../pages/Properties";

export const ROUTES = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "home",
                element: <Home/>
            },
            {
                path: "properties",
                element: <Properties/>
            }
        ]
    }
]