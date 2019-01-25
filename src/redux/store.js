import { compose, createStore } from 'redux';
import rootReducer from '../redux/reducers/reducers';

const store = createStore(
    rootReducer,
    compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
);

export default store;
