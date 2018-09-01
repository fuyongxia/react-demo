/**
 * Created by fuyongxia on 2018/8/30.
 */
export default function userInfo(state={},action){
    // debugger;
    if(action.type=="SET_CITYNAME"){
        return Object.assign({},state,{cityName:action.param})
    }
    return state;
}