import React from "react";
import Recipe from "./Recipe";

class Results extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: props.ingredients,
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

  componentDidMount() {
    const { ingredients } = this.state;

    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=0d208bfdd320463c9178a20f8b071b13&ingredients=${ingredients.join(
        ","
      )}&number=8`
    )
      .then((response) => response.json())
      .then((recipes) => console.log(JSON.stringify(recipes)))
      .catch(() => alert("Error!"));
  }
}

export default Results;
