(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
  
  'use strict';
  
  console.log('thefork');
  
  var myAnimation = new TimelineMax();
  myAnimation.from('#titleBox', .5, { y: 75 });
  myAnimation.from('#descriptionBox', .5, { y: -150 });
  
  var controller = new ScrollMagic.Controller(); //for the second animation

  var scene = new ScrollMagic.Scene({ //new instance
    triggerElement: '#startTrigger', //container where I want to add the animation
    triggerHook: 0.75, //when to start the animation
    offset: 0, // position to start
    duration: 750 // total duration
  }).setTween(myAnimation).addTo(controller);

  
  var myAnimation2 = new TimelineMax();
  // myAnimation2.from('#subtitleBox', .5, { y: 25 });
  myAnimation2.from('#imageBox', .35, { opacity: 0 }, -1);

  var scene2 = new ScrollMagic.Scene({ //new instance
    triggerElement: '#startTrigger2', //container where I want to add the animation
    triggerHook: 0.75, //when to start the animation
    offset: 0, // position to start
    duration: 750 // total duration
  }).setTween(myAnimation2).addTo(controller);



},{}]},{},[1])