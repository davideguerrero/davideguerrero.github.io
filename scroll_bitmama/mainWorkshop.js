(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

// import $ from 'jquery';
// $(() => { });

console.log('mainWorkshop');

var myAnimation = new TimelineMax();
myAnimation.to('#textBox', 1, { x: 1000 });
myAnimation.to('#textBox', 1, { opacity: 1 }, -0.5);
myAnimation.from('#imageBox', 1.5, { opacity: 0 }, -0.5);

var controller = new ScrollMagic.Controller(); //for the second animation

var scene = new ScrollMagic.Scene({ //new instance
  triggerElement: '#myTrigger', //container where I want to add the animation
  triggerHook: 0.5, //when to start the animation
  offset: 0, // position to start
  duration: 750
}).setTween(myAnimation).addTo(controller);

var myAnimation2 = new TimelineMax();
myAnimation2.to('#textBox2', 1, { x: -125 });
myAnimation2.from('#textBox2', 1, { scale: 0 }, -0.5);
myAnimation2.from('#imageBox2', 1.5, { y: -250 }, -0.5);
myAnimation2.from('#imageBox2', 1.5, { opacity: 0 }, -0.5);

var scene2 = new ScrollMagic.Scene({ //new instance
  triggerElement: '#myTrigger2', //container where I want to add the animation
  triggerHook: 0.25, //when to start the animation
  offset: 0, // position to start
  duration: 500
}).setTween(myAnimation2).addTo(controller);

var myAnimation3 = new TimelineMax();
myAnimation3.to('#textBox3', 1, { x: 1000 });
myAnimation3.to('#textBox3', 1, { opacity: 1 }, -0.5);
myAnimation3.from('#imageBox3', .5, { rotation: 360 });

var scene3 = new ScrollMagic.Scene({ //new instance
  triggerElement: '#myTrigger3', //container where I want to add the animation
  triggerHook: 0.75, //when to start the animation
  offset: 0, // position to start
  duration: 750
}).setTween(myAnimation3).addTo(controller);

var myAnimation4 = new TimelineMax();
myAnimation4.to('#textBox4', 1, { y: -150 });
myAnimation4.to('#textBox4', 1, { opacity: 1 }, -0.5);
myAnimation4.from('#imageBox4', 1.5, { opacity: 0 }, -0.5);

var scene4 = new ScrollMagic.Scene({ //new instance
  triggerElement: '#myTrigger4', //container where I want to add the animation
  triggerHook: 0.5, //when to start the animation
  offset: 0, // position to start
  duration: 750
}).setTween(myAnimation4).addTo(controller);

var myAnimation5 = new TimelineMax();
myAnimation5.to('#textBox5', 1, { x: 1000 });
myAnimation5.to('#textBox5', 1, { rotation: 360 }, -0.5);
myAnimation5.from('#imageBox5', 1.5, { opacity: 0 }, -0.5);

var scene5 = new ScrollMagic.Scene({ //new instance
  triggerElement: '#myTrigger5', //container where I want to add the animation
  triggerHook: 0.5, //when to start the animation
  offset: 0, // position to start
  duration: 750
}).setTween(myAnimation5).addTo(controller);

var myAnimation6 = new TimelineMax();
myAnimation6.to('#textBox6', 1, { x: -1250 });
myAnimation6.to('#textBox6', 1, { opacity: 1 }, -0.5);
myAnimation6.from('#imageBox6', 1.5, { opacity: 0 }, -0.5);

var scene6 = new ScrollMagic.Scene({ //new instance
  triggerElement: '#myTrigger6', //container where I want to add the animation
  triggerHook: 0.5, //when to start the animation
  offset: 0, // position to start
  duration: 750
}).setTween(myAnimation6).addTo(controller);

},{}]},{},[1])

//# sourceMappingURL=mainWorkshop.js.map