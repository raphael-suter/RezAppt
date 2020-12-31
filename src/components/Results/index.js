import React from "react";
import Recipe from "./Recipe";

class Results extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
    };
  }

  render() {
    const { recipes } = this.state;

    return (
      <>
        {recipes &&
          recipes.length > 0 &&
          recipes.map((item, index) => <Recipe key={index} recipe={item} />)}
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
}

export default Results;
