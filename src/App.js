import './App.css';
import Home from './Components/HomeComponent/Home';
import ContextProvider from './Context/ContextProvider';

function App() {
  return (
    <div className="App">
      <ContextProvider >
        <Home />
      </ContextProvider>
    </div>
  );
}

export default App;
