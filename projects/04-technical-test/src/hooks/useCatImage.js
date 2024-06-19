import { useState, useEffect } from "react";

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  // Get an image url everytime the fact changes
  useEffect(() => {
    if (!fact) return;

    const threefirstWords = fact.split(" ", 3).join(" ");
    const url = `https://cataas.com/cat/says/${threefirstWords}`;
    setImageUrl(url);

    // En caso fetchemaos el json de la imagen con una propiedad url en el
    //fetch(`https://cataas.com/cat/says/${threefirstWords}?size=50&color=red&json=true`) //
    // .then((res) => res.json())
    // .then((response) => {
    //   const { url } = response;
    //   setImageUrl(url);
    // });
  }, [fact]);

  return { imageUrl };
}
