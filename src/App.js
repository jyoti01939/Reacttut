import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar title="My App" aboutText="About MyApp"/>
      <div className="container my-5">
      <Textform heading="Enter The Text To Analyise"/>
      </div>
      
    </>
    
  );
}

export default App;
