// routes.ts
import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout";

const route: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true, // This makes it the default child route for the parent path
                element: <Home />,
            },
            // You can add more child routes here if needed
        ],
    },
];

export default route;
