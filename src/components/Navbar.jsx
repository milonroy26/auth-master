"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [loggedIn, setLoggedIn] = useState(true);
//    useEffect(async() => {
//     const res = await fetch("/api/login")
//     const json = await res.json();
//     if(json['status'] == true){
//         setLoggedIn(false);
//     }
//    },[]) 
   
    const router = useRouter();
    const logout = async () => {
        const response = await fetch("/api/login")
        const json = await response.json();
        if(json['status'] === true){
            router.replace("/");
        }
    }

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        
        <div className="flex-none gap-2">
          <ul>
            <Link className="mr-9" href={"/"}>Home</Link>
            <Link className={`${loggedIn === false ? "displayNone" : ""}`} href={"/login"}>login</Link>
          </ul>

          
          <div className={`dropdown dropdown-end ${loggedIn ? "displayNone" : ""}`}>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://bdassistant.com/assets/image/svgs/profile-user.svg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li onClick={logout}>
                <a>Logout</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
