import React from 'react';
import './Timeline.css'

const Timeline = ({ expander }) => {
  // Define the timeline data
  const timelineData = [
    { season: 'Spring', year: 2023 },
    { season: 'Fall', year: 2022 },
    { season: 'Spring', year: 2022 },
    { season: 'Fall', year: 2021 },
    { season: 'Spring', year: 2021 },
    { season: 'Fall', year: 2020 },
    { season: 'Spring', year: 2020 },
    { season: 'Fall', year: 2019 },
    { season: 'Spring', year: 2019 },
    { season: 'Fall', year: 2018 },
    // { season: 'Spring', year: 2018 },
  ];

  return (
    <div className="timeline">
      {timelineData.map((item, index) => (
        <div
          key={index}
          className="timeline-item"
          style={{ height: `${expander * item.year}px` }}
        >
          <div className="timeline-content">
            <p>{item.season} {item.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
