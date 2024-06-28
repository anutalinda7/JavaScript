const names = [];
const div = document.querySelector('div');

const addName = (e) => {
e.preventDefault();
const input = document.querySelector('input');
// const newName = " " + input.value ;   lub tak
const newName = input.value ;
if (newName != ""){
    for(item of names){
        if (item === newName) {
            alert ('to ju jest ')
            input.value = ''
        return
        }
    }
    names.push(newName);
    // div.textContent = names;       lub tak
    div.textContent += `${newName}, `;
    input.value = ''
}
}


//nie jest to dokdnie co z projektu
// const addName2 = (e) => {
// // nameList += newName + ", "
// // div.textContent = nameList;
// // input.value = ''
//  e.preventDefault();
//  const input = document.querySelector('input');
//  const newName = input.value;
//  if(input.value.length) {
//      for (item of names){
//          if (item === newName) {
//              alert("to już jest");
//              return
//          }
//      }
//      names.push(newName);
//      // console.log(names);
//      div.textContent += newName + ", ";
//      input.value = "";
//  }}


document.querySelector('button').addEventListener('click', addName);


