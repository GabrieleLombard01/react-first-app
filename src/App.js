import NavBar from "./components/AppNavBar";
import Card from './components/AppCards';

function App() {
	return (
    <>
      <NavBar/>
      <div className="container">
        <h1 className="text-center fw-bold fs-3 pt-2">Cosa desideri mangiare?</h1>
        <hr/>
        <div className="row">
          <Card/>
        </div>
      </div>
    </>
	);
}

export default App;
