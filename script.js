gsap.registerPlugin(ScrollTrigger)
gsap.to('.box', {
    scrollTrigger: '.box', // start the animation when ".box" enters the viewport
    y: -345,
    rotation: 360,
    duration: 1.5
});

gsap.to('.button', {
    scrollTrigger: '.box', // start the animation when ".box" enters the viewport
    y: -200,
    duration: 1.5
});