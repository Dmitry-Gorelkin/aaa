import { refs } from '../base/refs';

const { headerMenu, headerOpenMenu, headerCloseMenu } = refs;

const openMenu = () => {
  headerMenu.classList.remove('is-hidden');
  headerCloseMenu.addEventListener('click', closeMenu);
};

const closeMenu = () => {
  headerMenu.classList.add('is-hidden');
  headerCloseMenu.removeEventListener('click', closeMenu);
};

headerOpenMenu.addEventListener('click', openMenu);
