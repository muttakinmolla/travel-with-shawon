import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Services from "../../Pages/Services/Services";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import AddComment from "../../Pages/AddComment/AddComment";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Review from "../../Pages/Review/Review";
import MyReview from "../../Pages/MyReview/MyReview";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://travel-with-shawon-server.vercel.app/services'),
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services',
                loader: () => fetch('https://travel-with-shawon-server.vercel.app/services'),
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`https://travel-with-shawon-server.vercel.app/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/addComment/:id',
                loader: ({ params }) => fetch(`https://travel-with-shawon-server.vercel.app/services/${params.id}`),
                element: <PrivateRoute><AddComment></AddComment></PrivateRoute>
            },
            {
                path: '/myReview',
                element: <MyReview></MyReview>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;