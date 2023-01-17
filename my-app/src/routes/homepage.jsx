import React from "react";
import {
  Button,
  Container,
  Card,
  CardTitle,
  CardBody,
  CardText,
  CardImg,
} from "reactstrap";
import vovoheader from "../imgs/vovokitchen.png";

export default function Homepage() {
  return (
    <Container>
      <Card classname="my-2">
        <CardImg
          alt="Vovo image"
          src={vovoheader}
          //   style={{ height: 500 }}
          top
          width="100%"
        ></CardImg>
        <CardBody>
          <CardTitle className="d-flex justify-content-center">
            <h1>Welcome to Vovó's Kitchen</h1>
          </CardTitle>
          <CardText className="d-flex justify-content-center">
            Open from 10am - 8pm (Monday-Friday)
          </CardText>
          <CardText className="d-flex justify-content-center">
            <Button href="/build-marmita" color="warning">
              Order Now!
            </Button>
          </CardText>
        </CardBody>
      </Card>
    </Container>
  );
}
