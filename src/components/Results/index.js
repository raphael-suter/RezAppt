import React from "react";
import Modal from "./Modal";
import Recipe from "./Recipe";

class Results extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [
        {
          id: 810863,
          title: "Coconut Banana Iced Coffee Smoothie",
          image: "https://spoonacular.com/recipeImages/810863-312x231.jpg",
          imageType: "jpg",
          usedIngredientCount: 3,
          missedIngredientCount: 0,
          missedIngredients: [],
          usedIngredients: [
            {
              id: 9040,
              amount: 1.0,
              unit: "large",
              unitLong: "large",
              unitShort: "large",
              aisle: "Produce",
              name: "banana",
              original: "1 large, frozen banana",
              originalString: "1 large, frozen banana",
              originalName: "frozen banana",
              metaInformation: ["frozen"],
              meta: ["frozen"],
              extendedName: "frozen banana",
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg",
            },
            {
              id: 14209,
              amount: 4.0,
              unit: "",
              unitLong: "",
              unitShort: "",
              aisle: "Tea and Coffee",
              name: "coffee",
              original:
                "4 squeezes of Folgers Original Iced Coffee Concentrates",
              originalString:
                "4 squeezes of Folgers Original Iced Coffee Concentrates",
              originalName:
                "squeezes of Folgers Original Iced Coffee Concentrates",
              metaInformation: [],
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/brewed-coffee.jpg",
            },
            {
              id: 1077,
              amount: 16.0,
              unit: "oz",
              unitLong: "ounces",
              unitShort: "oz",
              aisle: "Milk, Eggs, Other Dairy",
              name: "milk",
              original: "16 oz. milk",
              originalString: "16 oz. milk",
              originalName: "milk",
              metaInformation: [],
              meta: [],
              image: "https://spoonacular.com/cdn/ingredients_100x100/milk.png",
            },
          ],
          unusedIngredients: [],
          likes: 819,
        },
        {
          id: 491423,
          title: "Iced Banana Latte and #dunkinmugup",
          image: "https://spoonacular.com/recipeImages/491423-312x231.jpg",
          imageType: "jpg",
          usedIngredientCount: 3,
          missedIngredientCount: 1,
          missedIngredients: [
            {
              id: 14181,
              amount: 2.0,
              unit: "tablespoons",
              unitLong: "tablespoons",
              unitShort: "Tbsp",
              aisle: "Frozen;Baking;Condiments",
              name: "chocolate syrup",
              original: "2 tablespoons chocolate syrup",
              originalString: "2 tablespoons chocolate syrup",
              originalName: "chocolate syrup",
              metaInformation: [],
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/chocolate-syrup.jpg",
            },
          ],
          usedIngredients: [
            {
              id: 9040,
              amount: 2.0,
              unit: "medium",
              unitLong: "mediums",
              unitShort: "medium",
              aisle: "Produce",
              name: "bananas",
              original: "2 medium bananas, peeled, sliced and frozen",
              originalString: "2 medium bananas, peeled, sliced and frozen",
              originalName: "bananas, peeled, sliced and frozen",
              metaInformation: ["frozen", "peeled", "sliced"],
              meta: ["frozen", "peeled", "sliced"],
              extendedName: "frozen bananas",
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg",
            },
            {
              id: 14209,
              amount: 1.5,
              unit: "cups",
              unitLong: "cups",
              unitShort: "cup",
              aisle: "Tea and Coffee",
              name: "coffee",
              original: "1½ cups cold Dunkin' Donuts coffee",
              originalString: "1½ cups cold Dunkin' Donuts coffee",
              originalName: "cold Dunkin' Donuts coffee",
              metaInformation: ["cold"],
              meta: ["cold"],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/brewed-coffee.jpg",
            },
            {
              id: 1077,
              amount: 0.75,
              unit: "cup",
              unitLong: "cups",
              unitShort: "cup",
              aisle: "Milk, Eggs, Other Dairy",
              name: "milk",
              original: "¾ cup 2% milk",
              originalString: "¾ cup 2% milk",
              originalName: "2% milk",
              metaInformation: ["2%"],
              meta: ["2%"],
              image: "https://spoonacular.com/cdn/ingredients_100x100/milk.png",
            },
          ],
          unusedIngredients: [],
          likes: 1253,
        },
        {
          id: 125217,
          title: "Frozen Banana Cappuccino",
          image: "https://spoonacular.com/recipeImages/125217-312x231.jpg",
          imageType: "jpg",
          usedIngredientCount: 3,
          missedIngredientCount: 1,
          missedIngredients: [
            {
              id: 19165,
              amount: 4.0,
              unit: "servings",
              unitLong: "servings",
              unitShort: "servings",
              aisle: "Baking",
              name: "cocoa powder",
              original: "nutmeg or cinnamon or cocoa powder",
              originalString: "nutmeg or cinnamon or cocoa powder",
              originalName: "nutmeg or cinnamon or cocoa powder",
              metaInformation: [],
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/cocoa-powder.png",
            },
          ],
          usedIngredients: [
            {
              id: 9040,
              amount: 1.0,
              unit: "large",
              unitLong: "large",
              unitShort: "large",
              aisle: "Produce",
              name: "banana",
              original: "1 large banana , peeled, sliced and frozen",
              originalString: "1 large banana , peeled, sliced and frozen",
              originalName: "banana , peeled, sliced and frozen",
              metaInformation: ["frozen", "peeled", "sliced"],
              meta: ["frozen", "peeled", "sliced"],
              extendedName: "frozen banana",
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg",
            },
            {
              id: 1085,
              amount: 2.5,
              unit: "cups",
              unitLong: "cups",
              unitShort: "cup",
              aisle: "Milk, Eggs, Other Dairy",
              name: "skim milk",
              original: "2 1/2 cups skim milk",
              originalString: "2 1/2 cups skim milk",
              originalName: "skim milk",
              metaInformation: [],
              meta: [],
              image: "https://spoonacular.com/cdn/ingredients_100x100/milk.jpg",
            },
            {
              id: 14209,
              amount: 1.5,
              unit: "cups",
              unitLong: "cups",
              unitShort: "cup",
              aisle: "Tea and Coffee",
              name: "strong coffee",
              original: "1 1/2 cups strong coffee , frozen in cubes",
              originalString: "1 1/2 cups strong coffee , frozen in cubes",
              originalName: "strong coffee , frozen in cubes",
              metaInformation: ["frozen"],
              meta: ["frozen"],
              extendedName: "frozen strong coffee",
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/brewed-coffee.jpg",
            },
          ],
          unusedIngredients: [
            {
              id: 1077,
              amount: 1.0,
              unit: "serving",
              unitLong: "serving",
              unitShort: "serving",
              aisle: "Milk, Eggs, Other Dairy",
              name: "milk",
              original: "milk",
              originalString: "milk",
              originalName: "milk",
              metaInformation: [],
              meta: [],
              image: "https://spoonacular.com/cdn/ingredients_100x100/milk.png",
            },
          ],
          likes: 1,
        },
        {
          id: 576763,
          title: "Pumpkin Spice Frozen Latte with Vegan Whipped Cream",
          image: "https://spoonacular.com/recipeImages/576763-312x231.jpg",
          imageType: "jpg",
          usedIngredientCount: 3,
          missedIngredientCount: 2,
          missedIngredients: [
            {
              id: 1002035,
              amount: 0.25,
              unit: "teaspoon",
              unitLong: "teaspoons",
              unitShort: "tsp",
              aisle: "Spices and Seasonings",
              name: "pumpkin pie spice",
              original: "-1/4 teaspoon pumpkin pie spice",
              originalString: "-1/4 teaspoon pumpkin pie spice",
              originalName: "pumpkin pie spice",
              metaInformation: [],
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/garam-masala.jpg",
            },
            {
              id: 11424,
              amount: 0.25,
              unit: "cup",
              unitLong: "cups",
              unitShort: "cup",
              aisle: "Baking",
              name: "pumpkin puree",
              original: "-1/4 cup pumpkin puree",
              originalString: "-1/4 cup pumpkin puree",
              originalName: "pumpkin puree",
              metaInformation: [],
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/pumpkin-puree.jpg",
            },
          ],
          usedIngredients: [
            {
              id: 9040,
              amount: 1.0,
              unit: "medium",
              unitLong: "medium",
              unitShort: "medium",
              aisle: "Produce",
              name: "banana",
              original: "-1 medium banana frozen",
              originalString: "-1 medium banana frozen",
              originalName: "banana frozen",
              metaInformation: ["frozen"],
              meta: ["frozen"],
              extendedName: "frozen banana",
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg",
            },
            {
              id: 14209,
              amount: 0.25,
              unit: "cup",
              unitLong: "cups",
              unitShort: "cup",
              aisle: "Tea and Coffee",
              name: "coffee",
              original:
                "-1/4 cup coffee, cold (I just used leftover from the morning's pot!)",
              originalString:
                "-1/4 cup coffee, cold (I just used leftover from the morning's pot!)",
              originalName:
                "coffee, cold (I just used leftover from the morning's pot!)",
              metaInformation: [
                "leftover",
                "cold",
                "(I just used from the morning's pot!)",
              ],
              meta: [
                "leftover",
                "cold",
                "(I just used from the morning's pot!)",
              ],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/brewed-coffee.jpg",
            },
            {
              id: 1077,
              amount: 0.25,
              unit: "cup",
              unitLong: "cups",
              unitShort: "cup",
              aisle: "Milk, Eggs, Other Dairy",
              name: "milk",
              original: "-1/4 cup milk (of choice)",
              originalString: "-1/4 cup milk (of choice)",
              originalName: "milk (of choice)",
              metaInformation: ["(of choice)"],
              meta: ["(of choice)"],
              image: "https://spoonacular.com/cdn/ingredients_100x100/milk.png",
            },
          ],
          unusedIngredients: [],
          likes: 2403,
        },
        {
          id: 729601,
          title: "Loaded Coffee Breakfast Smoothie",
          image: "https://spoonacular.com/recipeImages/729601-312x231.jpg",
          imageType: "jpg",
          usedIngredientCount: 3,
          missedIngredientCount: 2,
          missedIngredients: [
            {
              id: 12195,
              amount: 1.0,
              unit: "serving",
              unitLong: "serving",
              unitShort: "serving",
              aisle: "Nut butters, Jams, and Honey",
              name: "nut butter",
              original: "Optional: spoonful of nut butter",
              originalString: "Optional: spoonful of nut butter",
              originalName: "Optional: spoonful of nut butter",
              metaInformation: [],
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/almond-butter.jpg",
            },
            {
              id: 8120,
              amount: 25.0,
              unit: "g",
              unitLong: "grams",
              unitShort: "g",
              aisle: "Cereal",
              name: "rolled oats",
              original: "1/4 cup (25 g) rolled oats",
              originalString: "1/4 cup (25 g) rolled oats",
              originalName: "1/4 cup rolled oats",
              metaInformation: [],
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/rolled-oats.jpg",
            },
          ],
          usedIngredients: [
            {
              id: 9040,
              amount: 1.0,
              unit: "",
              unitLong: "",
              unitShort: "",
              aisle: "Produce",
              name: "banana",
              original: "1 banana, previously sliced and frozen",
              originalString: "1 banana, previously sliced and frozen",
              originalName: "banana, previously sliced and frozen",
              metaInformation: ["frozen", "sliced"],
              meta: ["frozen", "sliced"],
              extendedName: "frozen banana",
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg",
            },
            {
              id: 1077,
              amount: 120.0,
              unit: "mL",
              unitLong: "mLs",
              unitShort: "mL",
              aisle: "Milk, Eggs, Other Dairy",
              name: "milk",
              original: "1/2 cup (120 mL) milk (any variety)",
              originalString: "1/2 cup (120 mL) milk (any variety)",
              originalName: "1/2 cup milk (any variety)",
              metaInformation: ["(any variety)"],
              meta: ["(any variety)"],
              image: "https://spoonacular.com/cdn/ingredients_100x100/milk.png",
            },
            {
              id: 14209,
              amount: 120.0,
              unit: "mL",
              unitLong: "mLs",
              unitShort: "mL",
              aisle: "Tea and Coffee",
              name: "strong coffee",
              original: "1/2 cup (120 mL) strong brewed coffee, chilled",
              originalString: "1/2 cup (120 mL) strong brewed coffee, chilled",
              originalName: "1/2 cup strong brewed coffee, chilled",
              metaInformation: ["chilled", "brewed"],
              meta: ["chilled", "brewed"],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/brewed-coffee.jpg",
            },
          ],
          unusedIngredients: [],
          likes: 216,
        },
        {
          id: 1100875,
          title: "Coffee Protein Smoothie",
          image: "https://spoonacular.com/recipeImages/1100875-312x231.jpg",
          imageType: "jpg",
          usedIngredientCount: 3,
          missedIngredientCount: 2,
          missedIngredients: [
            {
              id: 16150,
              amount: 2.0,
              unit: "tablespoons",
              unitLong: "tablespoons",
              unitShort: "Tbsp",
              aisle: "Nut butters, Jams, and Honey",
              name: "smooth peanut butter",
              original: "2 tablespoons smooth natural peanut butter",
              originalString: "2 tablespoons smooth natural peanut butter",
              originalName: "smooth natural peanut butter",
              metaInformation: [],
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/peanut-butter.png",
            },
            {
              id: 99075,
              amount: 1.0,
              unit: "scoop",
              unitLong: "scoop",
              unitShort: "scoop",
              aisle: "Health Foods",
              name: "chocolate protein powder",
              original: "1 scoop chocolate protein powder",
              originalString: "1 scoop chocolate protein powder",
              originalName: "chocolate protein powder",
              metaInformation: [],
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/chocolate-protein-powder.jpg",
            },
          ],
          usedIngredients: [
            {
              id: 14209,
              amount: 1.0,
              unit: "cup",
              unitLong: "cup",
              unitShort: "cup",
              aisle: "Tea and Coffee",
              name: "coffee",
              original: "1 cup brewed coffee",
              originalString: "1 cup brewed coffee",
              originalName: "brewed coffee",
              metaInformation: ["brewed"],
              meta: ["brewed"],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/brewed-coffee.jpg",
            },
            {
              id: 9040,
              amount: 1.0,
              unit: "large",
              unitLong: "large",
              unitShort: "large",
              aisle: "Produce",
              name: "banana",
              original: "1 large banana",
              originalString: "1 large banana",
              originalName: "banana",
              metaInformation: [],
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg",
            },
            {
              id: 1077,
              amount: 1.0,
              unit: "cup",
              unitLong: "cup",
              unitShort: "cup",
              aisle: "Milk, Eggs, Other Dairy",
              name: "milk",
              original:
                "1 cup almond milk, you can also use coconut milk, soy milk, or regular milk",
              originalString:
                "1 cup almond milk, you can also use coconut milk, soy milk, or regular milk",
              originalName:
                "almond milk, you can also use coconut milk, soy milk, or regular milk",
              metaInformation: ["canned"],
              meta: ["canned"],
              extendedName: "canned milk",
              image: "https://spoonacular.com/cdn/ingredients_100x100/milk.png",
            },
          ],
          unusedIngredients: [],
          likes: 2,
        },
        {
          id: 410975,
          title: "Banana Coffee Smoothie",
          image: "https://spoonacular.com/recipeImages/410975-312x231.jpg",
          imageType: "jpg",
          usedIngredientCount: 3,
          missedIngredientCount: 2,
          missedIngredients: [
            {
              id: 1012010,
              amount: 0.125,
              unit: "teaspoon",
              unitLong: "teaspoons",
              unitShort: "tsp",
              aisle: "Spices and Seasonings",
              name: "ground cinnamon",
              original: "1/8 teaspoon ground cinnamon",
              originalString: "1/8 teaspoon ground cinnamon",
              originalName: "ground cinnamon",
              metaInformation: [],
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg",
            },
            {
              id: 2025,
              amount: 1.0,
              unit: "Dash",
              unitLong: "Dash",
              unitShort: "Dash",
              aisle: "Spices and Seasonings",
              name: "ground nutmeg",
              original: "Dash ground nutmeg",
              originalString: "Dash ground nutmeg",
              originalName: "ground nutmeg",
              metaInformation: [],
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/ground-nutmeg.jpg",
            },
          ],
          usedIngredients: [
            {
              id: 9040,
              amount: 1.0,
              unit: "small",
              unitLong: "small",
              unitShort: "small",
              aisle: "Produce",
              name: "banana",
              original: "1 small banana, frozen, peeled and cut into chunks",
              originalString:
                "1 small banana, frozen, peeled and cut into chunks",
              originalName: "banana, frozen, peeled and cut into chunks",
              metaInformation: ["frozen", "peeled", "cut into chunks"],
              meta: ["frozen", "peeled", "cut into chunks"],
              extendedName: "frozen banana",
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg",
            },
            {
              id: 1077,
              amount: 0.75,
              unit: "cup",
              unitLong: "cups",
              unitShort: "cup",
              aisle: "Milk, Eggs, Other Dairy",
              name: "milk",
              original: "3/4 cup 2% milk",
              originalString: "3/4 cup 2% milk",
              originalName: "2% milk",
              metaInformation: ["2%"],
              meta: ["2%"],
              image: "https://spoonacular.com/cdn/ingredients_100x100/milk.png",
            },
            {
              id: 14209,
              amount: 0.3333333333333333,
              unit: "cup",
              unitLong: "cups",
              unitShort: "cup",
              aisle: "Tea and Coffee",
              name: "coffee",
              original: "1/3 cup coffee yogurt",
              originalString: "1/3 cup coffee yogurt",
              originalName: "coffee yogurt",
              metaInformation: [],
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/brewed-coffee.jpg",
            },
          ],
          unusedIngredients: [],
          likes: 0,
        },
        {
          id: 49873,
          title: "The Caffeinated Banana",
          image: "https://spoonacular.com/recipeImages/49873-312x231.jpg",
          imageType: "jpg",
          usedIngredientCount: 3,
          missedIngredientCount: 2,
          missedIngredients: [
            {
              id: 19912,
              amount: 1.0,
              unit: "tbsp",
              unitLong: "tablespoon",
              unitShort: "Tbsp",
              aisle: "Ethnic Foods;Health Foods",
              name: "agave syrup",
              original: "1 tbsp agave syrup",
              originalString: "1 tbsp agave syrup",
              originalName: "agave syrup",
              metaInformation: [],
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/agave.png",
            },
            {
              id: 16098,
              amount: 1.0,
              unit: "tbsp",
              unitLong: "tablespoon",
              unitShort: "Tbsp",
              aisle: "Nut butters, Jams, and Honey",
              name: "peanut butter",
              original: "1 tbsp peanut butter",
              originalString: "1 tbsp peanut butter",
              originalName: "peanut butter",
              metaInformation: [],
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/peanut-butter.png",
            },
          ],
          usedIngredients: [
            {
              id: 9040,
              amount: 1.0,
              unit: "",
              unitLong: "",
              unitShort: "",
              aisle: "Produce",
              name: "banana",
              original: "1 very ripe banana",
              originalString: "1 very ripe banana",
              originalName: "very ripe banana",
              metaInformation: ["very ripe"],
              meta: ["very ripe"],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg",
            },
            {
              id: 1077,
              amount: 0.5,
              unit: "cup",
              unitLong: "cups",
              unitShort: "cup",
              aisle: "Milk, Eggs, Other Dairy",
              name: "milk",
              original: "1/2 cup milk",
              originalString: "1/2 cup milk",
              originalName: "milk",
              metaInformation: [],
              meta: [],
              image: "https://spoonacular.com/cdn/ingredients_100x100/milk.png",
            },
            {
              id: 14209,
              amount: 0.5,
              unit: "cup",
              unitLong: "cups",
              unitShort: "cup",
              aisle: "Tea and Coffee",
              name: "strong coffee",
              original: "1/2 cup strong coffee",
              originalString: "1/2 cup strong coffee",
              originalName: "strong coffee",
              metaInformation: [],
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/brewed-coffee.jpg",
            },
          ],
          unusedIngredients: [],
          likes: 0,
        },
      ],
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
