const book = document.querySelector('#book')
const dataSetParams = {
    size: {small: 'book_fs-small',
            big: 'book_fs-big',
    },
    textColor: {black: 'book_color-black',
                gray: 'book_color-gray',
                whitesmoke: 'book_color-whitesmoke',
    },
    bgColor: {black: 'book_bg-black',
              gray: 'book_bg-gray',
              white:  'book_bg-white',
    },
    
}

class Button {

    constructor(param, classSelector, classActive){
        this.param = param
        this.classActive = classActive
        this.buttonList = Array.from(document.querySelectorAll(classSelector))
        this.buttonList.forEach(elem => elem.addEventListener('click', this.buttonClickHandler.bind(this)))
    }

    removeAllClasses(){
        const classes = Object.values(dataSetParams[this.param])
        classes.forEach(elem => book.classList.remove(elem))

    }

    buttonClickHandler(event){        
        event.preventDefault()
        const newValue = event.target.dataset[this.param]

        this.removeAllClasses()

        if(newValue){book.classList.add(dataSetParams[this.param][newValue])}
        this.setActive(event.target)

    }

    setActive(elem){
        const currentActive = this.buttonList.find(elem => elem.classList.contains(this.classActive))
        currentActive.classList.remove(this.classActive)
        elem.classList.add(this.classActive)
    }

    
}

new Button('size', '.font-size', 'font-size_active')
new Button('textColor', '.book__control_color>.color', 'color_active')
new Button('bgColor', '.book__control_background>.color', 'color_active')