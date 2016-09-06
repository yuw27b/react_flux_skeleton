import React from 'react';

const FirstComponent = (props) => {
  const {mainData} = props;
  return (
    <div id="firstComponent" className="first">
      <h2 className="first_title">First component</h2>
      {Object.keys(mainData).map((item, idx) => {
        return (
          <div>{item}:{mainData[item]}</div>
        );
      })}
    </div>
  );
};

export default FirstComponent;
