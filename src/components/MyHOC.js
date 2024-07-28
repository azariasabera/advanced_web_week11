import React from 'react';

const MyHOC = (OriginalComponent, {name}) => {
  return (props) => {
    return (
      <div className="wrapper">
        <OriginalComponent {...props} name={name} />
      </div>
    );
  };
};

export default MyHOC;
