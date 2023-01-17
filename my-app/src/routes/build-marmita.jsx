import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input, Button, Form, FormGroup, FormFeedback } from "reactstrap";

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

  const sides = "rice beans mashed-potato pasta egg corn farofa".split(" ");

  return (
    <div className="App">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          {sides.map((c, i) => (
            <label key={c}>
              <input type="checkbox" value={c} name="sameName" ref={register} />
              {c}
            </label>
          ))}
          {/* <input
            type="checkbox"
            value="name"
            id="name"
            invalid={errors?.name}
            {...register("name")}
          /> */}
        </FormGroup>
        <Button type="submit" color="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
}
