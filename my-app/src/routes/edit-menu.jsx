import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import menu from "../food-data/menu";
import { useForm } from "react-hook-form";
import { Button, Form, CardGroup } from "reactstrap";
import sides from "../food-data/sides.js";
import protein from "../food-data/protein.js";
import veggies from "../food-data/greens-veggies";
import FoodCard from "../components/FoodCard.jsx";
import axios from "axios";

export default function EditMenu() {
  let { plateId } = useParams();
  const plate = menu[plateId - 1];

  // const [data, setData] = useState([]);
  // // Using useEffect to call the API once mounted and set the data
  // useEffect(() => {
  //   (async () => {
  //     const result = await axios("http://localhost:8000/menu/" + plateId);
  //     setData(result.data.ingredients);
  //   })();
  // }, []);

  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:8000/menu/" + plateId);
      setDefIngredients(result.data.ingredients);
    })();
  }, [plateId]);

  const [defIngredients, setDefIngredients] = useState(plate.ingredients);

  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: { data: defIngredients },
  });
  console.log(defIngredients);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      This is plate with id: {plateId}.<h1> {plate.name}</h1>
      <h2>Ingredients are: {plate.ingredients + ""}</h2>
      {/* <BuildMarmita plateId={plateId} /> */}
      <h3 className="d-flex justify-content-center">Edit plate:</h3>
      <h2>Ingredients are: {defIngredients + " "}</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <CardGroup>
          <FoodCard
            register={{ ...register("data") }}
            title={"Protein"}
            data={protein}
          ></FoodCard>
          <FoodCard
            register={{ ...register("data") }}
            title={"Sides"}
            data={sides}
          ></FoodCard>
          <FoodCard
            register={{ ...register("data") }}
            title={"Greens + Veggies"}
            data={veggies}
          ></FoodCard>
        </CardGroup>
        <Button type="submit" color="warning">
          Submit
        </Button>
      </Form>
    </div>
  );
}
