import React from 'react';

const SecondComponent = (props) => {
  const {subData, clickItem} = props;
  return (
    <div id="secondComponent" className="second">
      <h3 className="first_title">Second component</h3>
      <button className="selectedItems_btn selectedItems_btn-reset" onClick={clickItem}>{subData}</button>
    </div>
  );
};

export default SecondComponent;
