var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
var tl = gsap.timeline();
tl
  .from(".navbar",{
    opacity:0,
    y:-20,
    duration:.8,
  })
  .from(".hero-sectionDiv-one",{
    opacity:0,
    duration:.8,
    y:30,
  })
  .from(".hero-sectionDiv-two",{
    opacity:0,
    duration:.8,
    y:25,
  })


gsap.from(".service-card-header",{
  scrollTrigger:{
    trigger:".service-card-header",
    scroller:"body",
    // markers:true,
    // start:"top 110%",
    // bottom:"20%",
  },
  opacity:0,
  y:50,
  duration:.8,
})
gsap.from("#service-cardNo-one img",{
  scrollTrigger:{
    trigger:"#service-cardNo-one img",
    scroller:"body",
    // markers:true,
    start:"top 80%",
    end:"bottom 20%"
  },
  opacity:0,
  y:30,
  duration:.8,
})
gsap.from("#service-cardNo-two img",{
  scrollTrigger:{
    trigger:"#service-cardNo-two img",
    scroller:"body",
    // markers:true,
    start:"top 80%",
    end:"bottom 20%"
  },
  opacity:0,
  y:30,
  duration:.8,
})
gsap.from(".logistics-partner h1",{
  scrollTrigger:{
    trigger:".logistics-partner h1",
    scroller:"body",
    // markers:true,
    // start:"top 110%",
    // bottom:"20%",
  },
  opacity:0,
  y:50,
  duration:.8,
})
gsap.from(".logistics-partner-body-card-one",{
  scrollTrigger:{
    trigger:".logistics-partner-body-card-one",
    scroller:"body",
    // markers:true,
    start:"top 80%",
    end:"bottom 20%"
  },
  opacity:0,
  y:50,
  duration:1,
})
gsap.from(".logistics-partner-body-card h4",{
  scrollTrigger:{
    trigger:".logistics-partner-body-card h4",
    scroller:"body",
    // markers:true,
    // start:"top 110%",
    // bottom:"20%",
  },
  opacity:0,
  y:50,
  duration:1,
})
gsap.from(".logistics-partner-body-card p",{
  scrollTrigger:{
    trigger:".logistics-partner-body-card p",
    scroller:"body",
    // markers:true,
    // start:"top 110%",
    // bottom:"20%",
  },
  opacity:0,
  y:50,
  duration:1,
})
gsap.from("#card-heading-text",{
  scrollTrigger:{
    trigger:"#card-heading-text",
    scroller:"body",
    // markers:true,
    // start:"top 110%",
    // bottom:"20%",
  },
  opacity:0,
  y:50,
  duration:1,
})
gsap.from("#card-mini-text",{
  scrollTrigger:{
    trigger:"#card-mini-text",
    scroller:"body",
    // markers:true,
    // start:"top 110%",
    // bottom:"20%",
  },
  opacity:0,
  y:50,
  duration:1,
})
gsap.from("#card-heading-text2",{
  scrollTrigger:{
    trigger:"#card-heading-text2",
    scroller:"body",
    // markers:true,
    // start:"top 110%",
    // bottom:"20%",
  },
  opacity:0,
  y:50,
  duration:1,
})
gsap.from("#card-mini-text2",{
  scrollTrigger:{
    trigger:"#card-mini-text2",
    scroller:"body",
    // markers:true,
    // start:"top 110%",
    // bottom:"20%",
  },
  opacity:0,
  y:50,
  duration:1,
})


