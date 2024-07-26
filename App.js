//Creates an element and the object is returned is stored in the heading
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);
//create a root for rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
//heading is rendered on the root to create h1 tag (converts to tag h1)
root.render(heading);
//----------------------------------------------------------------------------
