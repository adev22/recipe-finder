import React, { useEffect, useState } from 'react';
import './App.css';

import Recipe from './components/recipe/Recipe';
import Search from './components/search/Search';

const App = () => {
  const APP_ID = '7762ab4a';
  const APP_KEY = 'eba304d106482921d2e59878b46b7734';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
    };
    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Find Your Recipe Today</h1>
        <form onSubmit={getSearch} className="search-from">
          <Search updateSearch={updateSearch} search={search} />
        </form>
      </header>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
