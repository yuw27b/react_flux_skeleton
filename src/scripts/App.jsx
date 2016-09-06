import React from 'react';
import {Container} from 'flux/utils';

import ActionCreator from './ActionCreator';

import MainDataStore from './store/mainData';
import SubDataStore from './store/mainData';

import Status from './component/First.jsx';
import DonorList from './component/Second.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      clickItems: []
    };
  }

  render() {
    const {mainData, subData} = this.state;
    const {clickItem} = ActionCreator;
    return (
      <div>
        <FirstComponent mainData={mainData} />
        <SecondComponent subData={subData} clickItem={clickItem} />
      </div>
    );
  }
}

App.getStores = () => {
  return [Data1Store, Data2Store];
};

App.calculateState = (_prevState) => {
  return {
    mainData: MainDataStore.getItems(),
    subData: SubDataStore.getItems()
  };
};

const app = Container.create(App);

export default app;
