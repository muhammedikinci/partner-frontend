import { createStore, combineReducers, applyMiddleware } from 'redux';
import { orderReducer } from './redux/order/reducer';
import { customerReducer } from './redux/customer/reducer';
import thunk from 'redux-thunk';

const combinedReducer = combineReducers({
    order: orderReducer,
    customer: customerReducer
})

const store = createStore(combinedReducer, applyMiddleware(thunk));

export default store;