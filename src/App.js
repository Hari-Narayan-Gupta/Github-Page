import { useState } from "react";
import "./App.css";
import FetchApi from "./Components/FetchApi";
import Main from "./Components/Main";
import Searchs from "./Components/Searchs";

function App() {
  const [user, setUser] = useState("");
  

  const username = (path) => {
    setUser(path);
  };

  
  return (
    <>
    {  user === "" ? <Searchs username={username} /> : null}
      
      {/* <Searchs username={username}/> */}

      {user === "" ? null : <Main user={user} />}
      {user === "" ? null : <FetchApi user={user} />}
    </>
  );
}

export default App;
