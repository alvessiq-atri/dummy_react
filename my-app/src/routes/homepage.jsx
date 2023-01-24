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
      {/* <Col idclassName="d-flex justify-content-center"> */}
      <ReactTable />
    </>
  );
}
