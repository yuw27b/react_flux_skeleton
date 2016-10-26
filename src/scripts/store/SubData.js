import {ReduceStore} from 'flux/utils';
import Dispatcher from '../Dispatcher';

class SubData extends ReduceStore {
  getInitialState() {
    return {text: 'Sub data text'};
  }

  reduce(state, action) {
    switch (action.type) {
    case 'LOAD_INIT_DATA':
      console.log('bbb');
      return Object.assign({}, state, {
        subData: action.subData
      });
      break;

    default:
      return state;
    }
  }

  getItems() {
    return this.getState().subData;
  }
}

export default (new SubData(Dispatcher));
