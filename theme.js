const nav=document.getElementById('nav');
const footer=document.getElementById('footer');
let lightMode = localStorage.getItem('lightMode'); 
const darkModeToggle =  document.getElementById('chk');

const enableDarkMode = () => {
  
  document.body.classList.add('dark');
  nav.classList.replace('bg-dark','bg-light');
  footer.classList.replace('bg-dark','bg-light');
 
  localStorage.setItem('lightMode', 'enabled');
}

const disableDarkMode = () => {

  document.body.classList.remove('dark');
  nav.classList.replace('bg-light','bg-dark');
  footer.classList.replace('bg-light','bg-dark');
  
  localStorage.setItem('lightMode', null);
}
 

if (lightMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('change', () => {
 
 lightMode = localStorage.getItem('lightMode'); 
  

  if (lightMode !== 'enabled') {
    enableDarkMode();
 
  } else {  
    disableDarkMode(); 
  }
});
