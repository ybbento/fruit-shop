import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import ShoppingCart from "./Routes/ShoppingCart";
function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/cart" element={<ShoppingCart />}></Route>
		</Routes>
	);
}

export default App;
