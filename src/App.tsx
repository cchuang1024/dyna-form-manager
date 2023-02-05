import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    axios.get("/api/time").then((response) => {
      console.log(response);
      const { data } = response;
      setTime(data.current_time);
    });
  }, []);
  return (
    <div>
      <p>{time}</p>
    </div>
  );
}

export default App;
