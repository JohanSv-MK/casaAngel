document.addEventListener("DOMContentLoaded", function () {
  // Código existente para animar las tarjetas del menú
  const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  cards.forEach((card) => {
    observer.observe(card);
  });

  // Toggle de la sección Ubicación
  const btnUbicacion = document.getElementById('btn-ubicacion');
  btnUbicacion.addEventListener('click', function () {
    const ubicacionSection = document.getElementById('ubicacion');
    if (ubicacionSection.style.display === "none" || ubicacionSection.style.display === "") {
      ubicacionSection.style.display = "block";
      ubicacionSection.scrollIntoView({ behavior: "smooth" });
    } else {
      ubicacionSection.style.display = "none";
    }
  });

  // Toggle de la sección Sobre Nosotros
  const btnSobreNosotros = document.getElementById('btn-sobre-nosotros');
  btnSobreNosotros.addEventListener('click', function () {
    const sobreNosotrosSection = document.getElementById('sobre-nosotros');
    if (sobreNosotrosSection.style.display === "none" || sobreNosotrosSection.style.display === "") {
      sobreNosotrosSection.style.display = "block";
      sobreNosotrosSection.scrollIntoView({ behavior: "smooth" });
    } else {
      sobreNosotrosSection.style.display = "none";
    }
  });

  // Botón Scroll to Top
  const scrollTopBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) { // Aparece tras 300px de scroll
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });

  scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
