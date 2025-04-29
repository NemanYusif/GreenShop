import MainPage from "../Pages/MainPage";
import Categories from "../Pages/Categories";
import AllProducts from "../Pages/AllProducts";
import AllSales from "../Pages/AllSales";
import AboutProducts from "../Pages/AboutProduct";
import ShopingCart from "../Pages/ShopingCards";
import NotFound from "../Pages/NotFound";
import SelectedProducts from "../Pages/SelectedProducts"

export const MyRoutes = [

{
    id: 1,
    path: "/",
    element: <MainPage />,
    title: "Main Page",
},
{
    id: 2,
    path: "/categories",
    element: <Categories />,
    title: "Categories",
},
{
    id: 3,
    path: "/allproducts",
    element: <AllProducts />,
    title: "All Products",
},
{
    id: 4,
    path:"/allSales",
    element:<AllSales />,
    title:"All Sales",
},
{
    id: 5,
    path:"/aboutProducts",
    element:<AboutProducts />,
    title:"About Products",
},
{
    id: 6,
    path:"/ShoppingCart",
    element:<ShopingCart />,
    title:"Shopping Cart",
},
{
    id:7,
    path:"/selectedProducts",
    element:<SelectedProducts/>,
    title:"Terms and Conditions",
},
{
    id:8,
    path:"/NotFound",
    element:<NotFound/>,
    title:"Not Found"

}
]