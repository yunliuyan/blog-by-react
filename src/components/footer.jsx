require('sources/bower_components/bower-pt-sans/styles/pt_sans.css')
require('styles/footer.less');

import React from 'react';

class footer extends React.Component{
	render(){
		return (
			<div className="footer">
				 © 2017 云流烟的博客
				<a className="" href="">homyit.studio</a>
				<a className="" href="">Jiangxi Normal University</a>
				<a href="">yunliuyan</a>
				<span className="spacer">|</span>
				<a className="facebook" href="">QQ</a>
				<a className="twitter" href="">wechat</a>
				<a className="google-plus" href="">github+</a>
			</div>
  		);
	}
};

export default footer;