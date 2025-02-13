import React from "react";
import { Button } from "./ui/button";

function Die(props) {
  return (
    <>
      <Button
        className={props.isHeld ? "bg-green-500" : "bg-white text-black"}
        onClick={() => props.holdId(props.id)}
        size="lg"
      >
        {props.value}
      </Button>
    </>
  );
}

export default Die;
