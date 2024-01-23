import { createBrowserRouter } from "react-router-dom";
import HomeView from "../views/HomeView";
import Layout from "../components/Layout";
import DetailCard from "../components/DetailCard";
import CartView from "../views/CartView";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
        {
            path: "/",
            element: <HomeView />,
        },
        {
            path: '/detail/:menuId',
            element: <DetailCard />
        },
        {
            path: '/cart',
            element: <CartView />
        },
        ],
    },
])

export default router;