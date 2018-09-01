/**
 * Created by fuyongxia on 2018/8/30.
 */
/**
 * Created by fuyongxia on 2018/8/30.
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import './style.css'
class HomeHeader extends Component{
    constructor(props){
       
        super(props)
        this.state={userInfo:this.props.userInfo}
    }

    render(){
        return <div className="header flex-row color-white">
            <div className="flex-3 text-center">
                <Link to="/city">
                    <span>{this.state.userInfo.cityName}</span>
                    <i className="fa fa-angle-down"></i>
                </Link>
            </div>
            <div className="flex-4 text-center">
                
                <div className="header-input" >
                    <i className="fa fa-search"></i>
                    <input type="text" className="border-none" placeholder="请输入搜索的商品名称"/>
                </div>
            </div>
            <div className="flex-2 text-center">
                <i className="fa fa-user"></i>
            </div>

            
            </div>
    }
}
const mapStateToProps=(state)=>{
 
    return {userInfo:state.userInfo}
}
export default connect(mapStateToProps)(HomeHeader)