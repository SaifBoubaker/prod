import React from "react";
import PrivateNavbar from "./Navigation/PrivateNavbar";
import PublicNavbar from "./Navigation/PublicNavbar";
import AdminNavbar from "./Navigation/AdminNavbar";
import { useSelector } from "react-redux";

function Navbar(props) {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  return (
    <>
      {/* <AdminNavbar/> */}
      {user ? <AdminNavbar /> : <PublicNavbar />}

      {/* <PrivateNavbar/> */}
    </>
  );
}

export default Navbar;
