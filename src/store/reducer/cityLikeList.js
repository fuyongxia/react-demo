/**
 * Created by fuyongxia on 2018/8/31.
 */
import list from '../../json/likeList.json'

export default function cityLikeList(state=[],action){
    
    if(action.type=="GET_CITYLIKELIST"){

        return list[action.param]||[]
    }
    return state;
}