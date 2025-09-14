// //Theory

// // const array = [1, 2, 3, 4, 5];
// const arrString = ['1', '2', '3', '4', '5'];


// const array = new Array(1,2,4,5,5)
// // console.log(array.length); 

// console.log(array[0]); 

const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');


const notes = [
{
  title:'Write block about array',
  completed: false,
}, 
{
  title:'Something',
  completed: true,
}, 
]

function render(){
  listElement.innerHTML = ''
  for(let i=0; i < notes.length; i++) 
  {
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
  }
}
render()

createBtn.onclick = function (){
    if (inputElement.value.length === 0){
        return
    }
    const newNote = {
      title:inputElement.value,
      completed: false,
    }
    notes.push(newNote)
    render()
    inputElement.value = ''
}

listElement.onclick = function (event){
  if(event.target.dataset.index)
  {
    const index = parseInt(event.target.dataset.index)
    const type = event.target.dataset.type

    if (type == 'toggle')
    {
      notes[index].completed = !notes[index].completed
    } 
    else if (type == 'remove')
      {
        notes.splice(index, 1)
      }
      render()
  }
}

function getNoteTemplate(note, index) {
  return `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
      <span>
        <button class="btn btn-sm btn-${note.completed ? 'warning' : 'success'} me-1" data-index="${index}" data-type="toggle">&check;</button>
        <button class="btn btn-sm btn-danger" data-index="${index}" data-type="remove">&times;</button>
      </span>
    </li>
  `
}


/*
Type object
*/ 

// const person = {
//   firstName:'Dmytro',
//   lastName:'Rebrykov',
//   yearOfBirth:2006,
//   hasGirlfriend:false,
//   languages:['ru','uk','en'],
//   getFullName: function(){
//     console.log(person.firstName + ' ' + person.lastName)
//   }
// }

// console.log(person['languages'])
// const key = 'hasGirlfriend'
// person.hasGirlfriend = true
// console.log(person[key])