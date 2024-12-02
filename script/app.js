const icon = document.querySelector('.icon-1');
const herodoll = document.querySelector('.hero-doll');
const texts= document.querySelectorAll('.text-7');


icon.addEventListener('click' , ()=>{
    herodoll.classList.toggle('small');
    texts.forEach((text) => {
        if (text.style.display === "none") {
          text.style.display = "block"; 
        } else {
          text.style.display = "none"; 
        }
      });
})