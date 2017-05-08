import React from 'react';
import { Router, Route, Link } from 'react-router';
import reactDom from 'react-dom';
import Carousel from '../sources/public/carousel';
require('styles/index.less');


class Index extends React.Component{
      constructor(props){
         console.log(super(props));
      }
	render(){
		return (
			<div className="container">
			<Link to="/detail">跳转detail页面</Link>
			<Link to="/category">跳转category页面</Link>
                                            <div className="headline"><i className="glyphicon glyphicon-list-alt"></i>&nbsp;&nbsp;文章<span className="font-green">推荐</span></div>
                                            <div className="active">
                                                <article className="article-content">
                                                   <div className="title"><div className="square"></div><div className="essay-title">如何成为文艺的程序员</div></div>
                                                   <div className="row content">
                                                          <div className="col-md-4"><Carousel /></div>
                                                          <div className="col-md-8"><div className="essay-content"> <p>荷花是圣洁美丽的象征，她出污泥而洁白无暇，洒清香而天然独秀，极玲珑又纯洁谦虚，亭亭玉立，惹人喜爱。走近荷花池，首先映入眼帘的是一望无际的荷叶，像绿色的海洋。&nbsp;&nbsp;&nbsp;&nbsp;有的荷叶才只冒出一点嫩尖，可爱极了；有的已经长成手掌般大了，微风吹来，随风摇曳，高高挺...</p> </div></div>
                                                   </div>
                                                   <div className="row sub"> 
                                                            <div className="logo-border">
                                                                 <div className="col-md-3 run-buttom"> <i className="glyphicon glyphicon-time"></i>&nbsp;2031年12月06日</div> 
                                                                 <div className="col-md-3 run-buttom"><i className="glyphicon glyphicon-folder-open"></i>&nbsp;&nbsp;凡尘随笔</div> 
                                                                 <div className="col-md-2 run-buttom"><i className="glyphicon glyphicon-eye-open"></i> 6811</div> 
                                                                 <div className="col-md-4"><a href="javascript:;" className="btn btn-color btn-sm pull-right " data-go-route="archive/detail/detail&amp;detailId=1">阅读全文&gt;&gt;</a></div> 
                                                            </div> 
                                                    </div>
                                                </article>
                                                 <article className="article-content">
                                                   <div className="title"><div className="square"></div><div className="essay-title">如何成为文艺的程序员</div></div>
                                                   <div className="row content">
                                                          <div className="col-md-4"><img className="img-thumbnail" src={require("../images/a.jpg")} /></div>
                                                          <div className="col-md-8"><div className="essay-content"> <p>荷花是圣洁美丽的象征，她出污泥而洁白无暇，洒清香而天然独秀，极玲珑又纯洁谦虚，亭亭玉立，惹人喜爱。走近荷花池，首先映入眼帘的是一望无际的荷叶，像绿色的海洋。&nbsp;&nbsp;&nbsp;&nbsp;有的荷叶才只冒出一点嫩尖，可爱极了；有的已经长成手掌般大了，微风吹来，随风摇曳，高高挺...</p> </div></div>
                                                   </div>
                                                   <div className="row sub"> 
                                                            <div className="logo-border">
                                                                 <div className="col-md-3 run-buttom"> <i className="glyphicon glyphicon-time"></i>&nbsp;2031年12月06日</div> 
                                                                 <div className="col-md-3 run-buttom"><i className="glyphicon glyphicon-folder-open"></i>&nbsp;&nbsp;凡尘随笔</div> 
                                                                 <div className="col-md-2 run-buttom"><i className="glyphicon glyphicon-eye-open"></i> 6811</div> 
                                                                 <div className="col-md-4"><a href="javascript:;" className="btn btn-color btn-sm pull-right " data-go-route="archive/detail/detail&amp;detailId=1">阅读全文&gt;&gt;</a></div> 
                                                            </div> 
                                                    </div>
                                                </article>
                                                 <article className="article-content">
                                                   <div className="title"><div className="square"></div><div className="essay-title">如何成为文艺的程序员</div></div>
                                                   <div className="row content">
                                                          <div className="col-md-4"><img className="img-thumbnail" src={require("../images/a.jpg")} /></div>
                                                          <div className="col-md-8"><div className="essay-content"> <p>荷花是圣洁美丽的象征，她出污泥而洁白无暇，洒清香而天然独秀，极玲珑又纯洁谦虚，亭亭玉立，惹人喜爱。走近荷花池，首先映入眼帘的是一望无际的荷叶，像绿色的海洋。&nbsp;&nbsp;&nbsp;&nbsp;有的荷叶才只冒出一点嫩尖，可爱极了；有的已经长成手掌般大了，微风吹来，随风摇曳，高高挺...</p> </div></div>
                                                   </div>
                                                   <div className="row sub"> 
                                                            <div className="logo-border">
                                                                 <div className="col-md-3 run-buttom"> <i className="glyphicon glyphicon-time"></i>&nbsp;2031年12月06日</div> 
                                                                 <div className="col-md-3 run-buttom"><i className="glyphicon glyphicon-folder-open"></i>&nbsp;&nbsp;凡尘随笔</div> 
                                                                 <div className="col-md-2 run-buttom"><i className="glyphicon glyphicon-eye-open"></i> 6811</div> 
                                                                 <div className="col-md-4"><a href="javascript:;" className="btn btn-color btn-sm pull-right " data-go-route="archive/detail/detail&amp;detailId=1">阅读全文&gt;&gt;</a></div> 
                                                            </div> 
                                                    </div>
                                                </article>
                                                 <article className="article-content">
                                                   <div className="title"><div className="square"></div><div className="essay-title">如何成为文艺的程序员</div></div>
                                                   <div className="row content">
                                                          <div className="col-md-4"><img className="img-thumbnail" src={require("../images/a.jpg")} /></div>
                                                          <div className="col-md-8"><div className="essay-content"> <p>荷花是圣洁美丽的象征，她出污泥而洁白无暇，洒清香而天然独秀，极玲珑又纯洁谦虚，亭亭玉立，惹人喜爱。走近荷花池，首先映入眼帘的是一望无际的荷叶，像绿色的海洋。&nbsp;&nbsp;&nbsp;&nbsp;有的荷叶才只冒出一点嫩尖，可爱极了；有的已经长成手掌般大了，微风吹来，随风摇曳，高高挺...</p> </div></div>
                                                   </div>
                                                   <div className="row sub"> 
                                                            <div className="logo-border">
                                                                 <div className="col-md-3 run-buttom"> <i className="glyphicon glyphicon-time"></i>&nbsp;2031年12月06日</div> 
                                                                 <div className="col-md-3 run-buttom"><i className="glyphicon glyphicon-folder-open"></i>&nbsp;&nbsp;凡尘随笔</div> 
                                                                 <div className="col-md-2 run-buttom"><i className="glyphicon glyphicon-eye-open"></i> 6811</div> 
                                                                 <div className="col-md-4"><a href="javascript:;" className="btn btn-color btn-sm pull-right " data-go-route="archive/detail/detail&amp;detailId=1">阅读全文&gt;&gt;</a></div> 
                                                            </div> 
                                                    </div>
                                                </article>
                                            </div>
			</div>
		);
	}
};

export default Index;