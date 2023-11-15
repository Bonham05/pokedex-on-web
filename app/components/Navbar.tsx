import React from "react";
// import localFont from "next/font/local";

// const pokeFont = localFont({
//   src: "../styles/fonts/pkmn_s.ttf",
//   // weight: "800",
//   // style: "Regular",
// });

function Navbar() {
  return (
    <>
      <div className="p-5 flex flex-col items-center text-xl font-semibold bg-green-200 max-w-screen-md">
        ポケモンずかん on Web
      </div>
    </>
  );
}

export default Navbar;
