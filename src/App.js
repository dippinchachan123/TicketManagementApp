import { TicketsViewContainer } from "./Containers/ViewTickets/ViewTickets";
import {ImageViewerContainer} from './Components/ImageViewer/ImageViewer'
import './App.scss'
import { containerData } from "./Data/ContainerData";

function App() {
  return (
    <div className="App" style={{padding : "50px"}}>
      <TicketsViewContainer />
    </div>
  );
}

export default App;
