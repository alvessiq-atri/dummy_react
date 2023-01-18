import React from "react";
import {
  Button,
  Container,
  Card,
  CardTitle,
  CardBody,
  CardText,
  CardImg,
  Col,
} from "reactstrap";
import Header from "../components/Header";
import vovoheader from "../imgs/vovokitchen.png";

export default function Homepage() {
  return (
    <>
      <Col className="d-flex justify-content-center">
        <Button href="/build-marmita" color="warning">
          Order Now!
        </Button>
      </Col>
    </>
  );
}
