// 5. Faile FurnitureGridComponent.js panaudokite API.js faile sukurtą funkciją gauti visiems baldams: [1]
//   - Papildyti metodą intialize, jog būtų parsiunčiami pradiniai duomenys ir įrašomi į this.state.furniture

// 8. Faile FurnitureGridComponent.js komponente sukurkite metodą deleteFurniture ir įgalinkite jį, 
//   jog būtų trinami duomenys serveryje ir per naujo atnaujinamas grid'as


class FurnitureGridComponent {
    constructor() {
      this.htmlElement = document.createElement('div');
      this.state = {
        furniture: []
      };
      this.init();
    }
  
    fetchFurniture = () => API.getFurniture(this.saveFurniture, this.showError);////
  
    deleteFurniture = (id) => {
      API.deleteFurniture(
        id,
        this.fetchFurniture,////success,failure?
        this.showError
      );
    }
  

    saveFurniture = (furniture) => {
      this.state.furniture = furniture;
  
      this.render();
    }
  
    showError = error => console.error(error);
    
    wrapChild = (htmlElement) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'col-12 col-sm-6 col-lg-4';
      wrapper.append(htmlElement);
      return wrapper;
    }
  
    init = () => {
      this.fetchFurniture();
      this.htmlElement.className = 'row g-3 justify-content-center';
  
      this.render();
    }
  
    render = () => {
      if (this.state.furniture.length === 0) {
        this.htmlElement.innerHTML = '<img src="assets/loading.gif" style="width: 256px" />';
      } else {
        this.htmlElement.innerHTML = '';
        const cardComponents = this.state.furniture.map(({ id, ...cardProps }) => new FurnitureCardComponent({
          ...cardProps,
          onDelete: () => this.deleteFurniture(id)
        }));
        const cardElements = cardComponents.map(componenent => componenent.htmlElement);
        const wrappedElements = cardElements.map(this.wrapChild);
        this.htmlElement.append(...wrappedElements);
      }
    }
  }
