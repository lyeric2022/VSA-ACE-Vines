import TreeDiagram from './Components/TreeDiagram'
import data from './Components/data.json'
import { calculateJsonDepth } from './Components/calculateJsonDepth';
import Timeline from './Components/Timeline';

import './App.css'

function App() {

  const numTrees = 4;

  const depth = calculateJsonDepth(data);

  // console.log(depth);

  return (
    <>
      <div className="container">
        {/* <Timeline></Timeline> */}
        <TreeDiagram numTrees={numTrees} data={data} depth={depth}></TreeDiagram>
      </div>
    </>
  )
}

export default App
