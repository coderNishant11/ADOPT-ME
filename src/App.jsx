import { createRoot } from "react-dom/client";

const App = () => {
  return <h1 className="logo">Helloworld</h1>;
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
