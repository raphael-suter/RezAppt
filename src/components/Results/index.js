import React from "react";
import Recipe from "./Recipe";

class Results extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: props.ingredients,
      recipes: [
        {
          id: 579424,
          title:
            "Jamba Juice Peanut Butter Moo'd Smoothie: Homemade and the Best",
          image: "https://spoonacular.com/recipeImages/579424-312x231.png",
          imageType: "png",
          usedIngredientCount: 2,
          missedIngredientCount: 1,
          missedIngredients: [
            {
              id: 10116098,
              amount: 1,
              unit: "tablespoon",
              unitLong: "tablespoon",
              unitShort: "Tbsp",
              aisle: "Nut butters, Jams, and Honey",
              name: "creamy peanut butter",
              original: "1 tablespoon creamy peanut butter",
              originalString: "1 tablespoon creamy peanut butter",
              originalName: "creamy peanut butter",
              metaInformation: [],
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/peanut-butter.png",
            },
          ],
          usedIngredients: [
            {
              id: 9040,
              amount: 1,
              unit: "large",
              unitLong: "large",
              unitShort: "large",
              aisle: "Produce",
              name: "banana",
              original: '1 large banana, frozen and cut into 1" sections',
              originalString: '1 large banana, frozen and cut into 1" sections',
              originalName: 'banana, frozen and cut into 1" sections',
              metaInformation: ["frozen", 'cut into 1" sections'],
              meta: ["frozen", 'cut into 1" sections'],
              extendedName: "frozen banana",
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg",
            },
            {
              id: 1102,
              amount: 1,
              unit: "cup",
              unitLong: "cup",
              unitShort: "cup",
              aisle: "Milk, Eggs, Other Dairy",
              name: "chocolate milk",
              original: "1 cup chocolate milk",
              originalString: "1 cup chocolate milk",
              originalName: "chocolate milk",
              metaInformation: [],
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/chocolate-milk.jpg",
            },
          ],
          unusedIngredients: [
            {
              id: 1077,
              amount: 1,
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
          likes: 1864,
        },
        {
          id: 810863,
          title: "Coconut Banana Iced Coffee Smoothie",
          image: "https://spoonacular.com/recipeImages/810863-312x231.jpg",
          imageType: "jpg",
          usedIngredientCount: 2,
          missedIngredientCount: 1,
          missedIngredients: [
            {
              id: 14209,
              amount: 4,
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
          ],
          usedIngredients: [
            {
              id: 9040,
              amount: 1,
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
              id: 1077,
              amount: 16,
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
          id: 49980,
          title: "Frozen Banana Popsicles",
          image: "https://spoonacular.com/recipeImages/49980-312x231.jpg",
          imageType: "jpg",
          usedIngredientCount: 2,
          missedIngredientCount: 1,
          missedIngredients: [
            {
              id: 10012108,
              amount: 0.3333333333333333,
              unit: "cup",
              unitLong: "cups",
              unitShort: "cup",
              aisle: "Baking",
              name: "unsweetened shredded coconut",
              original: "1/3 cup unsweetened shredded coconut, toasted",
              originalString: "1/3 cup unsweetened shredded coconut, toasted",
              originalName: "unsweetened shredded coconut, toasted",
              metaInformation: ["shredded", "unsweetened", "toasted"],
              meta: ["shredded", "unsweetened", "toasted"],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/shredded-coconut.jpg",
            },
          ],
          usedIngredients: [
            {
              id: 9040,
              amount: 3,
              unit: "large",
              unitLong: "larges",
              unitShort: "large",
              aisle: "Produce",
              name: "bananas",
              original:
                "3 large Whole Trade? Bananas, peeled and halved crosswise",
              originalString:
                "3 large Whole Trade? Bananas, peeled and halved crosswise",
              originalName: "Whole Trade? Bananas, peeled and halved crosswise",
              metaInformation: ["whole", "peeled", "halved"],
              meta: ["whole", "peeled", "halved"],
              extendedName: "whole bananas",
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg",
            },
            {
              id: 1102,
              amount: 6,
              unit: "ozs",
              unitLong: "ounces",
              unitShort: "oz",
              aisle: "Milk, Eggs, Other Dairy",
              name: "chocolate milk",
              original:
                "6 ozs semi-sweet or milk Whole Trade chocolate, chopped",
              originalString:
                "6 ozs semi-sweet or milk Whole Trade chocolate, chopped",
              originalName: "semi-sweet or milk Whole Trade chocolate, chopped",
              metaInformation: ["whole", "chopped"],
              meta: ["whole", "chopped"],
              extendedName: "whole chocolate milk",
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/chocolate-milk.jpg",
            },
          ],
          unusedIngredients: [
            {
              id: 1077,
              amount: 1,
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
          likes: 227,
        },
        {
          id: 578594,
          title: "Peanut Butter Smoothie",
          image: "https://spoonacular.com/recipeImages/578594-312x231.png",
          imageType: "png",
          usedIngredientCount: 2,
          missedIngredientCount: 1,
          missedIngredients: [
            {
              id: 10116098,
              amount: 1,
              unit: "tablespoon",
              unitLong: "tablespoon",
              unitShort: "Tbsp",
              aisle: "Nut butters, Jams, and Honey",
              name: "creamy peanut butter",
              original: "1 tablespoon creamy peanut butter",
              originalString: "1 tablespoon creamy peanut butter",
              originalName: "creamy peanut butter",
              metaInformation: [],
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/peanut-butter.png",
            },
          ],
          usedIngredients: [
            {
              id: 9040,
              amount: 1,
              unit: "large",
              unitLong: "large",
              unitShort: "large",
              aisle: "Produce",
              name: "banana",
              original: '1 large banana, frozen and cut into 1" sections',
              originalString: '1 large banana, frozen and cut into 1" sections',
              originalName: 'banana, frozen and cut into 1" sections',
              metaInformation: ["frozen", 'cut into 1" sections'],
              meta: ["frozen", 'cut into 1" sections'],
              extendedName: "frozen banana",
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg",
            },
            {
              id: 1102,
              amount: 1,
              unit: "cup",
              unitLong: "cup",
              unitShort: "cup",
              aisle: "Milk, Eggs, Other Dairy",
              name: "chocolate milk",
              original: "1 cup chocolate milk",
              originalString: "1 cup chocolate milk",
              originalName: "chocolate milk",
              metaInformation: [],
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/chocolate-milk.jpg",
            },
          ],
          unusedIngredients: [
            {
              id: 1077,
              amount: 1,
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
          likes: 33,
        },
        {
          id: 200715,
          title: "Peanut Butter Banana Smoothie",
          image: "https://spoonacular.com/recipeImages/200715-312x231.jpg",
          imageType: "jpg",
          usedIngredientCount: 2,
          missedIngredientCount: 1,
          missedIngredients: [
            {
              id: 16098,
              amount: 1,
              unit: "tablespoon",
              unitLong: "tablespoon",
              unitShort: "Tbsp",
              aisle: "Nut butters, Jams, and Honey",
              name: "peanut butter",
              original: "1 tablespoon natural peanut butter",
              originalString: "1 tablespoon natural peanut butter",
              originalName: "natural peanut butter",
              metaInformation: [],
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/peanut-butter.png",
            },
          ],
          usedIngredients: [
            {
              id: 9040,
              amount: 0.5,
              unit: "",
              unitLong: "",
              unitShort: "",
              aisle: "Produce",
              name: "banana",
              original: "1/2 banana",
              originalString: "1/2 banana",
              originalName: "banana",
              metaInformation: [],
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg",
            },
            {
              id: 1085,
              amount: 1,
              unit: "cup",
              unitLong: "cup",
              unitShort: "cup",
              aisle: "Milk, Eggs, Other Dairy",
              name: "skim milk",
              original: "1 cup ice cold skim milk",
              originalString: "1 cup ice cold skim milk",
              originalName: "ice cold skim milk",
              metaInformation: ["ice cold"],
              meta: ["ice cold"],
              image: "https://spoonacular.com/cdn/ingredients_100x100/milk.jpg",
            },
          ],
          unusedIngredients: [
            {
              id: 1077,
              amount: 1,
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
          likes: 33,
        },
        {
          id: 980424,
          title: "Strawberry Banana Smoothie",
          image: "https://spoonacular.com/recipeImages/980424-312x231.jpg",
          imageType: "jpg",
          usedIngredientCount: 2,
          missedIngredientCount: 1,
          missedIngredients: [
            {
              id: 9316,
              amount: 1,
              unit: "cup",
              unitLong: "cup",
              unitShort: "cup",
              aisle: "Produce",
              name: "strawberries",
              original: "1 cup frozen strawberries",
              originalString: "1 cup frozen strawberries",
              originalName: "frozen strawberries",
              metaInformation: ["frozen"],
              meta: ["frozen"],
              extendedName: "frozen strawberries",
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/strawberries.png",
            },
          ],
          usedIngredients: [
            {
              id: 9040,
              amount: 1,
              unit: "",
              unitLong: "",
              unitShort: "",
              aisle: "Produce",
              name: "banana",
              original: "1 banana",
              originalString: "1 banana",
              originalName: "banana",
              metaInformation: [],
              meta: [],
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
              original: "½ cup milk",
              originalString: "½ cup milk",
              originalName: "milk",
              metaInformation: [],
              meta: [],
              image: "https://spoonacular.com/cdn/ingredients_100x100/milk.png",
            },
          ],
          unusedIngredients: [],
          likes: 7,
        },
        {
          id: 163631,
          title: "Chocolate Banana Cookies and Cream Smoothies",
          image: "https://spoonacular.com/recipeImages/163631-312x231.jpg",
          imageType: "jpg",
          usedIngredientCount: 2,
          missedIngredientCount: 1,
          missedIngredients: [
            {
              id: 18166,
              amount: 4,
              unit: "",
              unitLong: "",
              unitShort: "",
              aisle: "Sweet Snacks",
              name: "chocolate sandwich cookies",
              original: "4 creme-filled chocolate sandwich cookies",
              originalString: "4 creme-filled chocolate sandwich cookies",
              originalName: "creme-filled chocolate sandwich cookies",
              metaInformation: [],
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/oreos.png",
            },
          ],
          usedIngredients: [
            {
              id: 9040,
              amount: 7.6,
              unit: "oz",
              unitLong: "ounces",
              unitShort: "oz",
              aisle: "Produce",
              name: "banana",
              original: "1 pouch (7.6 oz) Yoplait® Smoothie chocolate banana",
              originalString:
                "1 pouch (7.6 oz) Yoplait® Smoothie chocolate banana",
              originalName: "pouch Yoplait® Smoothie chocolate banana",
              metaInformation: ["yoplait®"],
              meta: ["yoplait®"],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg",
            },
            {
              id: 1085,
              amount: 1,
              unit: "cup",
              unitLong: "cup",
              unitShort: "cup",
              aisle: "Milk, Eggs, Other Dairy",
              name: "fat-free milk",
              original: "1 cup fat-free (skim) milk",
              originalString: "1 cup fat-free (skim) milk",
              originalName: "fat-free (skim) milk",
              metaInformation: ["fat-free", "(skim)"],
              meta: ["fat-free", "(skim)"],
              image: "https://spoonacular.com/cdn/ingredients_100x100/milk.jpg",
            },
          ],
          unusedIngredients: [
            {
              id: 1077,
              amount: 1,
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
          likes: 0,
        },
        {
          id: 49859,
          title: "Banana Corn Muffins",
          image: "https://spoonacular.com/recipeImages/49859-312x231.jpg",
          imageType: "jpg",
          usedIngredientCount: 2,
          missedIngredientCount: 1,
          missedIngredients: [
            {
              id: 10018022,
              amount: 8.5,
              unit: "ounce",
              unitLong: "ounces",
              unitShort: "oz",
              aisle: "Baking",
              name: "corn muffin mix",
              original:
                "1 (8 1/2-ounce) package corn muffin mix (such as Jiffy)",
              originalString:
                "1 (8 1/2-ounce) package corn muffin mix (such as Jiffy)",
              originalName: "package corn muffin mix (such as Jiffy)",
              metaInformation: ["(such as Jiffy)"],
              meta: ["(such as Jiffy)"],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/corn-muffins.jpg",
            },
          ],
          usedIngredients: [
            {
              id: 9040,
              amount: 0.5,
              unit: "cup",
              unitLong: "cups",
              unitShort: "cup",
              aisle: "Produce",
              name: "banana",
              original: "1/2 cup mashed ripe banana (about 1 medium)",
              originalString: "1/2 cup mashed ripe banana (about 1 medium)",
              originalName: "mashed ripe banana (about 1 medium)",
              metaInformation: ["ripe", "mashed", "( 1 medium)"],
              meta: ["ripe", "mashed", "( 1 medium)"],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/bananas.jpg",
            },
            {
              id: 1082,
              amount: 0.5,
              unit: "cup",
              unitLong: "cups",
              unitShort: "cup",
              aisle: "Milk, Eggs, Other Dairy",
              name: "low fat milk",
              original: "1/2 cup 2% reduced-fat milk",
              originalString: "1/2 cup 2% reduced-fat milk",
              originalName: "2% reduced-fat milk",
              metaInformation: ["2%", "reduced-fat"],
              meta: ["2%", "reduced-fat"],
              image: "https://spoonacular.com/cdn/ingredients_100x100/milk.png",
            },
          ],
          unusedIngredients: [
            {
              id: 1077,
              amount: 1,
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
          likes: 0,
        },
      ],
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
    /*const { ingredients } = this.state;

    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=0d208bfdd320463c9178a20f8b071b13&ingredients=${ingredients.join(
        ","
      )}&number=8`
    )
      .then((response) => response.json())
      .then((recipes) => console.log(JSON.stringify(recipes)))
      .catch(() => alert("Error!"));*/
  }
}

export default Results;
