import './App.css';
import MapLoader from './components/MapLoader/MapLoader';
import ExplorerMap from './components/ExplorerMap/ExplorerMap';
import UphillBox from './components/UphillBox/UphillBox';
import NeutronStar from './components/NeutronStar/NeutronStar';
import BatLoader from './components/BatLoader/BatLoader';

function App() {
  return (
    <div className="App">

      <MapLoader />
      {/* <ExplorerMap /> */}
      <UphillBox /> 
      <NeutronStar />
      <BatLoader /> 

    </div>
  );
}

export default App;
