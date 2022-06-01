import { createStore } from "redux";
import reducerRedux from "../reducers/reducer";

const store = createStore(reducerRedux);

export default store;