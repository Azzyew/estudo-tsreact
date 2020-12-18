// combinar todos os reducers da aplicação em um reducer só
import { combineReducers } from 'redux';
import repositories from './repositories';

export default combineReducers({
    repositories,
});