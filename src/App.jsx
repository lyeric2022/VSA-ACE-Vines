import TreeDiagram from './Components/TreeDiagram'
import data from './Components/data.json'

import './App.css'

function App() {

  const numTrees = 4;

  return (
    <>
      <TreeDiagram numTrees = {numTrees} data = {data}></TreeDiagram>

    </>
  )
}

export default App
