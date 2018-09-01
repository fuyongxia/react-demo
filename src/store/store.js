/**
 * Created by fuyongxia on 2017/12/22.
 */
import {createStore,applyMiddleware} from 'redux';
import Reducer from './reducer/index';
import thunkMiddleware from 'redux-thunk';
import {getDetailAction,fetchPackageAction} from './action.js'
// let store=createStore(abReducer,{a:{}});
// let store=createStore(abReducer,applyMiddleware(thunkMiddleware));//一种写法
let store=createStore(Reducer,{},applyMiddleware(thunkMiddleware));//一种写法
// let store=applyMiddleware(thunkMiddleware)(createStore)(Reducer)//另一种写法


export default store;