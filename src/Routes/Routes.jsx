import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import ServiceDetails from '../pages/ServiceDetails/ServiceDetails';

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
          element: <ServiceDetails />
        }
      ]
    }
  ])

  export default router;