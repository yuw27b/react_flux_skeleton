export function fetchData() {
  return _dummyFetchData();
  //return _fetchData();
}

function _dummyFetchData() {
  const dummyData = {
    mainData: {key1: 'value1', key2: 'value2'},
    subData: {text: 'Sub data text'}
  }
  return new Promise(function(resolve, reject) {
    resolve(dummyData);
  });
}

function _fetchData() {
  const url = '/path/to/api'
  return new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function() {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(new Error(xhr.status));
      }
    };
    xhr.onerror = function() {
      reject(new Error(''));
    };
    xhr.send();
  });
}
