import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";

import Cart from "./Routes/Cart";
function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/cart" element={<Cart />}></Route>
		</Routes>
	);
}

export default App;
