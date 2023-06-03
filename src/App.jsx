import React, { useEffect, useState } from 'react';
import TreeDiagram from './Components/TreeDiagram';
import data from './Components/data.json';
import { calculateJsonDepth } from './Components/calculateJsonDepth';
import Timeline from './Components/Timeline';

import './App.css';

function App() {
  const numTrees = 4;
  const depth = calculateJsonDepth(data);
  let screenWidth;

  const [timelineVisible, setTimelineVisible] = useState(true);
  const [selectedLine, setSelectedLine] = useState('Button 1');

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
    };
  }, []);

  const toggleTimelineVisibility = () => {
    setTimelineVisible(!timelineVisible);
  };

  const handleLineSelection = (event) => {
    setSelectedLine(event.target.value);
  };

  return (
    <>
      <div className="title" style={{ width: 1500 }}>
        ANH CHỊ EM Vines🌿Visualizer for VSA, at California State University, Fullerton
      </div>
      <div className="adjustable-buttons">
        <button onClick={toggleTimelineVisibility}>
          {timelineVisible ? 'Hide Timeline' : 'Show Timeline'}
        </button>
        <button
          className={selectedLine === 'Button 1' ? 'selected' : ''}
          onClick={() => handleLineSelection({ target: { value: 'Penis' } })}
        >
          Button 1
        </button>
        <button
          className={selectedLine === 'Doan Dynasty' ? 'selected' : ''}
          onClick={() => handleLineSelection({ target: { value: 'Doan Dynasty' } })}
        >
          Doan Dynasty
        </button>
        <button
          className={selectedLine === 'Button 3' ? 'selected' : ''}
          onClick={() => handleLineSelection({ target: { value: 'Button 3' } })}
        >
          Button 3
        </button>
        <button
          className={selectedLine === 'Button 4' ? 'selected' : ''}
          onClick={() => handleLineSelection({ target: { value: 'Button 4' } })}
        >
          Button 4
        </button>
        <button
          className={selectedLine === 'Button 5' ? 'selected' : ''}
          onClick={() => handleLineSelection({ target: { value: 'Button 5' } })}
        >
          Button 5
        </button>
        <button
          className={selectedLine === 'Button 6' ? 'selected' : ''}
          onClick={() => handleLineSelection({ target: { value: 'Button 6' } })}
        >
          Button 6
        </button>
      </div>
      <div className="container" style={{ width: 1500 }}>
        <div id="treeDiagram">
          <TreeDiagram numTrees={numTrees} data={data} depth={depth} lineName={selectedLine} />
        </div>
        <div id="timeline" style={{ display: timelineVisible ? 'block' : 'none' }}>
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
