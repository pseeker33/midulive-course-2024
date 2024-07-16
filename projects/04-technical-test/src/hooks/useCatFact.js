import { useState, useEffect } from "react";
import { getRandomFact } from "../services/facts";

export function useCatFact() {
  const [fact, setFact] = useState();

  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact));
  };

  //Do the fetching of a fact the first time the component is mounted
  useEffect(refreshFact, []);

  return { fact, refreshFact };
}
