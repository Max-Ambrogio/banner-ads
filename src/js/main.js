gsap.fromTo(
    '.ad-val .product-photo',
    {
        top: "100%",

    },
    {
        top:"20%",
        delay:1,
        duration: 2,
    }
)

gsap.fromTo(
    '.ad-728-90 .product-photo',
    {
        top: "100%",

    },
    {
        top:"-30%",
        delay:1,
        duration: 2,
    }
)

gsap.fromTo(
    '.ad-150-600 .product-photo',
    {
        top: "100%",

    },
    {
        top:"40%",
        delay:1,
        duration: 2,
    }
)

gsap.fromTo(
    '.ad-val .one',
    {
        top: "100%",
        // right:'-100%',

    },
    {
        top:'-100%',
        // right:'100%',
        delay: .2,
        duration:1,
    }

)

gsap.fromTo(
    '.ad-val .two',
    {
        top: "100%",
        
        // right:'-100%',

    },
    {
        top:'-100%',
        // right:'100%',
        delay: .5,
        duration:1,
    }

)

gsap.fromTo(
    '.ad-val .three',
    {
        top: "100%",
        // right:'-100%',

    },
    {
        top:'-100%',
        // right:'100%',
        duration:1,
    }

)

// gsap.to(
//     '.ad-val .product-photo',
//     {
//         top:"55%",
//         delay: 2.5,
//         duration: 2,
//     }
// )

//P text
gsap.from(
    '.ad-val .jett-text p',
    {
        duration: 2,
        // scale: 0.5, 
        opacity: 0, 
        delay: 0.5, 
        stagger: 0.2,
        ease: "elastic", 
        force3D: true,
    }
)

gsap.to(
    '.ad-val .jett-text p',
    {
        delay: 2.5,
        stagger: 0.4,
        ease:'elastic',
        scale: 1.1,
        repeat: 10,
    }
)

//header text
// gsap.to(
//     '.ad-val .logo', 
//     {
//         duration:2,
//         delay: 2.5,
//         top: '9%',
//     }
// )

gsap.fromTo(
    '.ad-val .logo', 
    {
        opacity: 0,
        top:"6%", 
    },
    {
        opacity:1,
        duration:2,
        delay:1,
        top: '12%',
    }
)

gsap.fromTo(
    '.ad-150-600 .logo', 
    {
        opacity: 0,
        top:"0%", 
    },
    {
        opacity:1,
        duration:2,
        delay:1,
        top: '5%',
    }
)


//button text
gsap.fromTo(
    '.ad-val button', 
    {
        opacity: 0,
        top:"23%", 
    },
    {
        opacity:1,
        delay:3,
        duration:2,
        top: '27%',
    }
)

gsap.fromTo(
    '.ad-728-90 button', 
    {
        opacity: 0,
        top:"23%", 
    },
    {
        opacity:1,
        delay:3,
        duration:2,
        top: '62%',
    }
)


gsap.fromTo(
    '.ad-150-600 button', 
    {
        opacity: 0,
        top:"23%", 
    },
    {
        opacity:1,
        delay:3,
        duration:2,
        top: '13%',
    }
)




