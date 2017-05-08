import React from "react";
require('styles/left.less');

class Left extends React.Component {
	render(){
		return(
                             <div className="body-left">
                                   <div className="tell">
                                       <p className="notice">
                                       <i className="glyphicon glyphicon-bullhorn"></i>&nbsp;<span>前言</span>
                                       </p>
                                       <div className="tell-content">欢迎来到云流烟博客，这里是博主一切所闻所见所感，若无特别注明，均为原创，欢迎阅读，转载记得加上博主名字。</div>
                                   </div>    
                                   <div className="blog-instruction">
                                         <p className="blogger-id">
                                              <i className="glyphicon glyphicon-user"></i>&nbsp;<span>博主名片</span>
                                         </p>
                                         <div className="blogger-info">
                                               <p><span>昵称：云流烟</span></p>
                                                <p><span>家乡：江西省-九江市-都昌县</span></p> 
                                                <p><span>现居住地：江西省-南昌市</span></p>
                                                <p><span>园龄：18个月</span></p> 
                                                <p><span>爱好：听歌看书，诗词曲赋，代码编程</span></p>
                                                <p><span>偶像：许嵩，陈奕迅，村上春树</span></p>
                                         </div>
                                         <p className="blogger-id">
                                             <i className="glyphicon glyphicon-list-alt"></i>&nbsp;<span>最近文章</span>
                                         </p>
                                         <div className="new-blog-details" id="new-blog"> 
                                               <p><a href="javascript:;" data-go-route-reload="archive/detail/detail&amp;detailId=1">叶长夜长，何香荷香<span style={{float: "right"}}>/2031/12/06</span></a></p>
                                               <p><a href="javascript:;" data-go-route-reload="archive/detail/detail&amp;detailId=2">如梦令<span style={{float: "right"}}>/2028/10/04</span></a></p>  
                                               <p><a href="javascript:;" data-go-route-reload="archive/detail/detail&amp;detailId=7">七绝<span style={{float: "right"}}>/2017/05/09</span></a></p>  
                                               <p><a href="javascript:;" data-go-route-reload="archive/detail/detail&amp;detailId=4">如何成为文艺的程序员<span style={{float: "right"}}>/2017/01/13</span></a></p>  
                                               <p><a href="javascript:;" data-go-route-reload="archive/detail/detail&amp;detailId=3">愁与寂寞相伴，爱与孤独同存<span style={{float: "right"}}>/2016/09/19</span></a></p>  
                                        </div>
                                        <p className="blogger-id">
                                             <i className="glyphicon glyphicon-list"></i>&nbsp;<span>推荐文章</span>
                                         </p>
                                         <div className="new-blog-details" id="new-blog"> 
                                               <p><a href="javascript:;" data-go-route-reload="archive/detail/detail&amp;detailId=1">叶长夜长，何香荷香<span style={{float: "right"}}>2031/12/06</span></a></p>
                                               <p><a href="javascript:;" data-go-route-reload="archive/detail/detail&amp;detailId=2">如梦令<span style={{float: "right"}}>2028/10/04</span></a></p>  
                                               <p><a href="javascript:;" data-go-route-reload="archive/detail/detail&amp;detailId=7">七绝<span style={{float: "right"}}>2017/05/09</span></a></p>  
                                               <p><a href="javascript:;" data-go-route-reload="archive/detail/detail&amp;detailId=4">如何成为文艺的程序员<span style={{float: "right"}}>2017/01/13</span></a></p>  
                                               <p><a href="javascript:;" data-go-route-reload="archive/detail/detail&amp;detailId=3">愁与寂寞相伴，爱与孤独同存<span style={{float: "right"}}>2016/09/19</span></a></p>  
                                        </div>
                                    </div> 
                             </div>
		)
	}
}
export default Left;