// Open close corporative side menu
const toggleCorporativeMenu = () => {
    let corporative_menu = document.querySelector('.alpq-corporative-menu-toggle');
    let header_icon = document.querySelector('.alpq-header-icon')
    if (window.getComputedStyle(corporative_menu).right === '-320px') {
        corporative_menu.style.right = '0';
        header_icon.src = 'styles/icons/icon-close.svg?sanitize=true';
      } else  {
        corporative_menu.style.right = '-320px';
        header_icon.src = 'styles/icons/icon-menu-hamburger.svg?sanitize=true';
      }
  }
