/**
 * Created by fuyongxia on 2018/8/31.
 */
import React,{Component} from 'react'
import ReactSwipe from 'react-swipe';
import './style.css'
import img1 from '../../../images/d.jpg'
import img2 from '../../../images/b.jpg'
import img3 from '../../../images/c.jpg'
export default class SwipeImage extends Component{
    constructor(props){
        super(props)
        this.state={index:0}
    }
    render(){
        const options={
            auto:2000,
            callback:(index)=>{
                
                this.setState({index:index})
            }
        }

        return   <div className="carousel" >
                <ReactSwipe   swipeOptions={options}>
                    <img src={img1} alt=""/>
                    <img src={img2} alt=""/>
                    <img src={img3} alt=""/>
                </ReactSwipe>
                <ul className="text-center" >
                    <li className={this.state.index===0?'selected':''}>   </li>
                    <li className={this.state.index===1?'selected':''}>    </li>
                    <li className={this.state.index===2?'selected':''}>    </li>
                </ul>

                </div>
    }
}