import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RouteList from "./RouteList";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <RouteList />
      </BrowserRouter>
    </>
  );
}

export default App;
