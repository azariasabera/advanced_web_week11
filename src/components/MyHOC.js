import React from 'react';

const MyHOC = (OriginalComponent, {name}) => {
  return () => {
    return (
      <div className="wrapper">
        <OriginalComponent name={name}  />
      </div>
    );
  };
};

export default MyHOC;
