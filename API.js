const serverURL = 'http://localhost:3000';

class API {
  static getFurniture = (success, failure) => {
    setTimeout(() => {
      fetch(`${serverURL}/furniture`)
        .then(res => console.log(res.json()))
        .then(success)
        .catch(failure)
    }, 1000);
  }

  static deleteFurniture = (id, success, failure) => {
    fetch(`${serverURL}/furniture/${id}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(success)
      .catch(failure)
  }
}

// API.getFurniture(
//   (duomenys) => console.log('gavau duomenis', duomenys), 
//   (klaida) => console.error('klaida!!!', klaida) 
// )


// API.deleteFurniture(
//   '1', 
//   (duomenys) => console.log('gavau duomenis', duomenys), 
//   (klaida) => console.error('klaida!!!', klaida) 
// )






