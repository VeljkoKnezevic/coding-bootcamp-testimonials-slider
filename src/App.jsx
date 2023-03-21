import { useState } from "react";
import Cards from "./components/Cards";

import "./styles/styles.scss";

function App() {
  const [showFirst, setShowFirst] = useState(true);

  return (
    <main>
      <h1 className="visuallyhidden">Coding Bootcamp testimonials</h1>
      <Cards showFirst={showFirst} setShowFirst={setShowFirst} />
    </main>
  );
}

export default App;
