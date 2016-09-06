import {ReduceStore} from 'flux/utils';
import Dispatcher from '../Dispatcher';

class MainData extends ReduceStore {
  getInitialState() {
    return {
      key1: 'value1',
      key2: 'value2'
    };
  }

  reduce(state, action) {
    switch (action.type) {
    case 'LOAD_INIT_DATA':
      return Object.assign({}, state, {
        mainData: action.mainData
      });
      break;

    default:
      return state;
    }
  }

  getItems() {
    return this.getState().mainData;
  }
}

export default (new MainData(Dispatcher));
