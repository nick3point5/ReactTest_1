import './App.css';
import routes from './routes/routes';
import Footer from './components/FooterComponent/Footer'

function App() {
  return (
    <div className="App">
			{routes}
			<Footer/>
    </div>
  );
}

export default App;
