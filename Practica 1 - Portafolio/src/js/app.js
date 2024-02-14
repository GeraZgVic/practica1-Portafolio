const navLinks = document.querySelectorAll('.nav-link')

document.addEventListener("DOMContentLoaded", function () {

    navLinks.forEach(e => {
        if(e.parentElement.classList.contains('active')) {
            console.log(e);
            e.classList.remove('w-8','bg-slate-600');
            e.classList.add('w-16','bg-slate-200');
        }
    })

  // Manejar clic en enlaces
  document.querySelectorAll('.nav a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      // Desactivar todos los enlaces
      document.querySelectorAll('.nav a').forEach(function (el) {
        el.classList.remove('active');
      });

      // Activar el enlace actual
      this.classList.add('active');


      navLinks.forEach(e => {
        if(e.parentElement.classList.contains('active')) {
            console.log(e);
            e.classList.remove('w-8','bg-slate-600');
            e.classList.add('w-16','bg-slate-200');
            
        } else {
            e.classList.add('w-8','bg-slate-600');
            e.classList.remove('w-16','bg-slate-200' )
        }
      })
      
      // Desplazarse a la sección correspondiente
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
          behavior: 'smooth'
        });
      }
      window.location.href = this.getAttribute('href');
    });
  });


});
