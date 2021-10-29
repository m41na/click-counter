import React, { useState } from "react";
import Organizer from "./Organizer";
import Participant from "./Participant";
import StartBox from "./StartBox";

function App () {
  const [type, setType] = useState("");
  return (
    <main className="main">
      <section className="centered">
        {type === "" && <StartBox selectedType={setType} />}
        {type === "participant" && <Participant />}
        {type === "organizer" && <Organizer />}
      </section>
    </main>
  );
}

export default App;
