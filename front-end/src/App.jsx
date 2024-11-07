import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './layouts/Layout';
import Login from './pages/Login';
import loginAction from './pages/SubmitLoginActions';
import Register from './pages/Register';
import registerAction from './pages/SubmitRegisterAction';
import Home from './pages/Home';
import { chechAuthLoader } from './utils/auth';
import logoutAction from './pages/Logout';

const router = createBrowserRouter([
  {
    id: 'root',
    element: <Layout/>,
    path: '/',
    children: [
      {
        path: "login",
        element: <Login />,
        action: loginAction
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction
      },
      {
        path: "",
        element: <Home />,
        loader: chechAuthLoader
      },

      {
        path: "logout",
        loader: chechAuthLoader,
        action: logoutAction
      }
    ]
  }
]);

function App() {

  return (
    <RouterProvider router={router}>
  
    </RouterProvider>
  )
}

export default App
