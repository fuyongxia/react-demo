/**
 * Created by fuyongxia on 2018/9/1.
 */
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

class Header extends Component{
    clickHandle(){
        window.history.back()
    }
    render(){
        return <div className="commonHeader flex-row">
            <div className="flex-1 text-center" onClick={this.clickHandle}>

               <i className="fa fa-angle-left"></i>
            </div>
            <div className="flex-10 text-center title">
                {this.props.title}
            </div>
            


        </div>
    }
}
const mapStateToProps=(state)=>{

    return {userInfo:state.userInfo}
}
export default connect(mapStateToProps)(Header)