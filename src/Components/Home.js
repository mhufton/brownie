import React from "react";

import bfx_logoslug_white from "../media/bfx_logoslug_white.png"
  
export default function Home() {
  return (
    <div className="bg-dark min-h-screen text-white">
      Home
      <img src={bfx_logoslug_white} alt="BrownieFX Logo" className="px-2" />
    </div>
  );
}