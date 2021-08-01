// import { ClerkProvider, SignIn } from '@clerk/clerk-react';
// import { SignIn } from '@clerk/clerk-react';
// import { ClerkProvider,SignedOut } from "@clerk/clerk-react";

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './style.css';
import { pageUrl } from "./Constants";
import { SignedOut, SignIn ,SignedIn, UserButton} from '@clerk/clerk-react';

// const clerkFrontendApi = "clerk.c4c9s.1rfff.lcl.dev";
function Navbar() {
    return (
        <>
            <div class="navbar">
        <div class="logo">MOUSAM</div>
        <div class="navmenu">
           <NavLink to='/'>Home</NavLink> 
            <NavLink to='./about'>About</NavLink>
            <NavLink to='./weather'>Weather</NavLink>
        </div>
       {/* <SignIn><button>SIGNIN</button></SignIn> */}
       <SignedIn><Link to={pageUrl.PROFILE} className="profile"> 
              Profile</Link>

              <UserButton></UserButton>
            </SignedIn>

            <SignedOut><a href={pageUrl.CLERK_LOGIN_PAGE} className="login">
              Login
            </a></SignedOut>
        </div>
        </>
    )
}

export default Navbar;
