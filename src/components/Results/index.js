import React from "react";
import Modal from "./Modal";
import Recipe from "./Recipe";

class Results extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      showRecipe: false,
      openedRecipe: {},
    };
  }

  render() {
    const { recipes, showRecipe, openedRecipe } = this.state;

    return (
      <>
        {recipes &&
          recipes.length > 0 &&
          recipes.map((item, index) => (
            <Recipe
              key={index}
              recipe={item}
              onClick={() => this.showRecipe(item)}
            />
          ))}
        {showRecipe && (
          <Modal
            recipe={openedRecipe}
            onClose={() => this.setState({ showRecipe: false })}
          />
        )}
      </>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      const { ingredients } = this.props;

      fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=7118bf08cdc1468b891131924bca9e21&ingredients=${ingredients.join(
          ","
        )}&number=8`
      )
        .then((response) => response.json())
        .then((recipes) => this.setState({ recipes }))
        .catch(() => alert("Error!"));
    }
  }

  showRecipe = (recipe) => {
    this.setState({ showRecipe: true, openedRecipe: recipe });
  };
}

export default Results;
