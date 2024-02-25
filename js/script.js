// Animations

let tl = gsap.timeline();
tl.from("nav",{
    y:20,
    duration:0.7
})
tl.from(".home-content .text",{
  opacity:0,
//   scale:1.5,
  y:15,
  
})
tl.from(".button",{
    opacity:0,
    scale:1
});

gsap.from(".slider-section #title-0 span",{

  scrollTrigger:{
    trigger:".slider-section #title-0 span",
    scroller:"body",
    start:"top 70%"
  },
  opacity:0,
  scale:1.5,
  duration:1,
});
gsap.from(".slider-section",{
  
    scrollTrigger:{
      trigger:".slider-section",
      scroller:"body",
      start:"top 50%"
    },
  opacity:0,
  y:40
})
gsap.from(".home-container #title-1 span",{
  scrollTrigger:{
    trigger:".home-container #title-1 span",
    scroller:"body",
    start:"top 50%",
    
  },
  opacity:0,
  scale:1.5,
  duration:1,
});
gsap.from(".home-container .text-container .intro .left #p-1",{
  scrollTrigger:{
    trigger:".home-container .text-container .intro .left #p-1",
    scroller:"body",
    start:"top 50%",
  

  },
  opacity:0,
  x:-20,
  
});
gsap.from(".home-container #title-2 span",{
  scrollTrigger:{
    trigger:".home-container #title-2 span",
    scroller:"body",
    start:"top 60%"
  },
  opacity:0,
  scale:1.5,
  duration:0.5,
  
});
gsap.from(".home-container .text-container .intro .left-container #p-2",{
  scrollTrigger:{
    trigger:".home-container .text-container .intro .left-container #p-2",
    scroller:"body",
    start:"top 80%",
  

  },
  opacity:0,
  x:-20,
  duration:1
  
})
gsap.from(".home-container .text-container .intro .left-container img",{
  scrollTrigger:{
    trigger:".home-container .text-container .intro .left-container img",
    scroller:"body",
    start:"top 80%",
  

  },
  opacity:0,
  y:20,
  duration:1
  
})
gsap.from(".team-container",{
  scrollTrigger:{
    trigger:".team-container",
    scroller:"body",
    start:"top 70%",
  

  },
  opacity:0,
  y:20,
  duration:1
  
});
gsap.from(".team-container .container",{
  scrollTrigger:{
    trigger:".team-container .container",
    scroller:"body",
    start:"top 70%",
    

  },
  opacity:0,
  x:-20,
  duration:1
  
});
gsap.from("footer",{
  scrollTrigger:{
    trigger:"footer",
    scroll:"body",
    start:"top 50%"
  },
  opacity:0,
  y:30
})