import TreeDiagram from './Components/TreeDiagram'
import data from './Components/data.json'
import { calculateJsonDepth } from './Components/calculateJsonDepth';

import './App.css'

function App() {

  const numTrees = 4;

  const depth = calculateJsonDepth(data);

  // console.log(depth);

  return (
    <>
      <TreeDiagram numTrees = {numTrees} data = {data} depth = {depth}></TreeDiagram>

    </>
  )
}

export default App
