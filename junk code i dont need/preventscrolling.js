var scrolling = 0
window.addEventListener('wheel', (event) =>{
    event.preventDefault()
    scrolling += (event.deltaY / 100)   //one scroll = 100
},{passive: false})

