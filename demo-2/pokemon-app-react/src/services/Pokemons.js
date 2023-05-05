const getPokemons = () => {
    return fetch('http://localhost:4000/api/getAll')
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
};

export default getPokemons;
