import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";
import "./App.css";

//const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

export function App() {
  //Use the useCatImage custom hook to get the imageUrl
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleclick = async () => {
    refreshFact();
  };

  return (
    <main>
      <h1>Kittens App</h1>

      <button onClick={handleclick}>Get a new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={`${imageUrl}`}
          //src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
          alt={`Image extracted using the first three words from ${fact}`}
        />
      )}
    </main>
  );
}
