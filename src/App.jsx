import { useEffect } from "react";
import { db } from "./firebase";
import Router from "./Router";

function App() {
  useEffect(() => {
    console.log(db);
  });

  return (
    <Router />
  )
}

export default App
