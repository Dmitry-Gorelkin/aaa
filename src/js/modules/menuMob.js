import { refs } from '../base/refs';

const { headerMenu, headerOpenMenu, headerCloseMenu } = refs;

const openMenu = () => {
  console.log('Hello World');
};

const closeMenu = () => {};

headerOpenMenu.addEventListener('click', openMenu);
