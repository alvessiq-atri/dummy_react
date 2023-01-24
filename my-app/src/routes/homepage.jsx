import React, { useMe } from "react";
import {
  Button,
  //   Container,
  //   Card,
  //   CardTitle,
  //   CardBody,
  //   CardText,
  //   CardImg,
  Col,
} from "reactstrap";
import Header from "../components/Header";
import ReactTable from "../components/ReactTable";
import vovoheader from "../imgs/vovokitchen.png";

export default function Homepage() {
  return (
    <>
      <Col className="d-flex justify-content-center">
        <Button href="/add-plate" color="warning">
          Add New Plate
        </Button>
      </Col>
      <ReactTable />
    </>
  );
}
