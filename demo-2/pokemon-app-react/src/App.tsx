import React, { FunctionComponent } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import PokemonsDetail from './pages/pokemon-details';
import PokemonEdit from './pages/pokemon-edit';
import PokemonList from './pages/pokemon-list';

const App: FunctionComponent = () => {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <div className="nav-wrapper teal">
                        <Link to="/" className="brand-logo center">
                            Pokédex
                        </Link>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/" component={PokemonList} />
                    <Route exact path="/pokemons" component={PokemonList} />
                    <Route
                        exact
                        path="/pokemons/:id"
                        component={PokemonsDetail}
                    />
                    <Route
                        exact
                        path="/pokemons/edit/:id"
                        component={PokemonEdit}
                    />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
