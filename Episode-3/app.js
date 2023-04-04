import React from "react";
import ReactDOM from "react-dom/client"

const Title = () => (
  <h1 id="heading">
    Namaste React - Title
  </h1>
)

var Jsxheading = () => (
  <div >
    Namaste javascript - Parent
    <Title />
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Jsxheading />)