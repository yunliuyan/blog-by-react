import React from 'react';
import MenuLevel from '../sources/public/MenuLevel';

require('styles/header.less');

const menuitems = [
 {
    text: "首页",
    url: "",
    submenu: []
 },
  {
    text: '凡尘随笔',
    url: 'http://qq.com',
    submenu: []
  },
  {
    text: '唐诗宋词',
    url: 'http://qq.com',
    submenu: [
      {
        text: '唐诗',
        url: 'http://qq.com',
      },
      {
        text: '宋词',
        url: 'http://qq.com',
      }
    ]
  },
  {
    text: '文言小摘',
    url: 'http://qq.com',
    submenu: []
  },
  {
     text: '前端之路',
     url: ' ',
     submenu: [
          {
          	text: ' react',
          	url: ''
          },
          {
          	text: 'javascript',
          	url: ''
          },
          {
          	text: 'php',
          	url: ' '
          }
     ]
  }
]

class header extends React.Component {
	  constructor() {
		    super();

		    this.state = {
		      showMenuItem: -1,
		      showSubMenuItem: -1,
		    }
             }

	  handleMenuLevelHover = (index) => {
	         this.setState({ showMenuItem: index });
	  }

	  handleMenuLevelLeave = () => {
	         this.setState({ showMenuItem: -1 })
	  }

	  handleSubMenuLevelHover = (index, e) => {
		    this.setState({
		      showMenuItem: index,
		      showSubMenuItem: +e.target.getAttribute('data-id')
		    })
	  }

	  handleSubMenuLevelLeave = (e) => {
	            this.setState({ showSubMenuItem: -1 })
	  }

	  render() {
		    return (
		    <div>
		      <ul> 
                                  <li className="header-nav">云博客</li>
			      {
			          menuitems.map((level, index) => (
			             <MenuLevel
			               text={level.text}
			               url={level.url}
			               key={index}
			               index={index}
			               onMouseOver={() => { this.handleMenuLevelHover(index) }}
			               onMouseLeave={this.handleMenuLevelLeave}
			               onSubItemMouseOver={(e) => { this.handleSubMenuLevelHover(index, e) }}
			               onSubItemMouseLeave={this.handleSubMenuLevelLeave}
			               showSubMenuItem={this.state.showSubMenuItem}
			               showMenuItem={this.state.showMenuItem}
			             >
			               {level.submenu}          
			             </MenuLevel>
			           ))
			       }
		       </ul>   
		         <div className="row form-group search-group">
		               <input type="text" className="col-md-9 form-input" placeholder="搜索....."/>
		               <button type="submit" className="col-md-3 btn btn-default">查询</button>
		         </div>
		         <div className="row bg-img">
		              <div className="col-md-1"></div>
                                      <div className="dream col-md-3">选择一片草原，养一只小熊，两只兔子。和它们一起在草原上放风筝......</div>
		              <div className="code col-md-4"><img height="120px" width="300px" src={require('../images/background.jpg')} /></div>
		               <div className="col-md-4"><img className="my-photo" height="120px" width="120px" src={require('../images/my.jpg')} /></div>
		         </div>
		       </div>
		    )
	  }
}

export default header;