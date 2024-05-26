var parallax = gsap.timeline()
parallax
    .to('.bg', {
        scale:1,
        x: "-20vw"
    })
    .to('.plane', {
        x: "85vw",
        y: "-20vw",
        scale:1
    }, "<")
    .to('.city', {
        scale:1,
        y:0
    }, "<")

var sec = gsap.timeline()
sec
    .to('.plane1', {
        x: "75vw",
        y: "5vw",
        scale:2
    })

ScrollTrigger.create({
    animation: parallax,
    trigger: '.parallax',
    start: "top 0%",
    scrub: 2,
    pin: true
})

ScrollTrigger.create({
    animation: sec,
    trigger: '.sec',
    start: "left 50%",
    end: "right 0%",
    scrub: 2,
})