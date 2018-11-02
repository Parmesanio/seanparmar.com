import React from 'react';
import './showcase.scss';

const Showcase = () => {
    //Split Screen Function
    setTimeout(() => {
  let wrapper = document.getElementById('wrapper');
  let topLayer = wrapper.querySelector('.top');
  let handle = wrapper.querySelector('.handle');
  let skew = 0;
  let delta = 0;
  if(wrapper != null) {
    //If class isn't found, result will be -1 (true)
  if (wrapper.className.indexOf('skewed') != -1) {
    skew = 1000;
  }
  wrapper.addEventListener('mousemove', function(e) {
    delta = (e.clientX - window.innerWidth / 2) * 0.5;
    handle.style.left = e.clientX + delta + 'px';
    topLayer.style.width = e.clientX + skew + delta + 'px';
  });
  }
}, 500)
    return ( 
        <section id="wrapper" className="showcase skewed">
            <div className="layer bottom">
                <div className="content-wrap">
                <div className="content-body">
                    <h1>IOS Developer</h1>
                </div>
                </div>
            </div>
            <div className="layer top">
                <div className="content-wrap">
                <div className="content-body">
                    <h1>Web Developer</h1>
                </div>
                </div>
            </div>
            <div className="handle"></div>
        </section>
        );
}
 
export default Showcase;