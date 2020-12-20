import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Repository } from '../../store/ducks/repositories/types';
import { ApplicationState } from '../../store';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';

interface StateProps {
// mapear o tipo das informações que vêm do mapStateToProps
    repositories: Repository[]
}

interface DispatchProps {
// mapear o tipo das funções que vêm do mapDispatchToProps
    loadRequest(): void
}

// interface OwnProps {
// // qualquer outra propriedade que venha de um componente pai
// }

type Props = StateProps & DispatchProps;

class RepositoryList extends Component<Props> {
    componentDidMount() {
        const { loadRequest } = this.props;

        loadRequest();
    }

    render() {
        const { repositories } = this.props;
        return (
          <ul>
              {repositories.map((repository) => repository.name)}
            </ul>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    repositories: state.repositories.data,
    // isso é repassado como propriedade pra dentro do componente (usar o this.props depois)
});

// eslint-disable-next-line max-len
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
