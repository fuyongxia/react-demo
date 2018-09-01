/**
 * Created by fuyongxia on 2018/8/31.
 */

/**
 * Created by fuyongxia on 2018/8/30.
 */
import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {getCityLikeList} from '../../../store/action'
import list from '../../../json/likeList.json'
import img from '../../../images/a.jpg'
import './style.css'
class LikeList extends Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            cityLikeList:[this.props.cityLikeList.slice(0,7)],
            showLoading:this.props.cityLikeList.length>0?true:false
            
        }
        this.count=0;


    }
    handleScroll=(event)=>{
        var docu=document.documentElement;
        if(docu.clientHeight+docu.scrollTop===docu.scrollHeight){
            this.count++;
            let arr=this.props.cityLikeList.slice(this.count*7,7*(this.count+1))
            if(arr.length>0){
                this.setState({cityLikeList:[...this.state.cityLikeList,arr]},()=> {
                        this.setState({showLoading: false})
                    })


                return;
            }
            this.showLast=true



        }
    };
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);


    }
    render(){
       return <div className="like-list">
           <div className="title">— 猜你喜欢 —</div>
            {this.state.cityLikeList.map((item,index,arr)=>{
                return <div key={index}>
                    {
                        item.map((item,index,arr)=>{
                            return <div key={index} className="flex-row">
                                <div className="flex-1">
                                    <img src={img} alt="" />
                                </div>

                                <div className="flex-2">
                                    <div className="shopName"> {item.shopName}</div>
                                    <div className="disc"> {item.grade}分 | {item.judgeCount}人已评价</div>
                                    <div className="disc"> {item.discribe}</div>
                                    <div>
                                        <span className="price">￥{item.price}</span>
                                        <span className="disc">起</span>
                                    </div>
                                </div>


                            </div>
                        })
                    }
                </div>


            })}
           <div className="text-center" style={{display:this.state.showLoading?"block":"none"}}>载入中...</div>
        </div>
    }
}
const mapStateToProps=(state)=>{
    return {cityLikeList:state.cityLikeList}
}
export default connect(mapStateToProps)(LikeList)