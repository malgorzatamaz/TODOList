import { compose, createStore } from 'redux';
import todosApp from '../redux/reducers/reducers';

const store = createStore(
    todosApp,
    compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
);

export default store;
