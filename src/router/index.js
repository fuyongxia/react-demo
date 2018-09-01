/**
 * Created by fuyongxia on 2018/8/30.
 */
import React from 'react';
import {Route,BrowserRouter,Redirect} from 'react-router-dom'
import Home from '../pages/home/index.js';
import City from '../pages/city/index.js';

let routesConfig=<BrowserRouter basename="/">
                    <div className="height-all">
                        <Route exact path="/" render={()=>(
                        <Redirect to="/home"></Redirect>
                        )}>
                        </Route>
                        <Route path="/home" component={Home}/>
                        <Route path="/city" component={City}/>
                        
                    </div>
                </BrowserRouter>
export default routesConfig