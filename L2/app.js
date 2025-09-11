// //Theory

// // const array = [1, 2, 3, 4, 5];
// const arrString = ['1', '2', '3', '4', '5'];


// const array = new Array(1,2,4,5,5)
// // console.log(array.length); 

// console.log(array[0]); 

const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');

// console.log(inputElement.value)

const notes = ['Write block about array', 'Something']

function render(){
  
  for(let i=0; i < notes.length; i++) 
  {
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
  }
}
render()

createBtn.onclick = function (){
    if (inputElement.value.length === 0){
        return
    }
    // listElement.innerHTML = 
    listElement.insertAdjacentHTML('beforeend',getNoteTemplate(inputElement.value))
    inputElement.value = ''
}

function getNoteTemplate(title){
  return `<li class="list-group-item d-flex justify-content-between align-items-center">
          <span>${title}</span>
          <span>
            <button class="btn btn-sm btn-success me-1">&check;</button>
            <button class="btn btn-sm btn-danger">&times;</button>
          </span>
        </li>`
}

/*
Type object
*/ 

const person = {
  firstName:'Dmytro',
  lastName:'Rebrykov',
  yearOfBirth:2006,
  hasGirlfriend:false,
  languages:['ru','uk','en'],
  getFullName: function(){
    co
  }
}
console.log(person)