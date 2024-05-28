function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()
var count = 0;
const themes=["theme1","theme2","theme3","theme4","theme5"];
Shery.makeMagnet(".magnet");
Shery.mouseFollower();

// function newtheme () {
//     $("h1").removeClass()
// const themes=["theme1","theme2","theme3","theme4","theme5"];
// count=(count+1)%5

// console.log((themes[count]))
// $("h1").addClass((themes[count]))

// };

// function dark(){
//     $("body").toggleClass("dark");
// }

Shery.hoverWithMediaCircle(".hv" /* Element to target.*/, {
  images: ["image1.png", "image2.png", "image3.png","image4.png"] /*OR*/,
  //videos: ["video1.mp4", "video2.mp4"],
});
gsap.to(".fleftelm", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scroller:'#main',
    scrub: 1,
    // markers:true,
  },
  y: "-300%",
  ease: Power1,
});



let sections = document.querySelectorAll(".fleftelm");
Shery.imageEffect(".images", {
  style: 5,
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        scroller:'#main',
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});


var clutter = "";

document.querySelector("#ftext>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#ftext>h1").innerHTML = clutter;
})


gsap.to("#ftext>h1>span",{
    scrollTrigger:{
        trigger:`#ftext>h1>span`,
        // markers:true,
        start:`top bottom`,
        end:`bottom top`,
        scroller:'#main',
        scrub:.2,
    },
    stagger:.2,
    color:`#d5d8d7`
})

var tl = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h1",
      //  markers:true,
      start: "top 27%",
      end: "top 0",
      scroller:'#main',
      scrub: 3
  }
})
tl.to(".page1 h1", {
  x: -100,
}, "anim")
tl.to(".page1 h2", {
  x: 100
}, "anim")
tl.to(".page1 video", {
  width: "90%"
}, "anim")

var tl = gsap.timeline({
  scrollTrigger: {
      trigger: ".page2 h1",
      //  markers:true,
      start: "top 27%",
      end: "top 0",
      scroller:'#main',
      scrub: 3
  }
})
tl.to(".page2 h1", {
  x: -100,
}, "anim")
tl.to(".page2 h2", {
  x: 350
}, "anim")





var a = 0;
	$(window).scroll(function() {
		if ($('#counter').length) { // checking if CountTo section exists in the page, if not it will not run the script and avoid errors	
			var oTop = $('#counter').offset().top - window.innerHeight;
			if (a == 0 && $(window).scrollTop() > oTop) {
			$('.counter-value').each(function() {
				var $this = $(this),
				countTo = $this.attr('data-count');
				$({
				countNum: $this.text()
				}).animate({
					countNum: countTo
				},
				{
					duration: 2000,
					easing: 'swing',
					step: function() {
					$this.text(Math.floor(this.countNum));
					},
					complete: function() {
					$this.text(this.countNum);
					//alert('finished');
					}
				});
			});
			a = 1;
			}
		}
    });
    $("#js-rotating").Morphext({
      // The [in] animation type. Refer to Animate.css for a list of available animations.
      animation: "fadeIn",
      // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
      separator: ",",
      // The delay between the changing of each phrase in milliseconds.
      speed: 3000,
      complete: function () {
        // Called after the entrance animation is executed.
      }
    });

    function checkEmail(input) {
      if (!input.value.includes("@") || !input.value.includes(".")) {
        input.setCustomValidity("Please enter a valid email address with '@' and ending with '.com'");
      } else {
        input.setCustomValidity("");
      }
    }

    function checkPassword(input) {
      var password = input.value;
      var passwordRegex = RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
      if (!passwordRegex.test(password)) {
          input.setCustomValidity("Please enter a valid password with 6 lowercase letters, 1 uppercase letter, 1 special character, and 1 number");
      } else {
          input.setCustomValidity("");
      }
  }


  function checkPass(){
    let strength = document.getElementById("strength");
    
    let strongRegex = RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
    
    //at least 6 characters long
    let minRegex = RegExp('(?=.{6,})');

    let pwd = document.getElementById("password");

    if (pwd.value.length==0){
        strength.innerHTML="Type Password";
    }else if(minRegex.test(pwd.value)==false){
        strength.innerHTML='<span  style="color:white">The Password must be at least 6 Characters Long</span>';
    }else if(strongRegex.test(pwd.value)){
        strength.innerHTML='<span style="color:green">Strong Password</span>';
    }else{
        strength.innerHTML='<span style="color:red">Weak!!! Please use Uppercase, Lowercase, Number, and Special Character</span>';
    }
}

function checkMatch(){
  let strength = document.getElementById("match");
  

  let pwd = document.getElementById("password");
  let cpwd = document.getElementById("conf_password");
  if (pwd.value.length==0){
      strength.innerHTML="Type Password";
  }else if((pwd.value)==(cpwd.value)){
      strength.innerHTML='<span  style="color:green"> Passwords Match </span>';
  }else{
      strength.innerHTML='<span style="color:red"> Passwords do not Match </span>';
  }
}