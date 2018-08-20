'use strict'

import data from '../../assets/Webdev_data.json'

console.log('test :: ', data);
let init = data[0]
console.log('INIT :: ', init);


export default (state = init, payload) => {
  return state
}
