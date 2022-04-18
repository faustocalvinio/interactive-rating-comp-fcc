const numbersList=document.querySelectorAll('.number');
const submitBtn=document.querySelector('.btn-submit')

numbersList.forEach(numero => {
    numero.addEventListener('click',()=>{
        numero.classList.toggle('selected')
    }
    )
});


submitBtn.addEventListener('click',()=>{
    document.querySelector('.ty-container').classList.add('active');
    document.querySelector('.rating-container').style.display="none";
    document.querySelector('.ty-container').style.textAlign="center";
    let choice=document.querySelector('.selected').innerHTML;
    document.querySelector('#choice').innerHTML=choice;
});