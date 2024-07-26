import './App.css';
import MapLoader from './components/MapLoader/MapLoader';
import ExplorerMap from './components/ExplorerMap/ExplorerMap';
import UphillBox from './components/UphillBox/UphillBox';

function App() {
  return (
    <div className="App">

      <MapLoader />
      <ExplorerMap />
      <UphillBox /> 

    </div>
  );
}

export default App;
