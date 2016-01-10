/******* particles.js config *******/
particlesJS("particles-js",{particles:{number:{value:150,density:{enable:!0,value_area:1e3}},color:{value:"#424242"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:3},image:{src:"img/github.svg",width:60,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:1.218119527978683,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:50,color:"#424242",opacity:.9,width:1.5},move:{enable:!0,speed:2,direction:"top-right",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!0,rotateX:1e4,rotateY:1e4}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"repulse"},resize:!0},modes:{grab:{distance:150,line_linked:{opacity:1}},bubble:{distance:194.89912447658924,size:8.12079685319122,duration:2,opacity:8,speed:3},repulse:{distance:100,duration:.1},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0});

/******* Logo animation *******/
var logoIntro = new TimelineMax({
  repeat: 0,
  paused:true,
  delay:2.5,
  ease: Power4.easeInOut});

var textAnimation = new TimelineMax({
  repeat: -1,
  paused:true,
  delay:0,
  ease: Power4.easeInOut});

var garraAmimation = new TimelineMax({
  repeat: -1,
  paused:true,
  delay:3,
  repeatDelay:3,
  ease: Power4.easeInOut});

TweenMax.set('.l_blue', {
  fill:             "transparent",
  stroke:           "#32A0D2",
  strokeWidth:      "5",
  strokeDasharray:  "1500",
  strokeDashoffset: "1500",
  strokeLinecap:    "round"
})

TweenMax.set('.l_blue_max', {
  fill:             "transparent",
  stroke:           "#32A0D2",
  strokeWidth:      "10",
  strokeDasharray:  "1000",
  strokeDashoffset: "1000",
  strokeLinecap:    "round"
})

TweenMax.set('.l_gray', {
  fill:             "transparent",
  stroke:           "#818081",
  strokeWidth:      "5",
  strokeDasharray:  "1000",
  strokeDashoffset: "1000",
  strokeLinecap:    "round"
})

TweenMax.set('.t1 , .t2, .t3', {
  opacity: "0"
})
TweenMax.set('#particles-js', {
  opacity: "0"
})

logoIntro.staggerTo('.l_blue', 2.5, {strokeDashoffset:"0"},0.3)
  .staggerTo('.l_blue_max', 1.5, {strokeDashoffset:"0"},0.3,"-=2")
  .staggerTo('.l_gray', 2, {strokeDashoffset:"0"},0.3,"-=3")
  .staggerTo('.l_blue , .l_blue_max', 2, {fill:"#32A0D2", stroke:"transparent"},0.1,"-=2")
  .staggerTo('.l_gray', 1.2, {fill:"#818081", stroke:"transparent",onComplete: starAnimations},0.1,"-=2" )
  .from('#intro_text', 1.5, {opacity:"0"},"-=0.5")
  .to('#particles-js', 2.5, {opacity:"1"},"-=0.8")

garraAmimation.to('#G1', 1 ,{transformOrigin:"105% -9%",rotation: 35})
              .to('#G2', 1 ,{transformOrigin:"80% 133%",rotation: -35},"-=1")
              .to('#G1', 1 ,{transformOrigin:"105% -9%",rotation: -5})
              .to('#G2', 1 ,{transformOrigin:"80% 133%",rotation: 5},"-=1")

              .to('#G1', 1 ,{transformOrigin:"105% -9%",rotation: 35})
              .to('#G2', 1 ,{transformOrigin:"80% 133%",rotation: -35},"-=1")
              .to('#G1', 1.5 ,{transformOrigin:"105% -9%",rotation: -5})
              .to('#G2', 1.5 ,{transformOrigin:"80% 133%",rotation: 5},"-=1.5")

              .to('#G1', 0.5 ,{transformOrigin:"105% -9%",rotation: 35})
              .to('#G2', 0.5 ,{transformOrigin:"80% 133%",rotation: 35},"-=0.5")
              .to('#G1', 0.5 ,{transformOrigin:"105% -9%",rotation: 5})
              .to('#G2', 0.5 ,{transformOrigin:"80% 133%",rotation: 5},"-=0.5")

textAnimation.set('.t1, .t2, .t3',{ opacity:"0", transformOrigin:"0 0",transform:"translateX(-230px)"})
             .to('.t1', 1 ,{opacity:"1", transformOrigin:"0 0", transform:"translateX(0)"})
             .to('.t1', 0.5 ,{opacity:"0", transformOrigin:"0 0", transform:"translateX(100px)", delay:3})
             .to('.t2', 1 ,{opacity:"1", transformOrigin:"0 0", transform:"translateX(0)"})
             .to('.t2', 0.5 ,{opacity:"0", transformOrigin:"0 0", transform:"translateX(100px)", delay:3})
             .to('.t3', 1 ,{opacity:"1", transformOrigin:"0 0", transform:"translateX(0)"})
             .to('.t3', 0.5 ,{opacity:"0", transformOrigin:"0 0", transform:"translateX(100px)", delay:3})

function starAnimations() {
  textAnimation.play();
  garraAmimation.play();
}

$( document ).ready(function() {
    logoIntro.play();
});
