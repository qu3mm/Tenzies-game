import React, { useState } from "react";
import Die from "./components/Die";
import { Button } from "./components/ui/button";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = useState(() => generateAllNewDice());
  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  function generateAllNewDice() {
    return new Array(10).fill().map(() => ({
      value: Math.ceil(Math.random() * 10),
      isHeld: false,
      id: nanoid(),
    }));
  }

  const diceElement = dice.map((num) => (
    <Die
      key={num.id}
      value={num.value}
      isHeld={num.isHeld}
      holdId={holdId}
      id={num.id}
    />
  ));

  function rollDice() {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 10) }
      )
    );
  }

  function holdId(id) {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  return (
    <>
      {gameWon && <Confetti />}
      <div className="bg-white-700 min-h-screen flex flex-col items-center justify-center">
        <Header />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 grid-rows-2 gap-4">
          {diceElement}
        </div>
        <div className="flex flex-row justify-center mt-4">
          <Button size="lg" variant="destructive" onClick={() => gameWon ? setDice(generateAllNewDice()) : rollDice()}>
            {gameWon ? "New game" : "Roll Dice"}
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
