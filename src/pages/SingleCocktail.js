import React from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function getCocktail() {
      try {
        setLoading(true);
        const response = await fetch(`${url}${id}`);
        const { drinks } = await response.json();
        if (drinks) {
          const cocktailInfo = drinks.map((item) => {
            const values = Object.values(item);
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strGlass,
              strCategory,
              strInstructions,
            } = item;
            return {
              id: idDrink,
              name: strDrink,
              category: strCategory,
              instructions: strInstructions,
              ingredients: values.slice(17, 31),
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            };
          });
          setCocktail(cocktailInfo);
        } else setCocktail(null);
        setLoading(false);
      } catch (error) {
        alert("Whoops! Couldn't connect to the Internet");
      }
    }
    getCocktail();
  }, [id]);

  if (loading) return <Loading />;

  if (!cocktail) return <h2>no cocktail to display</h2>;

  const { name, category, instructions, image, info, glass, ingredients } =
    cocktail[0];

  return (
    <section className="section cocktail-section">
      <Link className="btn btn-primary" to={"/"}>
        Go back home
      </Link>
      <div className="drink">
        <img src={image} alt={name}/>
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions:</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients:</span>
            {ingredients.map((ingredient, i) => (
              <span key={i}>{ingredient}</span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
