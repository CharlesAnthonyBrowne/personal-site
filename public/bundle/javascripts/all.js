"use strict";function Transition(){var n,t,a,e,i,r,v,s=2,h=60,o=20,g=0;this.initialize=function(){n=document.getElementById("canvas"),t=n.getContext("2d"),a=window.innerWidth,e=window.innerHeight,i=a/2,r=e/2,n.width=a,n.height=e,l(),n.addEventListener("click",x,!1);setInterval(f,20)};var l=function(){v=new c;var n,t=v;for(n=0;o>n;n++)t.ang=n*o,t.vang=1,t.r=10,t.vr=0,t.x=i,t.y=r,n!=o-1&&(t.next=new c,t=t.next)},c=function(){this.ang,this.vang,this.r,this.vr,this.x,this.y,this.next},f=function(){for(var n=0,a=v;a;)if(n++,a.r>400)a=a.next;else{var e=Math.random();if(.1>e)a.vang=0,a.vr=s;else if(.2>e)a.vang=-s,a.vr=0;else if(.3>e)a.vang=s,a.vr=0;else if(.304>e&&h>g){var o=new c;o.ang=a.ang,0==a.ang?o.vang=0:o.vang=Math.random()<.5?-1:1,o.r=a.r,0==a.vang?o.vr=1:o.vr=0,o.x=a.x,o.y=a.y,o.next=a.next,a.next=o}var l=a.ang+a.vang;a.r=a.r+a.vr;var f=Math.PI/180*l,x=a.r*Math.cos(f),d=a.r*Math.sin(f),u=Math.sqrt(x*x+d*d),w=Math.PI/180*(l-(l-a.ang)/2),y=u*Math.cos(w),M=u*Math.sin(w);t.beginPath(),t.strokeStyle="#000000",t.moveTo(a.x,a.y),t.quadraticCurveTo(y+i,M+r,x+i,d+r),t.stroke(),t.closePath(),a.x=x+i,a.y=d+r,a.ang=l,a=a.next}g=n},x=function(n){n.preventDefault(),t.fillStyle="rgba(255, 255, 255, 1.0)",t.beginPath(),t.rect(0,0,a,e),t.closePath(),t.fill(),l()}}var app=new Transition;app.initialize();
//# sourceMappingURL=all.js.map