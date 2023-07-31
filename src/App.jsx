import { useEffect } from "react";
import { db } from "./firebase";

function App() {
  useEffect(() => {
    console.log(db);
  });

  return (
    <>
      하이!
    </>
  )
}

export default App
