class Main {
    constructor(name){
        this._name = name
        this._luck = false
    }
    get name() {
        return this._name
    }
    get luck() {
        return this._luck
    }
}
class Red extends Main {
    constructor(){
        this._color = "red"
    }
}
class Green extends Main {
    constructor(){
        this._color = "red"
    }
}
class Blue extends Main {
    constructor(){
        this._color = "red"
    }
}

module.exports = {
    Main
}