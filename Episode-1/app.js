/*
<div id="parent">
   <div id="child">
          <h1>I'm an H1 tag</h1>
   </div>
</div>
*/

const parent = React.createElement("div", { id: "parent" }, [React.createElement(
    "div",

    { id: "child" },
    [
      React.createElement("h1", {}, "I'm an H1 Tag"),
      React.createElement("h2", {}, "I'm an H2 Tag"),
    ]
  ),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an H1 Tag"),
    React.createElement("h2", {}, "I'm an H2 Tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World in React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
