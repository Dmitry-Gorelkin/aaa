import { refs } from '../base/refs';

const { headerMenu, headerOpenMenu, headerCloseMenu } = refs;

const openMenu = () => {
  headerMenu.classList.remove('is-hidden');

  headerCloseMenu.addEventListener('click', closeMenu);

  document.body.style.overflow = 'hidden';
};

const closeMenu = () => {
  headerMenu.classList.add('is-hidden');

  headerCloseMenu.removeEventListener('click', closeMenu);

  document.body.style.overflow = 'auto';
};

headerOpenMenu.addEventListener('click', openMenu);
