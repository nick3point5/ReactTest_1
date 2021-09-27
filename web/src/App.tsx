import { useState, createContext } from "react";
import "./App.css";
import routes from "./routes/routes";
import Footer from "./components/FooterComponent/Footer";
import Navbar from "./components/NavbarComponent/Navbar";

export const colorContext = createContext<any>(null);

function App() {
	const [color, setColor] = useState("lightskyblue");
	return (
		<colorContext.Provider value={setColor}>
			<div className="App" style={{ backgroundColor: color }}>
				<Navbar />
				{routes}
				<Footer />
			</div>
		</colorContext.Provider>
	);
}

export default App;
