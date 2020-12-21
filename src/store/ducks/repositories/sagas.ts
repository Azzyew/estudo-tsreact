import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';

// precisa do * na função pra poder usar 'yield'

export function* load() {
    try {
        const response = yield call(api.get, 'users/Azzyew/repos');
        yield put(loadSuccess(response.data));
    } catch (err) {
        yield put(loadFailure());
    }
}
