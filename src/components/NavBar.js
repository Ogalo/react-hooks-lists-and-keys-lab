import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const arrList = links.map((link) =>(
    <a key={link} href={"#" +link}>{link}</a>
    
  ))

  return <nav>{arrList}</nav>;
}

export default NavBar;
