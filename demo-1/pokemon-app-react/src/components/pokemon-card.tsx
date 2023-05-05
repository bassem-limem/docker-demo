import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import formatDate from '../helpers/format-date';
import formatType from '../helpers/format-type';
import Pokemon from '../model/pokemon';
import './pokemon-card.scss';

type Props = {
    pokemon: Pokemon;
    borderColor?: string;
};

const PokemonCard: FunctionComponent<Props> = ({
    pokemon,
    borderColor = '#009688',
}) => {
    const [color, setColor] = useState<string>('#f5f5f5');
    const history = useHistory();

    const showBorder = () => {
        setColor(borderColor);
    };

    const hideBorder = () => {
        setColor('#f5f5f5');
    };

    const goToPokemonDetails = (id: number) => {
        history.push(`/pokemons/${id}`);
    };

    return (
        <div
            className="col s6 m4"
            onClick={() => goToPokemonDetails(pokemon.id)}
        >
            <div
                className="card horizontal"
                style={{ borderColor: color }}
                onMouseEnter={showBorder}
                onPointerLeave={hideBorder}
            >
                <div className="card-image">
                    <img src={pokemon.picture} alt={pokemon.name} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>{pokemon.name}</p>
                        <p>
                            <small>{formatDate(pokemon.created)}</small>
                        </p>
                        {pokemon.types.map((type) => (
                            <span key={type} className={formatType(type)}>
                                {type}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;
