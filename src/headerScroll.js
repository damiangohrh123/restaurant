import Logo from './assets/images/logo.png';
import homePage from './home.js';

function handleScroll() {
  const content = document.querySelector('.content');

  //Create header container
  const headerContent = document.createElement('div');
  headerContent.classList.add('headerContent');

  /**
   * Create a placeholder for when the headerContent becomes fixed position.
   * Prevents the content below from going under the headerContent.
   */
  const placeholder = document.createElement('div');
  placeholder.classList.add('placeHolder');
  content.appendChild(placeholder);

  //Create logo
  const logo = document.createElement('img');
  logo.classList.add('logo');
  logo.src = Logo;
  headerContent.appendChild(logo);

  logo.addEventListener('click', () => {
    content.textContent = '';
    homePage();
  });

  content.appendChild(headerContent);

  window.addEventListener('scroll', handleScroll);

  function handleScroll() {
    const halfwayPoint = headerContent.offsetHeight * 0.6;

    if (window.pageYOffset > halfwayPoint) {
      headerContent.classList.add('sticky');
      logo.classList.add('stickyLogo')
      placeholder.style.height = '300px';
    } else {
      headerContent.classList.remove('sticky');
      logo.classList.remove('stickyLogo');
      placeholder.style.height = 0;
    }
  }
}

export default handleScroll;