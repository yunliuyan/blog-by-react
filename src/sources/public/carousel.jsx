import  React from  'react';
import reactDom from 'react-dom';
require('styles/index.less');
 const images = [
           {
              src: "../../images/b.jpg",
              alt: '图片1'
             },
             {
              src: "../../images/d.jpg",
              alt: "图片2"
             },
             {
              src: "../../images/a.jpg",
              alt: "图片3"
             }
 ]

class carousel extends React.Component {
       constructor(){
              super();
       }
      componentDidMount(){
          const img = reactDom.findDOMNode(this.refs.img);
          var i=0;
            setInterval(()=>{
                 img.src = images[i]['src']; 
                 i++;
                 if(i==images.length) i=0;
            }, 2000);
      }
      render(){
           return(
              <img className="img-thumbnail" ref="img" src={require("../../images/a.jpg")} />
          )
      }
}
export default carousel;