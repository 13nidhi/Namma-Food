import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        console.log("header render");
    },[])
    return (
        <div className="flex justify-between shadow-lg bg-pink-100 sm:bg-gray-200">
            <div >
                <img className="w-56" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt='img'/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button 
                        className="px-4" 
                        onClick={() => {
                            btnNameReact === "Login" ?
                            setBtnNameReact("Logout") :
                            setBtnNameReact("Login") ;
                        }}

                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
  }

  export default Header;


  //let the thoughts flow through the mind 

  // mantra

  // 