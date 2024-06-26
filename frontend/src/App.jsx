import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>how to integrate backend and frontend</h1>
      <p>JOKES : {jokes.length}</p>

      {jokes.map((joke) => {
        return (
          <div key={joke.id}>
            <h4>{joke.setup}</h4>
            <p>{joke.punchline}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
