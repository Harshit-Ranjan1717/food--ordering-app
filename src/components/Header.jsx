import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";


const Title = () => {
  return (
    <>
      <a href="/">
        <img
          className="h-28 p-2"
          src="https://imgv3.fotor.com/images/blog-cover-image/a-yello-reataurant-logo-for-a-food-brand.jpg"
          alt=""
        />
      </a>
    </>
  );
};

const Header = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline;

  const { user } = useContext(UserContext);

  const cartItems=useSelector(store=>store.cart.items)

  return (
    <div className="flex justify-between bg-pink-50 shadow-xl sm:bg-purple-300">
      <Title></Title>
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2 font-bold ">Home</li>
          </Link>

          <Link to="/about">
            <li className="px-2 font-bold">About</li>
          </Link>
          {/* just like a tag */}
          <Link to="/contact">
            <li className="px-2 font-bold">Contact</li>
          </Link>

          <Link to="/instamart">
            <li className="px-2 font-bold">Instamart</li>
          </Link>
          <Link to="/cart">
            <li className=" px-2 font-bold">Cart {cartItems.length}</li>
          </Link>

        </ul>
      </div>
      <h1 className="m-10">{isOnline ? "✅" : "OFFLINE:❌"}</h1>
      <h1 className="p-10 font-bold ">{user.name}</h1>
      <h1 className="p-10 font-bold ">{user.email}</h1>
      {isloggedIn ? (
        <button
          className="bg-purple-500 rounded-md w-24 h-8 shadow-xl m-10"
          onClick={() => setIsLoggedIn(false)}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => setIsLoggedIn(true)}
          className="bg-purple-500 rounded-md w-24 h-8 shadow-xl m-10 "
        >
          {" "}
          Login
        </button>
      )}
    </div>
  );
};

export default Header;

/*
Named import:-

export const Title=()=>{}
export const Header=()=>{}

one default one named export
import Header,{Title} from "./location"

*/
