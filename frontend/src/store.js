import {createStore , combineReducers} from 'redux'

import PatientAppointment from './Reducer/PatientAppointment'

const reducer = combineReducers({PatientAppointment})

const store = createStore(reducer)

export default store;