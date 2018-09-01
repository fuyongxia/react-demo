/**
 * Created by fuyongxia on 2018/8/31.
 */
/**
 * Created by fuyongxia on 2018/8/31.
 */
import React,{Component} from 'react'
import './style.css'

export default class Catogory extends Component{
    // constructor(props){
    //     super(props)
    //     this.state={index:0}
    // }
    render(){
        let arrs=[
            [{context:"美食"},
            {context:"电影"},
            {context:"酒店住宿"},
            {context:"休闲娱乐"},
            {context:"外卖"}],
            [{context:"打车"},
            {context:"旅游"},
            {context:"美容"},
            {context:"景点门票"},
            {context:"跑腿"}]


        ]

        return   <div className="catogory" >
            {arrs.map((item,index,arr)=>{

                return <ul className="flex-row" key={index}>
                    {item.map((item,index,ar)=>{
                    return <li className="flex-1"  key={index}>
                    <div><i className="fa fa-amazon"></i></div>
                    <div className="padder-sm">{item.context}</div>
                    </li>
                })}
                </ul>
            })}



        </div>





    }
}