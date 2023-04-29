const book = document.querySelector('#book')
const dataSetParams = {
    size: {small: 'book_fs-small',
            big: 'book_fs-big',
        }
    
}

class Button {

    constructor(param, classSelector){
        this.param = param
        this.buttonList = Array.from(document.querySelectorAll(classSelector))
        console.log(this.buttonList)
        this.buttonList.forEach(elem => elem.addEventListener('click', this.buttonClickHandler.bind(this)))
    }

    removeAllClasses(){
        book.classList.remove('book_fs-small')
        book.classList.remove('book_fs-big')
    }

    buttonClickHandler(event){
        
        event.preventDefault()
        const newValue = event.target.dataset[this.param]
        console.log(newValue)

        this.removeAllClasses()

        if(newValue){book.classList.add(dataSetParams[this.param][newValue])}

    }

    
}

new Button('size', '.font-size')