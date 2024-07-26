import './App.css';
import MapLoader from './components/MapLoader/MapLoader';
import ExplorerMap from './components/ExplorerMap/ExplorerMap';
import UphillBox from './components/UphillBox/UphillBox';
import NeutronStar from './components/NeutronStar/NeutronStar';

function App() {
  return (
    <div className="App">

      <MapLoader />
      {/* <ExplorerMap /> */}
      <UphillBox /> 
      <NeutronStar />

    </div>
  );
}

export default App;
