import Dispatcher from './Dispatcher';
import {fetchData} from './util/util-ajax';

class ActionCreator {}

ActionCreator.loadInitData = () => {
  return fetchData().then((res) => {
    Dispatcher.dispatch({
      type: 'LOAD_INIT_DATA',
      mainData: res.mainData,
      subData: res.subData
    })
  });
};

ActionCreator.clickItem = (item) => {
  Dispatcher.dispatch({
    type: 'CLICK_ITEM'
  });
};

export default ActionCreator;
