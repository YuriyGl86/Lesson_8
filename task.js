function isVisible(elem){
    const { top, bottom } = elem.getBoundingClientRect()
    if(bottom<0 || top > window.innerHeight){return false}
    return true
}

document.addEventListener('scroll', scrollHandler)
const divList = Array.from(document.querySelectorAll('.reveal'))

function scrollHandler(){
    divList.forEach(elem => {
        if(isVisible(elem) != elem.classList.contains('reveal_active')) {
            elem.classList.toggle('reveal_active')
        }
    })

}