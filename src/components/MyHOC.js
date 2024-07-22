import React from 'react';

// MyHOC is a higher-order component that takes a component and additional props
const MyHOC = (WrappedComponent, additionalProps) => {
  // Return a new component that wraps the original component with a div and passes additional props
  return (props) => {
    return (
      <div className="wrapper">
        <WrappedComponent {...props} {...additionalProps} />
      </div>
    );
  };
};

export default MyHOC;