import React from 'react';
import {Container} from 'flux/utils';

import ActionCreator from './ActionCreator';

import MainDataStore from './store/MainData';
import SubDataStore from './store/SubData';

import FirstComponent from './component/FirstComponent.jsx';
import SecondComponent from './component/SecondComponent.jsx';

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
  return [MainDataStore, SubDataStore];
};

App.calculateState = (_prevState) => {
  return {
    mainData: MainDataStore.getItems(),
    subData: SubDataStore.getItems()
  };
};

const app = Container.create(App);

export default app;
