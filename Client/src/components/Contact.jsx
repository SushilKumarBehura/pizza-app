import React from "react";
import { Container, Row, Col, Table,Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMobile } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
export const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>Pizza Shop</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={4}>
                    ######## CONTACT DETAILS ##########
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>0123456789</td>
                </tr>
                <tr>
                  <td>
                    <AiOutlineMobile />
                  </td>
                  <td>Call</td>
                  <td>123456789</td>
                </tr>
                <tr>
                  <td>
                    <AiOutlineMail />
                  </td>
                  <td>Email</td>
                  <td>user@domain.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image src='images\chicken_golden_delight.jpg' style={{width:'100%',height:'100%'}}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};
