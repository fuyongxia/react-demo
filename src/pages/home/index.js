
/**
 * Created by fuyongxia on 2018/8/30.
 */
import React,{Component} from 'react'
import routeChildren from  './route'
import HomeHeader from './header/index'
import SwipeImage from './swipe'
import Catogory from './catogory'
import LikeList from './likeList'
import PureRenderMixin from 'react-addons-pure-render-mixin'
export default class Home extends Component{
    constructor(props){
        super(props)
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)
        
    }
    render(){
        return <div className="height-all">
            <HomeHeader ></HomeHeader>
            <SwipeImage></SwipeImage>
            <Catogory></Catogory>
            <LikeList></LikeList>


            {routeChildren}
        </div>
    }
}