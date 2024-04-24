
import './App.css';
import Navbar from './components/navbar/Navbar';
import './layout.scss';
import HomePage from './pages/homePage/HomePage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './pages/layout/Layout';
import ListPage from './pages/listPage/ListPage';
import SinglePage from './pages/singlePage/SinglePage';
import ProfilePage from './pages/profilePage/ProfilePage';



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <HomePage/>,
        },{
          path: "/list",
          element: <ListPage/>,
        },{
          path: "/:id",
          element: <SinglePage/>,
        },{
          path: "/profile",
          element: <ProfilePage/>,
        }
      ]
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
