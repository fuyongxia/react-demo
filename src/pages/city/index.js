/**
 * Created by fuyongxia on 2018/9/1.
 */

/**
 * Created by fuyongxia on 2018/8/30.
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import Header from '../../components/header/index'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.css'
import hotCityes from '../../json/hotCity.json'
import {setCityNameAction,getCityLikeList} from '../../store/action'
import store from '../../store/store'
class City extends Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state={userInfo:this.props.userInfo}

    }
    clickHandle=(item)=>{
        this.props.dispatch(setCityNameAction(item))
        this.props.dispatch(getCityLikeList(item))
        this.props.history.push('/home')
        localStorage.setItem('CITY_NAME',item)

    }
    render(){
        return <div className="city">
            <Header title="选择城市"></Header>
            <div className="text-center currentCity">{this.state.userInfo.cityName}</div>
            <div className="hotCity">
                <h4>热门城市</h4>
                <div className="flex-row">
                    {hotCityes['hotCities'].map((item,index,arr)=>{
                        return <div className="flex-1" key={index} onClick={()=>{this.clickHandle(item)}}>{item}</div>
                    })}
                </div>

            </div>
        </div>
    }
}
const mapStateToProps=(state)=>{
    return {userInfo:state.userInfo}
}
export default connect(mapStateToProps)(City)