import "./App.css";
import { HiPlusCircle } from "react-icons/hi";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <h1 className="headerText">Photowall</h1>
      <HiPlusCircle size={70} />
      <div className="cardWrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
