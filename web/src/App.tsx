import './App.css';
import routes from './routes/routes';
import Footer from './components/FooterComponent/Footer'
import Navbar from './components/NavbarComponent/Navbar';


function App() {
  return (
    <div className="App">
			<Navbar/>
			{routes}
			<Footer/>
    </div>
  );
}

export default App;