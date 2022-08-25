import React from "react";
import { NavLink } from "react-router-dom";

import bfx_logo_plain_white from "../media/bfx_logo_plain_white.png"

export default function Navigation() {
 
  return (
    <div className="fixed bottom-0 inset-x-0 bg-transparent items-center text-white text-[18px] px-2 flex justify-between whitespace-normal text-sm uppercase font-mono h-15">
      <NavLink to="/"><img src={bfx_logo_plain_white} alt="BrownieFX Logo" className="max-h-10"/></NavLink>
      <NavLink to="/Production_Design">Production Design</NavLink>
      <NavLink to="/Custom_Props">Custom Props</NavLink>
      <NavLink to="/About">About</NavLink>
    </div>
  )
}