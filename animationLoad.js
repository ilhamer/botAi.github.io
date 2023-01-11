window.addEventListener('load',()=>{
    setTimeout(() => {
        window.location.href = 'isi.html'
    
    }, 10000);
    window.scrollTo({
        top:targetPosition,
        behavior:'smoth'
    })
})

new Typed('p', {
    strings: [`Loading....`],
    typeSpeed: 50,
    backSpeed: 0,
    fadeOut: true,
    loop: true
    
});