import React from 'react';

const Timeline = () => {
  // Define the timeline data
  const timelineData = [
    { season: 'Fall', year: 2021 },
    { season: 'Spring', year: 2022 },
    { season: 'Fall', year: 2022 },
    { season: 'Spring', year: 2023 },
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
