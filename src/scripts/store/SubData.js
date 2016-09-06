import {ReduceStore} from 'flux/utils';
import Dispatcher from '../Dispatcher';

class SubData extends ReduceStore {
  getInitialState() {
    return 'Sub data text';
  }

  reduce(state, action) {
    switch (action.type) {
    case 'LOAD_INIT_DATA':
      return Object.assign({}, state, {
        SubData: action.SubData
      });
      break;

    default:
      return state;
    }
  }

  getItems() {
    return this.getState().SubData;
  }
}

export default (new SubData(Dispatcher));
