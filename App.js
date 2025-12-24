/* <div id="parent">
    <div id="child1">
        <h1>

        </h1>
         <h1>

        </h1>
    </div>
     <div id="child2">
        <h1>

        </h1>
         <h1>

        </h1>
    </div>
    
</div> */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading1" }, "hello world from React!"),
    React.createElement("h1", { id: "heading-label1" }, "Sibling heading"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading1" }, "hello world from React!"),
    React.createElement("h1", { id: "heading-label1" }, "Sibling heading"),
  ]),
]);

// JSX
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React"
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
