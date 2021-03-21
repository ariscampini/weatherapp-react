import "./App.css";
import NavBar from "./NavBar";
import Location from "./Location";
import Temperature from "./Temperature";

export default function App() {
  return (
    <div className="App">
      <div className="card">
        <NavBar />
        <Location />
        <Temperature />
        <br />
        <div className="AdditionalInfo">
          <ul>
            <li>Humidity: 8% </li>
            <li>Wind: 15km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
