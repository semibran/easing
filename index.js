"use strict";!function(){function p(t,e){var n=document.createElement("div");if(n.className=t,!e)return n;var r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done);r=!0){var l=i.value;"string"==typeof l&&(l=document.createTextNode(l)),n.appendChild(l)}}catch(t){o=!0,a=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}function e(t,e){var n=t.cache;if(!n.demos){var r=!0,o=!(n.demos=[]),a=void 0;try{for(var i,u=e.demos[Symbol.iterator]();!(r=(i=u.next()).done);r=!0){var l=i.value,f=p("circle"),c=p("demo",[p("header",[M(32,l.fn),p("text",[p("title",[l.title]),p("formula",[l.formula])])]),p("slider",[p("track"),f])]);t.element.appendChild(c),n.demos.push({element:c,circle:f})}}catch(t){o=!0,a=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}}for(var s=0;s<e.demos.length;s++){var m=e.demos[s],h=e.time%360,d=1;h<120?d=h/120:180<=h&&h<300&&(d=(h-180)/120);var v=m.fn(d);180<=h&&(v=1-v),n.demos[s].circle.style.left=100*v+"%"}}function M(t,e){var n=t-2,r=t-2,o=document.createElement("canvas"),a=o.getContext("2d");o.width=t,o.height=t,a.strokeStyle="white",a.globalAlpha=.25,a.beginPath(),a.moveTo(t/3,0),a.lineTo(t/3,t),a.stroke(),a.beginPath(),a.moveTo(2*t/3,0),a.lineTo(2*t/3,t),a.stroke(),a.beginPath(),a.moveTo(0,t/3),a.lineTo(t,t/3),a.stroke(),a.beginPath(),a.moveTo(0,2*t/3),a.lineTo(t,2*t/3),a.stroke(),a.globalAlpha=1;for(var i=0;i<t;i++){var u=i/t,l=(i+1)/t;a.beginPath(),a.moveTo(n*u+1,(1-e(u))*r+1),a.lineTo(n*l+1,(1-e(l))*r+1),a.stroke()}return o}var n={time:0,demos:[{fn:function(t){return t},title:"linear",formula:"t"},{fn:function(t){return t*t},title:"quadratic ease in",formula:"t * t"},{fn:function(t){return-t*(t-2)},title:"quadratic ease out",formula:"-t * (t - 2)"},{fn:function(t){return t<.5?t*t*2:-((t=2*t-1)*(t-2)-1)/2},title:"quadratic ease in/out",formula:"t < 0.5\n  ? t * t * 2\n  : -((t = t * 2 - 1) * (t - 2) - 1) / 2"},{fn:function(t){return t*t*t},title:"cubic ease in",formula:"t^3"},{fn:function(t){return Math.pow(t-1,3)+1},title:"cubic ease out",formula:"(t - 1)^3 + 1"},{fn:function(t){return t<.5?t*t*t*4:(Math.pow(2*t-2,3)+2)/2},title:"cubic ease in/out",formula:"t < 0.5\n  ? t^3 * 4\n  : ((t * 2 - 2)^3 + 2) / 2"},{fn:function(t){return Math.cos(Math.PI+Math.PI/2*t)+1},title:"sinusoidal ease in",formula:"cos(π + π / 2 * t) + 1"},{fn:function(t){return Math.sin(Math.PI/2*t)},title:"sinusoidal ease out",formula:"sin(π / 2 * t)"},{fn:function(t){return(Math.cos(Math.PI*(t+1))+1)/2},title:"sinusoidal ease in/out",formula:"(cos(π + π * t) + 1) / 2"},{fn:function(t){return Math.pow(2,10*(t-1))},title:"exponential ease in",formula:"2 ^ (10 * (t - 1))"},{fn:function(t){return 1-Math.pow(2,-10*t)},title:"exponential ease out",formula:"-(2 ^ (-10 * t)) + 1"},{fn:function(t){return(t=2*t-1)<0?Math.pow(2,10*t)/2:(2-Math.pow(2,-10*t))/2},title:"exponential ease in/out",formula:"(t = t * 2 - 1) < 0\n  ? 2 ^ (10 * t) / 2\n  : (-(2 ^ (-10 * t) + 2) / 2"},{fn:function(t){return-(Math.sqrt(1-t*t)-1)},title:"circular ease in",formula:"-sqrt(1 - t^2)"},{fn:function(t){return Math.sqrt(1-(t-1)*(t-1))},title:"circular ease out",formula:"sqrt(1 - (t - 1)^2)"},{fn:function(t){return t<.5?-(Math.sqrt(1-Math.pow(2*t,2))-1)/2:(Math.sqrt(1-Math.pow(2*t-2,2))+1)/2},title:"circular ease in/out",formula:"t < 0.5\n  ? -(sqrt(1 - (t * 2)^2) - 1)/ 2\n  : (sqrt(1 - (t * 2 - 2)^2) + 1) / 2"}]},r={element:p("wrap"),cache:{}};document.body.appendChild(r.element),function t(){e(r,n);n.time++;requestAnimationFrame(t)}()}();