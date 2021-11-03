import './App.css';
import AppNavbar from './components/Navbar';
import AppContext from './context';
import Home from './pages/Home';

function App() {
// use it when something loads or something happens (useEffect)
  return (
    <AppContext>
    <div className = "jumbotron">
      <AppNavbar />
      <Home />
    </div>
    </AppContext>
  );
}

export default App;
