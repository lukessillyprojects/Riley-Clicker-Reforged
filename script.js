gsap.registerPlugin(ScrollTrigger)
gsap.from('.box', {
    scrollTrigger: '.box', // start the animation when ".box" enters the viewport (once)
    y: 500,
    opacity: 0,
    duration:1.5
});