import {createStore ,combineReducers} from "redux"
import appointment from "./reducers/appointment"
import clinics  from "./reducers/clinics"

const reducers = combineReducers({appointment, clinics})

const store = createStore(reducers)

export default store