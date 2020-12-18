import { Reducer } from 'redux';
import { RepositoriesState, RepositoriesTypes } from './types';

const INITIAL_STATE: RepositoriesState = {
    data: [],
    error: false,
    loading: false,
};

// reducer recebe um parametro pra saber o formato q o reducer vai manipular os dados
const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RepositoriesTypes.LOAD_REQUEST:
            return { ...state, loading: true };
        case RepositoriesTypes.LOAD_SUCCESS:
            return {
                ...state, loading: false, error: false, data: action.payload.data,
            };
        case RepositoriesTypes.LOAD_FAILURE:
            return {
                ...state, loading: false, error: true, data: [],
            };
        default:
            return state;
    }
};

export default reducer;
