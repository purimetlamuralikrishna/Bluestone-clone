const selected = document.querySelector('.selected');
const optionsContainer = document.querySelector('.options-container');
const optionList = document.querySelectorAll('.option');

selected.addEventListener('click',()=>{
    optionsContainer.classList.toggle('active');
})

optionList.forEach( o =>{
    o.addEventListener('click',()=>{
        selected.innerHTML = o.querySelector('label').innerHTML;
        optionsContainer.classList.remove('active');
    });
});