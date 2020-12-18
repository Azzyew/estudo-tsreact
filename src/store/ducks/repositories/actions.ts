import { action } from 'typesafe-actions';
import { RepositoriesTypes, Repository } from './types';

// se tiver algum dado pra enviar como payload ele deve ser o segundo parâmetro da action

export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);

export const loadSuccess = (data: Repository[]) => action(RepositoriesTypes.LOAD_SUCCESS, data);
// quando o saga fizer a call pra api e receber os dados dos
// repositórios como resposta da request, ele vai enviar esses
// dados pro LOAD_SUCCESS, onde o reducer vai ouvir e atualizar no estado

export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE);
