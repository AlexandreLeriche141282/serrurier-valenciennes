// Sélectionner le bouton
const backToTopBtn = document.getElementById("backToTopBtn");

// Fonction pour afficher ou cacher le bouton selon le défilement
window.onscroll = function () {
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
        backToTopBtn.style.display = "block"; // Montrer le bouton
    } else {
        backToTopBtn.style.display = "none"; // Cacher le bouton
    }
};

// Fonction pour remonter en haut de la page
// backToTopBtn.addEventListener("click", function () {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth", // Défilement fluide
//     });
// });


// Script pour ne pas charger les images à l'ouverture
// Exclusion des images critiques (logo, header, etc.)
const exclusions = ['logo', 'header', 'favicon'];

document.querySelectorAll('img').forEach(img => {
  const src = img.getAttribute('src') || '';
  const alt = img.getAttribute('alt')?.toLowerCase() || '';

  const isExcluded = exclusions.some(keyword =>
    src.toLowerCase().includes(keyword) || alt.includes(keyword)
  );

  // Si l’image n’est pas exclue et n’a pas déjà l’attribut lazy, on l’ajoute
  if (!isExcluded && !img.hasAttribute('loading')) {
    img.setAttribute('loading', 'lazy');
  }
});


  document.querySelectorAll('.accordion').forEach(btn =>
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      const panel = btn.nextElementSibling;
      panel.style.maxHeight = panel.style.maxHeight
        ? null
        : panel.scrollHeight + 'px';
    })
  );



document.querySelectorAll('[data-slider]').forEach(slider => {
  const after = slider.querySelector('.after-wrapper');
  const handle = slider.querySelector('.slider-handle');
  let dragging = false;

  const update = x => {
    const rect = slider.getBoundingClientRect();
    let percent = ((x - rect.left) / rect.width) * 100;
    percent = Math.max(0, Math.min(100, percent));
    after.style.width = percent + '%';
    handle.style.left = percent + '%';
  };

  slider.addEventListener('mousedown', e => {
    dragging = true;
    update(e.clientX);
  });

  window.addEventListener('mousemove', e => {
    if (!dragging) return;
    e.preventDefault();
    update(e.clientX);
  });

  window.addEventListener('mouseup', () => dragging = false);

  slider.addEventListener('touchstart', e => {
    dragging = true;
    update(e.touches[0].clientX);
  }, { passive: false });

  window.addEventListener('touchmove', e => {
    if (!dragging) return;
    e.preventDefault();
    update(e.touches[0].clientX);
  }, { passive: false });

  window.addEventListener('touchend', () => dragging = false);
});


document.querySelectorAll('[data-slider]').forEach(slider => {
  const after = slider.querySelector('.after-wrapper');
  const handle = slider.querySelector('.slider-handle');
  let dragging = false;

  const update = x => {
    const rect = slider.getBoundingClientRect();
    let percent = ((x - rect.left) / rect.width) * 100;
    percent = Math.max(0, Math.min(100, percent));
    after.style.width = percent + '%';
    handle.style.left = percent + '%';
  };

  slider.addEventListener('mousedown', e => {
    dragging = true;
    update(e.clientX);
  });

  window.addEventListener('mousemove', e => {
    if (!dragging) return;
    e.preventDefault();
    update(e.clientX);
  });

  window.addEventListener('mouseup', () => dragging = false);

  slider.addEventListener('touchstart', e => {
    dragging = true;
    update(e.touches[0].clientX);
  }, { passive: false });

  window.addEventListener('touchmove', e => {
    if (!dragging) return;
    e.preventDefault();
    update(e.touches[0].clientX);
  }, { passive: false });

  window.addEventListener('touchend', () => dragging = false);
});



// Cursuer draggable image avant/apres intervention -------------------------------------------------------------
document.querySelectorAll('[data-slider]').forEach(slider => {
  const after = slider.querySelector('.after-wrapper');
  const handle = slider.querySelector('.slider-handle');
  let dragging = false;

  const update = x => {
    const rect = slider.getBoundingClientRect();
    let percent = ((x - rect.left) / rect.width) * 100;
    percent = Math.max(0, Math.min(100, percent));
    after.style.width = percent + '%';
    handle.style.left = percent + '%';
  };

  slider.addEventListener('mousedown', e => {
    dragging = true;
    update(e.clientX);
  });

  window.addEventListener('mousemove', e => {
    if (!dragging) return;
    e.preventDefault();
    update(e.clientX);
  });

  window.addEventListener('mouseup', () => dragging = false);

  slider.addEventListener('touchstart', e => {
    dragging = true;
    update(e.touches[0].clientX);
  }, { passive: false });

  window.addEventListener('touchmove', e => {
    if (!dragging) return;
    e.preventDefault();
    update(e.touches[0].clientX);
  }, { passive: false });

  window.addEventListener('touchend', () => dragging = false);
});