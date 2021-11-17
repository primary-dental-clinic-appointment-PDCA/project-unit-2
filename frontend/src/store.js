import {createStore ,combineReducers} from "redux"
import appointment from "./Reducers/appointment"
import clinics  from "./Reducers/clinics"
import PatientAppointment from "./Reducers/PatientAppointment"
const reducers = combineReducers({appointment, clinics,PatientAppointment})

const store = createStore(reducers)

export default store