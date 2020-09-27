import App from './components/App';
import store from './redux/store';

App();
store.subscribe(() => {
  App();
});
