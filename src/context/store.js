import { createStore} from "redux";
import myReducers from "./reducers";

const Store=  createStore(myReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default Store; 
