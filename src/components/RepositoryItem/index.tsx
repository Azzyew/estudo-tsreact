import React from 'react';
import { Repository } from '../../store/ducks/repositories/types';

interface OwnProps {
    repository: Repository
}

export default function RepositoryItem({ repository }: OwnProps) {
    return (
        <div className="card">
            <h3>{repository.name}</h3>
        </div>
    );
}
