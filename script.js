const hamburger = document.querySelector('#hamburger');
const modal = document.querySelector('.modal');
// const closeModal = document.querySelector('#close-modal');
const list = document.querySelectorAll('.modal-header-ul li');

hamburger.addEventListener('click', ()=>{
    modal.style.display = 'block';
});

for(let x=0;x<list.length;x++){
    list[x].addEventListener('click', ()=>{
        modal.style.display = 'none';
    })
}