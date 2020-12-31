import React from "react";
import Ingredients from "./Ingredients";
import SearchField from "./SearchField";

class Search extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      suggestions: [],
      ingredients: props.ingredients,
    };

    this.onIngredientsUpdate = props.onIngredientsUpdate;
  }

  render() {
    const {
      state: { value, suggestions, ingredients },
      onType,
      onSelectSuggestion,
      onDeleteIngredient,
    } = this;

    return (
      <>
        <SearchField
          value={value}
          suggestions={suggestions}
          onType={onType}
          onSelectSuggestion={onSelectSuggestion}
        />
        <Ingredients
          ingredients={ingredients}
          onDeleteIngredient={onDeleteIngredient}
        />
      </>
    );
  }

  onType = (evt) => {
    const {
      target: { value },
    } = evt;

    fetch(
      `https://api.spoonacular.com/food/ingredients/search?apiKey=0d208bfdd320463c9178a20f8b071b13&query=${value}&number=8`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ suggestions: data.results }))
      .catch(() => alert("Error!"));

    this.setState({ value });
  };

  onSelectSuggestion = (ingredient) => {
    const { ingredients } = this.state;
    ingredients.push(ingredient);

    this.setState({ value: "", suggestions: [], ingredients });
    this.onIngredientsUpdate(ingredients);
  };

  onDeleteIngredient = (index) => {
    const ingredients = this.state.ingredients.slice();
    ingredients.splice(index, 1);

    this.setState({ ingredients });
    this.onIngredientsUpdate(ingredients);
  };
}

export default Search;
