import Header from './Header';

export default () => {
  const app = document.querySelector('#app');
  app.innerHTML = '';
  app.appendChild(Header());
};
