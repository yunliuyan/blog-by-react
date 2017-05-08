import React from 'react';
import { Router, Route, Link } from 'react-router';
require('styles/detail.less');

class detail extends React.Component{
	render(){
		return(
                               <div className="detail">
                                    <div className="detail-title">如何成为文艺的程序员</div>
                                    <div className="detal-instruction row">
                                           <div className="col-md-4"><i className="glyphicon glyphicon-folder-open"></i> &nbsp; 文言小摘</div>
                                           <div className="col-md-4"><i className="glyphicon glyphicon-time"></i>&nbsp; 2028年10月04日 </div>
                                           <div className="col-md-4"><i className="glyphicon glyphicon-eye-open"></i>&nbsp; 16711人阅读 </div>
                                    </div>
                                    <div className="detail-content">
                                           荷花是圣洁美丽的象征，她出污泥而洁白无暇，洒清香而天然独秀，极玲珑又纯洁谦虚，亭亭玉立，惹人喜爱。走近荷花池，首先映入眼帘的是一望无际的荷叶，像绿色的海洋。
    有的荷叶才只冒出一点嫩尖，可爱极了；有的已经长成手掌般大了，微风吹来，随风摇曳，高高挺立；有的已经长成“大玉盘”了，生机勃勃。一片片荷叶挨埃挤挤，好象是一群兄弟姐妹，心连着心，亲密无间。这时，吹来一阵风，“绿的海洋”霎时间波涛起伏，荷叶一片连着一片翻腾着，美丽极了。风停了，“绿的海洋”又平静下来了。叶面上的水珠儿滴溜溜地滚动着，晶莹剔透，像一颗颗漂亮的珍珠。真是“一阵风来碧浪翻，珍珠零落难收拾”。再细看。荷花千姿百态，洁白无暇，像水晶一样纯洁。
    有的才只有一个青里泛白的花苞，娇羞欲语，含苞欲放；有的只开了一半，一些花瓣散下去，另一些簇拥在花蕊旁，犹如一位衣衫未整的美人；
                                    </div>
                                    <div className="detail-footer"> 
                                           <p className="article-pre"><a href="javascript:;" data-go-route-reload="archive/detail/detail&amp;detailId=1"><i className="glyphicon glyphicon-chevron-up"></i>&nbsp;上一篇：叶长夜长，何香荷香</a></p>  
                                           <p className="article-next"><a href="javascript:;" data-go-route-reload="archive/detail/detail&amp;detailId=3"><i className="glyphicon glyphicon-chevron-down"></i>&nbsp;下一篇：愁与寂寞相伴，爱与孤独同存</a></p>
                                   </div>
                               </div>
		)
	}
}
export default detail;