import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, CardGroup } from "reactstrap";
import sides from "../food-data/sides.js";
import protein from "../food-data/protein.js";
import veggies from "../food-data/greens-veggies";
import FoodCard from "../components/FoodCard.jsx";

export default function BuildMarmita() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Hey");
    console.log(data);
  };

  return (
    <>
      <h3 className="d-flex justify-content-center">
        It is time to build your own marmita:
      </h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <CardGroup>
          <FoodCard
            register={register}
            qty="3"
            title={"Protein"}
            data={protein}
          ></FoodCard>
          <FoodCard
            register={register}
            qty="2"
            title={"Sides"}
            data={sides}
          ></FoodCard>
          <FoodCard
            register={register}
            qty="2"
            title={"Greens + Veggies"}
            data={veggies}
          ></FoodCard>
        </CardGroup>
        <Button type="submit" color="primary">
          Add to Cart
        </Button>
      </Form>
    </>
  );
}
