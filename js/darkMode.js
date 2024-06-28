window.addEventListener('load', ()=>{
   document.getElementById('toggle_btn').addEventListener('click', ()=>{
      document.querySelector('body').classList.toggle('dark_mode');
      document.querySelector('.fa-regular').classList.toggle('fa-sun');
      document.querySelector('.fa-regular').classList.toggle('fa-moon');
   });  
})