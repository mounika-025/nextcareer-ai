// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";
// import { Button } from "./ui/button";

const Header = () => {
  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link>
          <img src="/logo.png" className="h-20" />
        </Link>
        {/* <Button variant="outline">Login</Button> */}
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </>
  );
};

export default Header;
