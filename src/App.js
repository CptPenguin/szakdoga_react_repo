import React, {useEffect} from "react";
import "./style.css";

export default function App() {
useEffect(() => {
  fetch('./JSONlog-0-7-A0.json')
  .then((response) => response.json)
  .then((json) => console.log(json));
}, [])
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

