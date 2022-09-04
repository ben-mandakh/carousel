import "./App.css";
import Carousel from "./components/Carousel";
import { countries } from "./components/Data";

function App() {
  return (
    <div className="App">
      {/* Carousel */}
      <Carousel images={countries} />
    </div>
  );
}

export default App;