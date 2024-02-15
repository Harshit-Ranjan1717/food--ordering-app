import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from './components/About'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestrauntMenu from "./components/RestrauntMenu";
import Profile from "./components/Profile";
// import Instamart from './components/Instamart' : we willl do lazy laoding,chunking
import { lazy, Suspense, useState } from "react";
import Shimmer from "./components/Shimmer";
import Error from "./components/Error";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

/*
Header
  -Logo
  -Nav items(right Side)
  -cart
Body
    -search bar
    -RestrauntList
      -RestrauntCard
          -Image
          -Name
          -Rating
          -Cusines
Footer
  -links
  -Copyright

*/

//-------------------------------------------------------------

// const burgerKing={
//   name:"Burger King",
//   image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
//   cusines:["Burger","American"],
//   rating:"4.2"
// }

const Instamart = lazy(() => import("./components/Instamart")); // in other file i.e on demand loading ,code splitting ,chunking
//react tries to suspend it upon on demand loading

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [user, SetUser] = useState({
    name: "Harshit",
    email: "harshit1717@gmail.com",
  });

  return (
    <>
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
        }}
      >
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </UserContext.Provider>
      </Provider>
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About></About>
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile></Profile>,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/restaurant/:id",
        element: <RestrauntMenu></RestrauntMenu>,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer></Shimmer>}>
            <Instamart></Instamart>
          </Suspense>
        ),
      },
      {
        path:"/cart",
        element:<Cart></Cart>
        
      }
    ],
  },
]);

export default AppLayout;
