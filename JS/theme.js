const chk = document.getElementById('chk');
const nav=document.getElementById('nav');
const footer=document.getElementById('footer');


chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
    nav.classList.toggle('bg-dark');
    footer.classList.toggle('bg-dark');
   nav.classList.toggle('navbar-dark');
 nav.classList.toggle('navbar-light'); 
 nav.classList.toggle('bg-light'); 

 
 footer.classList.toggle('bg-light');
    
});

