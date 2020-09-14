import React, { useState, useEffect } from "react";
import api from "../../Services/api";
import { Container, Header, Ingredients, Title, Youtube } from "./styles";

interface Meal {
  [key: string]: any;
  idMeal: string;
  strMeal: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
  strIngredient: string;
  strMeasure: string;
}

const Meal: React.FC = () => {
  const [meal, setMeal] = useState<Meal>();

  async function getMeal() {
    const response = await api.get("/random.php");
    setMeal(response.data.meals[0]);
  }

  useEffect(() => {
    getMeal();
  }, []);

  if (!meal) {
    return <h1>Loading...</h1>;
  }

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const strIngredient = `strIngredient${i}`;
    const strMeasure = `strMeasure${i}`
    ingredients.push(`${meal[strMeasure]} ${meal[strIngredient]}`);
  }


  return (
    <>
      <Container>
        <Header>
          <Title>
            <h2>{meal.strMeal}</h2>
            <div>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            </div>
            
          </Title>

          <Ingredients>
            <h2>Ingredients</h2>
            <ul>
            {
              ingredients.map(ingredient => <li>{ingredient}</li>)
            }
            </ul>
          </Ingredients>
        </Header>

        <h2>Instructions</h2>
        <span>{meal.strInstructions}</span>


        <Youtube>
        <h2>Video on youtube for {meal.strMeal}</h2>
        <iframe title = "video" 
				src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`}>
				</iframe>
        </Youtube>
      
	
      </Container>
    </>
  );
};

export default Meal;
