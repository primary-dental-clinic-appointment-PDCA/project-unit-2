import {createStore ,combineReducers} from "redux"
import appointment from "./reducers/appointment"

const reducers = combineReducers({appointment})

const store = createStore(reducers)

export default store