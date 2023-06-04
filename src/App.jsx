import React, { useEffect, useState } from 'react';
import TreeDiagram from './Components/TreeDiagram';
import data from './Components/data.json';
import { calculateJsonDepth } from './Components/calculateJsonDepth';
import Timeline from './Components/Timeline';

import './App.css';

let musicIsPlaying = false;
let myMusic = new Audio("src/assets/unlove.mp3");
let expander = 1;
myMusic.volume = 0.05;


function App() {
  const numTrees = 4;
  const depth = calculateJsonDepth(data);
  let screenWidth;

  const transitionSpeed = 750;

  const [timelineVisible, setTimelineVisible] = useState(true);
  const [selectedLine, setSelectedLine] = useState('Button 1');
  const [showDiagram, setShowDiagram] = useState(true);

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
    if (!musicIsPlaying) {
      myMusic.play();
      musicIsPlaying = true;
    }
    setTimeout(() => {
      setSelectedLine(event.target.value);
    }, transitionSpeed);
    setShowDiagram(false); // Hide the diagram initially
    setTimeout(() => {
      setShowDiagram(true); // Show the diagram after 1 second
    }, transitionSpeed);
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
          className={selectedLine === 'All Lines' ? 'selected' : ''}
          onClick={() => setTimeout(() => expander = 1, handleLineSelection({ target: { value: 'All Lines' } }), transitionSpeed)}
        >
          All Lines
        </button>
        <button
          className={selectedLine === 'Doan Dynasty' ? 'selected' : ''}
          onClick={() => setTimeout(() => expander = 1.1, handleLineSelection({ target: { value: 'Doan Dynasty' } }), transitionSpeed)}
        >
          Doan Dynasty
        </button>
        <button
          className={selectedLine === 'Cactus Fam' ? 'selected' : ''}
          onClick={() => setTimeout(() => expander = 1.1, handleLineSelection({ target: { value: 'Cactus Fam' } }), transitionSpeed)}
        >
          Cactus Fam
        </button>
        <button
          className={selectedLine === 'Original Oldies' ? 'selected' : ''}
          onClick={() => setTimeout(() => expander = 1.1, handleLineSelection({ target: { value: 'Original Oldies' } }), transitionSpeed)}
        >
          Original Oldies
        </button>
      </div>
      <div className="container" style={{ width: 1500 }}>
        <div id="treeDiagram" style={{ opacity: showDiagram ? 1 : 0, transition: 'opacity 1s' }}>
          <TreeDiagram numTrees={numTrees} data={data} depth={depth} lineName={selectedLine} />
        </div>
        <div id="timeline" expander={expander} style={{ display: timelineVisible ? 'block' : 'none' }}>
          <Timeline />
        </div>
      </div>
      <div className="credits" style={{ width: 1500 }}>
        Made by Eric Ly &#123;@lyy.eric&#125; ◕ ‿ ◕... with help from Ryan Chen, Alex Lu, Rita, David Luu, Norman Pham, Vincent Ho, and Isabella Vuong.
      </div>
      <div id="black-space"></div>
    </>
  );
}

export default App;
