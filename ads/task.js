class Rotator {

    constructor(rotatorDiv){
        this.rotatorList = Array.from(rotatorDiv.querySelectorAll('.rotator__case'))
        this.currentActiveElem = rotatorDiv.querySelector('.rotator__case_active')
        setTimeout(this.changeElement.bind(this), this.currentActiveElem.dataset.speed)

    }

    changeElement(){
        let newElement = this.currentActiveElem.nextElementSibling
        if(!newElement){ newElement = this.rotatorList[0]}
        
        this.currentActiveElem.classList.remove('rotator__case_active')
        newElement.classList.add('rotator__case_active')
        newElement.style.color = newElement.dataset.color
        this.currentActiveElem = newElement
        setTimeout(this.changeElement.bind(this), newElement.dataset.speed)

    }

}

new Rotator(document.querySelector('.rotator'))