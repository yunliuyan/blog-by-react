import React from 'react';
import { Router, Route, Link } from 'react-router';
require('styles/home.less');

import Index from './Index';
class category extends React.Component{
	render(){
		return(
                               <div>
                                 <Index />
                                <Link to="/Index">跳转Index页面</Link>
                               </div>
		)
	}
}
export default category;