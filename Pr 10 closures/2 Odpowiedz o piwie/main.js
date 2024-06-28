const userData = (name = "aga", age=6) => {
  let userName = name;
  let userAge =  age;
 return function showMessage(){
    document.body.textContent = `Cześc ${userName}, ${userAge >= 18 ? 'Możesz kupić piswo' : 'Nie możesz kupić piwo'}`
  }
  // return showMessage()  
  //LUB odrazu bez klika w windows poniżej 
}

const mieszko = userData("Mieszko", 50);
const mieszko2 = userData("Mieszko2", 5);
const noName = userData();

window.addEventListener('click', mieszko)






