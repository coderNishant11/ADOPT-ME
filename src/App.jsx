import { createRoot } from "react-dom/client";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1 className="logo">Helloworld</h1>
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
