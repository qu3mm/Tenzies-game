import React from "react";
import { Button } from "./ui/button";

function Die({ isHeld, id, value, holdId }) {
  return (
    <>
      <Button
        className={isHeld ? "bg-green-500 hover:bg-green-400" : undefined}
        onClick={() => holdId(id)}
        size="lg"
      >
        {value}
      </Button>
    </>
  );
}

export default Die;
