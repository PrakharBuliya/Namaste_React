import React from "react";
import ReactDOM from "react-dom/client";

// const heading1 = React.createElement(
//   "h1",
//   { id: "title", key: "h1" },
//   "Hello Everyone, I am react"
// );

// const heading2 = React.createElement(
//   "h1",
//   { id: "title", key: "h2" },
//   "Hello Everyone, I am react part 2"
// );

// const container = React.createElement("div", { id: "container" }, [
//   heading1,
//   heading2,
// ]);

const Title = () => (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

//React Components
//Functional COmponent

const HeaderComponent = () => (
  <div>
    <h1>Functional Component</h1>
    <Title />
    <h2>this is a h2 tag </h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
