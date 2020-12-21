// Fazer a inicialização do redux, configuração do estado da aplicação
import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { RepositoriesState } from './ducks/repositories/types';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
    repositories: RepositoriesState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// usar o applyMiddleware na createStore pra adicionar o
// middleware dentro do redux

sagaMiddleware.run(rootSaga);

export default store;
