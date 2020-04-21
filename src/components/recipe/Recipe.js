import React from 'react';
import './recipe.style.css';

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <div className="images">
        <img src={image} alt="" />
      </div>
      <h3 className="title">{title}</h3>
      <div className="ingredients-div">
        <p>Ingredients :</p>
        <ul className="ingredients">
          {ingredients.map((ingredient, index) => (
            <li className="ingredient" key={index}>
              <i className="fas fa-caret-right" />
              {ingredient.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;
