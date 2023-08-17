import React,{lazy, Suspense, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from "./components/About";
import Contact from './components/Contact';
import Error from "./components/Error";
import Header from "../src/components/Header";
import Body from './components/Body';
import RestaurantMenu from './components/RestaurentMenu';
import UserContext from './utils/UserContext';
import './App.css';
//import Grocery from './components/Grocery';


const AppLayout = () => {
  const [username, setUsername] = useState();


  //Authentication
  useEffect(()=> {
    //Make an API call and send username and password
    const data = {
      name: "Nidhi Patwa",
    }
    setUsername(data.name);

  },[])

  return (
    <UserContext.Provider value={{loggedInUser: username , setUsername}}>
      <div className="app">
          <Header/>
          <Outlet />
      </div>
    </UserContext.Provider>

  )
}

const Grocery = lazy(()=> import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}>
          <About />
        </Suspense>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading....</h1>}>
          <Grocery />
        </Suspense>
      },
      {
        path: "/restaurents/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
