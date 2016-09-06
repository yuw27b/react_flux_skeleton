import Dispatcher from './Dispatcher';
import {fetchInitData} from './util/util-ajax';

class ActionCreator {}

ActionCreator.loadInitData = () => {
  return fetchData().then((res) => {
    Dispatcher.dispatch({
      type: 'LOAD_INIT_DATA',
      mainData: res[0],
      subData: res[1]
    })
  });
};

ActionCreator.clickItem = (item) => {
  Dispatcher.dispatch({
    type: 'CLICK_ITEM',
    item
  });
};

export default ActionCreator;
