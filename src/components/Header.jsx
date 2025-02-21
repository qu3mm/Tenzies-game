import React from "react";

function Header() {
  return (
    <div className="text-center ">
      <h1 className="text-lg font-bold">Tenzies Game</h1>
      <p className="m-4">
        roll untill all dice are the same. click each dice to freeze it at its
        current value between rolls
      </p>
    </div>
  );
}

export default Header;
