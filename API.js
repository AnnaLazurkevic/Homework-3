const url = 'http://localhost:3000/furniture';

 const getFurniture = (success, failure)=>{
     fetch(url)
     .then(response => console.log(response.json()))
    //  .then(data=>console.log(data))
     .then(success)
     .catch(failure);

    //  

    //  .then(response=>{
    //      if(response.ok){
    //          return response.json()
    //      }else{
    //          console.log('ERROR')
    //          throw Error
    //      }
    //  })
    //  .catch(error=>console.log(error))
    
 
};

const deleteFurniture = (success, failure, id) => {
    fetch('http://localhost:3000/furniture'+id , { method: 'DELETE' })
    .then(success)
    .catch(failure);
  };

  const API = {
    getFurniture,
    deleteFurniture
  };
//  getFurniture()
//  deleteFurniture()

 
// const getUsers = (success, failure) => {
//     fetch(urlBase + '/users')
//       .then(response => response.json())
//       .then(success)
//       .catch(failure);
//   }