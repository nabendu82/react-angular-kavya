//Grab single element
// const form = document.getElementById('my-form');
// console.log(form);

// console.log(document.querySelector('.container'));
// console.log(document.querySelector('#name'));
// console.log(document.querySelector('h1'));

//Grab multiple elements
// console.log([2, 43, 12]);
// const nodeItems = document.querySelectorAll('.item');
// const colItems = document.getElementsByClassName('item');
// console.log(document.getElementsByTagName('li'));
// nodeItems.forEach(item => console.log(item));
// for(let i=0; i<colItems.length; i++){
//     console.log(colItems[i])
// }

//DOM manipulation
// const ul = document.querySelector('.items');
// ul.remove();
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', e => {
//     e.preventDefault();
//     ul.firstElementChild.textContent = 'HTML';
//     ul.children[1].innerText = 'CSS';
//     ul.lastElementChild.innerHTML = '<h4>JavaScript</h4>';
//     btn.style.backgroundColor = 'blue';
//     btn.style.fontSize = '14px';
// })

//Form manipulation
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerText = 'Please enter all fields';
        setTimeout(() => msg.remove(), 5000);
    } else {
        const li = document.createElement('li');
        li.append(`${nameInput.value} - ${emailInput.value}`);
        userList.append(li);
        nameInput.value = '';
        emailInput.value = '';
    }
}


