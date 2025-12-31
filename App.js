import React from "react";
import { createRoot } from "react-dom/client";

// React Element

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "This is react app"
// );

// JSX code transcpilled before it reaches to JS engine by parcel - babel
// JSX is not html in js
// it is html like syntax
// it is XML like syntax
// jsx => React.createElement => React elemet => render html
const jsxHeading = (
  <h1 className="heading" tabIndex="1">
    Namaste React using JSX
  </h1>
);
// React Component
// 1: Class based component - old
// 2: Functional component - new way of writing component
// React  functional component
// A javascript function which return jsx or rect element  is functional component
const number = 1000;
const HeadingComponent = () => {
  return (
    <div id="container">
      {Title()}
      <Title />
      <h1 className="heading" tabIndex="1">
        Namaste React Functional Component
      </h1>
    </div>
  );
};

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namste React using JSX
  </h1>
);

// const HeadingComponent = () => (
//   <h1 className="heading" tabIndex="1">
//     Namaste React using JSX
//   </h1>
// );
const root = createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
