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
