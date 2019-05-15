(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
  
  'use strict';
  
  console.log('thefork');
  
  var myAnimation = new TimelineMax();
  myAnimation.from('#titleBox', .5, { y: 75 });
  myAnimation.from('#descriptionBox', .5, { y: -75 });
  
  var controller = new ScrollMagic.Controller(); //for the second animation

  var scene = new ScrollMagic.Scene({ //new instance
    triggerElement: '#startTrigger', //container where I want to add the animation
    triggerHook: 0.5, //when to start the animation
    offset: 0, // position to start
    duration: 750 // total duration
  }).setTween(myAnimation).addTo(controller);
  
  var myAnimation2 = new TimelineMax();
  myAnimation2.from('#imageBox', .5, { opacity: 0 }, -1);

  var scene2 = new ScrollMagic.Scene({ //new instance
    triggerElement: '#startTrigger2', //container where I want to add the animation
    triggerHook: 0.75, //when to start the animation
    offset: 0, // position to start
    duration: 750 // total duration
  }).setTween(myAnimation2).addTo(controller);

  var myAnimation3 = new TimelineMax();
  myAnimation3.from('#imageBox3', .5, { opacity: 0 }, -1);

  var scene3 = new ScrollMagic.Scene({ //new instance
    triggerElement: '#startTrigger3', //container where I want to add the animation
    triggerHook: 0.75, //when to start the animation
    offset: 0, // position to start
    duration: 750 // total duration
  }).setTween(myAnimation3).addTo(controller);

  var myAnimation4 = new TimelineMax();
  myAnimation4.from('#imageBox4', .5, { opacity: 0 }, -1);

  var scene4 = new ScrollMagic.Scene({ //new instance
    triggerElement: '#startTrigger4', //container where I want to add the animation
    triggerHook: 0.75, //when to start the animation
    offset: 0, // position to start
    duration: 750 // total duration
  }).setTween(myAnimation4).addTo(controller);

  var myAnimation5 = new TimelineMax();
  myAnimation5.from('#imageBox5', .5, { opacity: 0 }, -1);

  var scene5 = new ScrollMagic.Scene({ //new instance
    triggerElement: '#startTrigger5', //container where I want to add the animation
    triggerHook: 0.75, //when to start the animation
    offset: 0, // position to start
    duration: 750 // total duration
  }).setTween(myAnimation5).addTo(controller);

  var myAnimation6 = new TimelineMax();
  myAnimation6.from('#imageBox6', .5, { opacity: 0 }, -1);

  var scene6 = new ScrollMagic.Scene({ //new instance
    triggerElement: '#startTrigger6', //container where I want to add the animation
    triggerHook: 0.75, //when to start the animation
    offset: 0, // position to start
    duration: 750 // total duration
  }).setTween(myAnimation6).addTo(controller);

  var myAnimation7 = new TimelineMax();
  myAnimation7.from('#nextBox', .5, { y: -75 });

  var scene7 = new ScrollMagic.Scene({ //new instance
    triggerElement: '#startTrigger7', //container where I want to add the animation
    triggerHook: 1, //when to start the animation
    offset: 0, // position to start
    duration: 750 // total duration
  }).setTween(myAnimation7).addTo(controller);

  var myAnimation8 = new TimelineMax();
  myAnimation8.from('#titleBox8', .5, { y: 75 });
  
  var scene8 = new ScrollMagic.Scene({ //new instance
    triggerElement: '#startTrigger8', //container where I want to add the animation
    triggerHook: 0.5, //when to start the animation
    offset: 0, // position to start
    duration: 750 // total duration
  }).setTween(myAnimation8).addTo(controller);
  
  var myAnimation9 = new TimelineMax();
  myAnimation9.from('#imageBox9', .5, { opacity: 0 }, -1);
  
  var scene9 = new ScrollMagic.Scene({ //new instance
    triggerElement: '#startTrigger9', //container where I want to add the animation
    triggerHook: 0.5, //when to start the animation
    offset: 0, // position to start
    duration: 750 // total duration
  }).setTween(myAnimation9).addTo(controller);

},{}]},{},[1])