const numbersList=document.querySelectorAll('.number');
const submitBtn=document.querySelector('.btn-submit')

numbersList.forEach(numero => {
    numero.addEventListener('click',()=>{
        numero.classList.toggle('selected')
    }
    )
});


submitBtn.addEventListener('click',()=>{
    document.querySelector('.card').classList.toggle('flexbox')
    document.querySelector('.icon-star').remove();
    // star.style.opacity=0;
    document.querySelector('.title').remove();
    // title.style.opacity=0;
    document.querySelector('.main-text').remove();
    document.querySelector('.number-list').remove();
    submitBtn.remove();
    let imageSent=document.createElement('img');
    imageSent.src="../images/illustration-thank-you.svg";
    imageSent.classList='img-sent'
    let selectionText=document.createElement('p');
    selectionText.className='selection-txt selection-txt-new';
    selectionText.innerText='You selected Add rating here out of 5';
    let titleNew=document.createElement('h1');
    titleNew.classList='title title-new';
    titleNew.innerText='Thank you!';
    let mainTextNew=document.createElement('p');
    mainTextNew.innerText="We appreciate you taking the time to give a rating. If you ever need more support, don´t hesitate to get in touch!"
    mainTextNew.className='main-text new-main-txt';
    document.querySelector('.card').appendChild(imageSent);
    document.querySelector('.card').appendChild(selectionText);    
    document.querySelector('.card').appendChild(titleNew);    
    document.querySelector('.card').appendChild(mainTextNew);
    // maintxt.style.opacity=0;
    // let numberUList=document.querySelector('.number-list');
    // numberUList.style.opacity=0;
    // submitBtn.style.opacity=0;
});