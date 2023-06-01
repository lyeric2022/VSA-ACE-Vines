import React, { useEffect } from 'react';
import TreeDiagram from './Components/TreeDiagram';
import data from './Components/data.json';
import { calculateJsonDepth } from './Components/calculateJsonDepth';
import Timeline from './Components/Timeline';

import './App.css';

function App() {
  const numTrees = 4;
  const depth = calculateJsonDepth(data);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      console.log(screenWidth);
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
    };
  }, []);

  return (
    <>
      <div className="container">
        <div id="treeDiagram">
          <TreeDiagram numTrees={numTrees} data={data} depth={depth} />
        </div>
        <div id="timeline">
          <Timeline />
        </div>
      </div>
      <div className="credits">
        Made by Eric Ly ◕ ‿ ◕... with help from Ryan Chen, Alex Lu, Rita, David Luu, Norman Pham, Vincent Ho, and Isabella Vuong.
      </div>
    </>
  );
}

export default App;
