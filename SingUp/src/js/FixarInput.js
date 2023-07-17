const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.addEventListener('input', function() {
   if(input.value !== '') {
        input.parentNode.classList.add('fixada')
   };
   if(input.value === '') {
        input.parentNode.classList.remove('fixada')
   }
  });
});

