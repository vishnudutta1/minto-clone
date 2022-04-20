import {STORE_DATA} from './actionTypes.js'

// action will always return object

const storeData= (payload)=> ({

    type: STORE_DATA,
    payLoad: payload

})

export {storeData}