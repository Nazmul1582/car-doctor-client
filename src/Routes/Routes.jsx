import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import ServiceDetails from '../pages/ServiceDetails/ServiceDetails';
import Checkout from '../pages/Checkout/Checkout';
import CartDetails from '../pages/CartDetails/CartDetails';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "signup",
          element: <SignUp />
        },
        {
          path: "service-details/:id",
          element: <ServiceDetails />,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: "checkout/:id",
          element: <Checkout />
        },
        {
          path: "cart-details",
          element: <CartDetails />
        }
      ]
    }
  ])

  export default router;