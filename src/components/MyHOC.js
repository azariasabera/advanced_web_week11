import React from 'react';

const MyHOC = (WrappedComponent, additionalProps) => {
  return (props) => {
    return (
      <div className="wrapper">
        <WrappedComponent {...props} {...additionalProps} />
      </div>
    );
  };
};

export default MyHOC;
