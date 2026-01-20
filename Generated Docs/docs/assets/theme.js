function setTheme(name) {
  console.log('setTheme called with', name);
  localStorage.setItem('theme', name);
  document.documentElement.setAttribute('data-theme', name);
  document.body.setAttribute('data-theme', name);
  document.documentElement.setAttribute('data-md-color-scheme', name); 
  document.body.setAttribute('data-md-color-scheme', name);
  requestAnimationFrame(() => {}); // forcer repaint si nécessaire
  console.log('after setAttribute', document.documentElement.getAttribute('data-md-color-scheme'));
  applyNavVisibility(name);

  /* Définition des couleurs primaires et accentuées par thème => a voir si utilisé */
  /*const primaryByTheme = { ab: 'cyan', siemens: 'teal', moos: 'blue' };
  const accentByTheme  = { ab: 'lime', siemens: 'amber', moos: 'pink' };
  const primary = primaryByTheme[name] || 'teal';
  const accent  = accentByTheme[name]  || 'amber';

  // Attributs sur <html>
  const html = document.documentElement;
  html.setAttribute('data-theme', name);
  html.setAttribute('data-md-color-scheme', name);
  html.setAttribute('data-md-color-primary', primary);
  html.setAttribute('data-md-color-accent',  accent);

  // Miroir sur <body> (si ton CSS en a besoin)
  document.body.setAttribute('data-theme', name);
  document.body.setAttribute('data-md-color-scheme', name);
  document.body.setAttribute('data-md-color-primary', primary);
  document.body.setAttribute('data-md-color-accent',  accent);

  // Persistance Material (évite le retour à indigo)
  try {
    localStorage.setItem('theme', name);
    localStorage.setItem('md-color-scheme', name);
    localStorage.setItem('md-color-primary', primary);
    localStorage.setItem('md-color-accent', accent);
  } catch (e) {}

  applyNavVisibility(name);*/
}


function applyNavVisibility(name) {
  const map = {
    ab: ['/page-siemens/', '/page-moos/'],
    siemens: ['/page-ab/', '/page-moos/'],
    moos: ['/page-ab/', '/page-siemens/']
  };

  document.querySelectorAll('.md-nav__item').forEach(li => li.style.display = '');
  const toHide = map[name] || [];
  toHide.forEach(suffix => {
    document.querySelectorAll(`.md-nav__item a.md-nav__link[href$="${suffix}"]`)
      .forEach(a => {
        const li = a.closest('.md-nav__item');
        if (li) li.style.display = 'none';
      });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'moos';
  document.documentElement.setAttribute('data-theme', savedTheme);
  document.documentElement.setAttribute('data-md-color-scheme', savedTheme);
  document.body.setAttribute('data-theme', savedTheme);
  document.body.setAttribute('data-md-color-scheme', savedTheme);
  applyNavVisibility(savedTheme);
});
