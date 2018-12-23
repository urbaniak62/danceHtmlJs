console.log("gggg");
TweenMax.to(".overlay h1",2,{
    opacity:0,
    y:"-60",
    ease:Expo.easeInOut
})
TweenMax.to(".overlay",2,{
    delay:1,
    top:"-100%",
    ease:Expo.easeInOut
})
TweenMax.from(".logo",2,{
    delay:2.4,
    opacity:0,
    y:"20",
    ease:Expo.easeInOut
})
TweenMax.staggerFrom(".nav ul li",1,{
    delay:2.4,
    opacity:0,
    y:"20",
    ease:Expo.easeInOut
},0.4)
TweenMax.staggerFrom(".social-media",1,{
    delay:2.4,
    opacity:0,
    y:"20",
    ease:Expo.easeInOut
},0.4)
TweenMax.staggerFrom(".side-strip",2,{
    delay:2.4,
    opacity:0,
    y:"60",
    ease:Expo.easeInOut
},0.4)
TweenMax.staggerFrom(".bottom-bar",2,{
    delay:2.4,
    opacity:0,
    x:"60",
    ease:Expo.easeInOut
},0.4)
TweenMax.staggerFrom(".row h6",2,{
    delay:3,
    opacity:0,
    y:"60",
    ease:Expo.easeInOut
},0.4)
TweenMax.staggerFrom(".row p",2,{
    delay:3.4,
    opacity:0,
    y:"60",
    ease:Expo.easeInOut
},0.4)
TweenMax.staggerFrom(".header h1",2,{
    delay:3.6,
    opacity:0,
    y:"60",
    ease:Expo.easeInOut
},0.4)
TweenMax.staggerFrom(".header p",2,{
    delay:3.8,
    opacity:0,
    y:"60",
    ease:Expo.easeInOut
},0.4)
TweenMax.staggerFrom(".header button",2,{
    delay:3.9,
    opacity:0,
    y:"70",
    ease:Expo.easeInOut
},0.4)