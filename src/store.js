import { createStore, combineReducers, applyMiddleware } from 'redux';
import { orderReducer } from './redux/order/reducer';
import { customerReducer } from './redux/customer/reducer';
import { productReducer } from './redux/product/reducer';
import thunk from 'redux-thunk';

const combinedReducer = combineReducers({
    order: orderReducer,
    customer: customerReducer,
    product: productReducer
})

const store = createStore(combinedReducer, applyMiddleware(thunk));

export default store;