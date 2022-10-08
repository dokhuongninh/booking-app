import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./page/home/Home";
import ListHotel from "./page/list/ListHotel";
import Hotel from "./page/hotel/Hotel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<ListHotel/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
      </Routes>
    </Router>
  );
}

export default App;
