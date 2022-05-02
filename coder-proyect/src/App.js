import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
          <Route path="/car/:carid" element={<ItemDetailContainer/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
