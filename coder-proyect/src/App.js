import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CCProvider } from "./store/CartContext";
import CartPage from "./components/CartPage";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <CCProvider>
        <Router>
          <NavBar />
          <Routes>
            {/* <Route path="/" element={<HomePage/>}/> */}
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryid"
              element={<ItemListContainer />}
            />
            <Route path="/car/:carid" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartPage/>}/> 
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </Router>
      </CCProvider>
    </div>
  );
}

export default App;
