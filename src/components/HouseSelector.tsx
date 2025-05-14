"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";

const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];

export default function HouseSelector() {
  const [house, setHouse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      const randomHouse = houses[Math.floor(Math.random() * houses.length)];
      setHouse(randomHouse);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="text-center">
      <Button onClick={handleClick} disabled={loading}>
        {loading ? "Choosing..." : "Put me in a house lil shid"}
      </Button>
      {house && <p className="mt-2">You belong to {house}</p>}
    </div>
  );
}
"use client";

import { useState } from "react";

export default function HouseSelector() {
  const [house, setHouse] = useState<string | null>(null);

  const analyzeHouse = () => {
    const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
    const randomHouse = houses[Math.floor(Math.random() * houses.length)];
    setHouse(randomHouse);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={analyzeHouse}
      >
        put me in a house lil shid
      </button>
      {house && (
        <p className="mt-2 text-lg text-center">
          You belong to <span className="font-bold">{house}</span>
        </p>
      )}
    </div>
  );
}
