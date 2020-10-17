const tl = gsap.timeline({ default: { ease: 'power4' } })

tl.to('.text', {
    y: '0%', duration: .7
})

tl.to('.intro2', { x: '0%', duration: 1, delay: 0.5 })

tl.to('.text2', { y: '0%', duration: .7 })

tl.to('.intro', { y: '-100%', duration: .5 })
tl.to('.intro2', { y: '-100%', duration: 1 })
