require('styles/reset.less');
require('styles/home.less');
import React from 'react';
import { Router, Route, Link } from 'react-router';

import Header from './header';
import Footer from './footer';
import Left from './left';

class App extends React.Component{
	render(){
		return (
			<div className="body-bg">
				<Header />
				 <div className="content-bg row">
                                                      <div className="col-md-4"><Left /></div>
                                                      <div className="col-md-8"> {this.props.children}</div>
				 </div>
				<Footer />
			</div>
  		);
	}
};



export default App;