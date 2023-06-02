import React, { useEffect } from 'react';
import TreeDiagram from './Components/TreeDiagram';
import data from './Components/data.json';
import { calculateJsonDepth } from './Components/calculateJsonDepth';
import Timeline from './Components/Timeline';

import './App.css';

function App() {
  const numTrees = 4;
  const depth = calculateJsonDepth(data);
  let screenWidth;

  useEffect(() => {
    function handleResize() {
      screenWidth = window.innerWidth;
      if (screenWidth < 1000) {
        document.body.style.width = '1500px';
      } else {
        document.body.style.width = '';
      }
    }

    handleResize(); // Call it once to set the initial width

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      console.log(screenWidth);
    };
  }, []);

  return (
    <>
      <div className="container" style={{ width: 1500 }}>
        <div id="treeDiagram">
          <TreeDiagram numTrees={numTrees} data={data} depth={depth}  />
        </div>
        <div id="timeline">
          <Timeline />
        </div>
      </div>
      <div className="credits" style={{ width: 1500 }}>
        Made by Eric Ly ◕ ‿ ◕... with help from Ryan Chen, Alex Lu, Rita, David Luu, Norman Pham, Vincent Ho, and Isabella Vuong.
      </div>
    </>
  );
}

export default App;
