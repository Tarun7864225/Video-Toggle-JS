
const btn=document.querySelector('.switch');
const vid=document.querySelector('.vid');

btn.addEventListener('click',function(){

    if(!btn.classList.contains('slide')){

        btn.classList.add('slide');
        vid.pause();
    }
    else{
        btn.classList.remove('slide');
        vid.play();
    }
});
