import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
// import About from "./components/About";

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
// React Component
// 1: Class based component - old
// 2: Functional component - new way of writing component
// React  functional component
// A javascript function which return jsx or rect element  is functional component
import AppLayout from "./components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router";
// import About from "./components/About";
import ErrorComponent from "./components/ErrorComponent";
import Contact from "./components/Contact";
import Body from "./components/Body";
import { Cart } from "./components/Cart";
import RestaurentMenu from "./components/RestaurentMenu";
// import Grocerry from "./components/Grocerry";

// code chunking
// dynmic bundling
// code splitting
// lazy loading
// on demand loading

const Grocerry = lazy(() => {
  return import("./components/Grocerry");
});
const About = lazy(() => import("./components/About"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h2>loading...</h2>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/groccery",
        element: (
          <Suspense fallback={<h2>loading...</h2>}>
            <Grocerry />{" "}
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurent/:id",
        element: <RestaurentMenu />,
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
