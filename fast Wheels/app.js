console.log("juned");
const navSlide = () =>{
    const burger =document.querySelector('.burger');
    const nav =document.querySelector('.navigation');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('active');

    });


}
navSlide();