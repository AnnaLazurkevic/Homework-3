// 5. Faile FurnitureGridComponent.js panaudokite API.js faile sukurtą funkciją gauti visiems baldams: [1]
//   - Papildyti metodą intialize, jog būtų parsiunčiami pradiniai duomenys ir įrašomi į this.state.furniture
class FurnitureComponent{
    constructor() {
        this.htmlElement =document.createElement('div'),          //JSON.parse(JSON.stringify(props)),
    this.state={
        furniture: [],       //JSON.parse(JSON.stringify(props.data)),
        loading: false
    }
   this.initialize()
    }
}


initialize =()=>{


const rowElement = document.createElement('tr')
}
