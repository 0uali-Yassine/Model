let childDiv = document.querySelector('.childDiv');
let model = document.querySelector('.ourModel');
model.style.boxShadow = '1px 1px 53px black';
let img = document.querySelector('img');
let body = document.querySelector('body');
img.style.position = 'absolute';
model.style.transition = 'all .6s ease-out';

childDiv.addEventListener('click',(e)=>{
    e.stopPropagation();
    model.style.marginTop = '30%';
    model.style.opacity = '1';
    img.style.opacity = '.8'; 
})

let icon = document.querySelector('.icon');

icon.addEventListener('click',(e)=>{
    e.stopPropagation();
    model.style.marginTop = '0px';
    model.style.opacity = '0';
    img.style.opacity = '1'; 
})

body.addEventListener('click',function(){
    model.style.marginTop = '0px';
    model.style.opacity = '0';
    img.style.filter = ' blur(0px)';
})
