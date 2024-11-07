const input = document.querySelector('.input')
const button = document.querySelector('.button')
const error = document.querySelector('.error')
const image = document.querySelector('.image')
const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
button.addEventListener("click", function(e) {
    e.preventDefault();
   if(!pattern.test(input.value)){
    error.classList.remove("hidden");
    image.classList.remove("hidden")
    input.classList.add("active");
   } else{
    error.classList.add("hidden");
    const inputValue = input.value;
    alert(`${inputValue}`);
    window.location.reload()
   }

});
