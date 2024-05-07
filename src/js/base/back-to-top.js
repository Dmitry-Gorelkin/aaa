import { addBackToTop } from 'vanilla-back-to-top';

const sizeBackToTop = () => (window.innerWidth > 768 ? 50 : 40);

addBackToTop({
  diameter: sizeBackToTop(),
  backgroundColor: '#333333',
  textColor: '#ffffff',
  scrollDuration: 400,
});
