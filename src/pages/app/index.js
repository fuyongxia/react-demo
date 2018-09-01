/**
 * Created by fuyongxia on 2018/8/30.
 */
import React,{Component} from 'react'
import router from  '../../router/index'
import {connect} from 'react-redux'
import {setCityNameAction,getCityLikeList} from '../../store/action'

 class App extends Component{
     constructor(props){
         super(props)
         var cityName=localStorage.getItem('CITY_NAME')
         this.props.dispatch(setCityNameAction(cityName))
         this.props.dispatch(getCityLikeList(cityName))
     }
     componentDidMount(){

     }
    render(){
        return <div className="height-all">{router}</div>
    }
}
export default connect()(App)