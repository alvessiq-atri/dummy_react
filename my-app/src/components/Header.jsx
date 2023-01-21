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
import vovoheader from "../imgs/vovokitchen.png";

export default function Header() {
  return (
    <>
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
            <h1>Vovó's Kitchen</h1>
          </CardTitle>
          <CardText className="d-flex justify-content-center">
            Menu application
          </CardText>
          <CardText className="d-flex justify-content-center"></CardText>
        </CardBody>
      </Card>
    </>
  );
}
