const counters = document.querySelectorAll('.counter');
const signUp = document.getElementById("SignUp");
const login = document.getElementById("Login");
const explore = document.getElementById("explore");
const join = document.getElementById("join");
const start = document.getElementById("start");
signUp.addEventListener("click",() =>{
  window.location.href = "signUp.html";
})
login.addEventListener("click",() =>{
  window.location.href = "login.html";
})
explore.addEventListener("click",() =>{
  window.location.href = "signUp.html";
})
start.addEventListener("click",() =>{
  window.location.href = "signUp.html";
})
join.addEventListener("click",() =>{
  window.location.href = "signUp.html";
})

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = +counter.getAttribute('data-target');
      const increment = target / 2000000; // Adjust speed here

      const updateCount = () => {
        const current = +counter.innerText;
        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCount, 1400);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
      observer.unobserve(counter); // Animate only once
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));
var tl = gsap.timeline();
tl .from(".content h1",{
  opacity:0,
  y:100,
  stagger:0.28,
  duration:0.6
})

gsap.from(".numbers",{
  y:100,
  opacity:0,
  stagger:0.28,
  duartion:0.6,
  scrollTrigger:{
    
    trigger:".stat",
    start:"top 60%",
    end:"top 0%",
   
    markers:false
  }

  }
);
gsap.from(".revs",{
  y:100,
  opacity:0,
  stagger:0.28,
  duartion:0.6,
  scrollTrigger:{
    
    trigger:".rev",
    start:"top 60%",
    end:"top 0%",
   
    markers:false
  }

  }
)



