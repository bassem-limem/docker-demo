import React, { FunctionComponent, useState, useEffect } from 'react';
import POKEMONS from '../mock/mock-pokemon';
import Pokemon from '../model/pokemon';
import PokemonCard from '../components/pokemon-card';
import formatType from '../helpers/format-type';

const PokemonList: FunctionComponent = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        setPokemons(POKEMONS);
    }, []);

    return (
        <div>
            <div className="container">
                <div className="row">
                    {pokemons
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((pokemon) => (
                            <PokemonCard
                                key={pokemon.id}
                                pokemon={pokemon}
                                borderColor={
                                    formatType(pokemon.types[0]).split(' ')[1]
                                }
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default PokemonList;
