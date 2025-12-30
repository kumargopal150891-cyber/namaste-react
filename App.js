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

import React from "react";
import { createRoot } from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "1" }, [
    React.createElement(
      "h1",
      { id: "heading1", key: 1 },
      "hello world from React!"
    ),
    React.createElement(
      "h1",
      { id: "heading-label1", key: 2 },
      "Sibling heading"
    ),
  ]),
  React.createElement("div", { id: "child2", key: 2 }, [
    React.createElement(
      "h1",
      { id: "heading2", key: 1 },
      "hello world from React!"
    ),
    React.createElement(
      "h1",
      { id: "heading-label2", key: 2 },
      "Sibling headin243223oppakm"
    ),
  ]),
]);

console.log(parent);
const root = createRoot(document.getElementById("root"));
root.render(parent);
