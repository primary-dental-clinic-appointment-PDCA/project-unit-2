import {createStore , combineReducers} from 'redux'

import PatientReducer from './Reducer/PatientAppointment'

const reducer = combineReducers({PatientReducer})

const store = createStore(reducer)

export default store;