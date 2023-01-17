import React from "react";
import {
  FormGroup,
  Label,
  CardImg,
  CardTitle,
  CardBody,
  Card,
  CardText,
  CardSubtitle,
} from "reactstrap";

export default function FoodCard({ register, data, title, qty }) {
  return (
    <Card>
      {/* <CardImg
              alt="Card image cap"
              src="https://picsum.photos/318/180"
              top
              width="100%"
            /> */}
      <CardBody>
        <CardTitle tag="h5" className="d-flex justify-content-center">
          {title}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted d-flex justify-content-center"
          tag="h6"
        >
          Choose up to {qty}
        </CardSubtitle>
        <CardText>
          {data.map((c) => (
            <FormGroup className="d-flex justify-content-center">
              <input
                type="checkbox"
                value={c}
                name="sameName"
                {...register(c)}
              />
              <Label key={c}>{c}</Label>
            </FormGroup>
          ))}
        </CardText>
      </CardBody>
    </Card>
  );
}
