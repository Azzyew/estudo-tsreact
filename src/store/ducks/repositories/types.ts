/**
 * Action types (ações)
 */

import { InformationEvent } from 'http';

// no JavaScript normalmente seria assim:

// const Types = {
//     LOAD_REQUEST = 'repositories/LOAD_REQUEST',
//     LOAD_SUCCESS = 'repositories/LOAD_SUCCESS',
//     LOAD_FAILURE = 'repositories/LOAD_FAILURE',
// }

// Mas dá pra usar o enum do TS ao invés de const pra facilitar

export enum RepositoriesTypes {
    LOAD_REQUEST = 'repositories/LOAD_REQUEST',
    // LOAD_REQUEST - função disparada pra carregar os repositórios da API,
    // sendo ouvida pelo redux saga, e dependendo do resultado
    // vai chamar ou a LOAD_SUCCESS ou LOAD_FAILURE
    LOAD_SUCCESS = 'repositories/LOAD_SUCCESS',
    LOAD_FAILURE = 'repositories/LOAD_FAILURE'
}

/**
 * Data types (formato da info dentro do reducer)
 */
export interface Repository {
    id: number,
    name: string
}

/**
 * State types (formato do estado armazenado pelo reducer)
 */
export interface RepositoriesState {
    // como o estado do redux é imutável,
    // fica melhor usar o readonly pra que
    // os dados não sejam alterados
    readonly data: Repository[]
    readonly loading: boolean
    readonly error: boolean
}
