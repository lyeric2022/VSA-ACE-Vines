import React from 'react';
import './Timeline.css'

const Timeline = () => {
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
  ];

  return (
    <div className="timeline">
      {timelineData.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-content">
            <h3>{item.season} {item.year}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
