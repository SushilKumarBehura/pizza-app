import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import { addToCart, deleteFromCart } from "../actions/cartAction";
import Checkout from "../components/Checkout";

const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  const subTotal=cartItems.reduce((x,item)=>x+item.price,0)
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <h1>Cart Items</h1>
            <Row>
              {cartItems.map((item) => (
                <>
                  <Col md={7}>
                    <h5>
                      {item.name} [{item.varient}]
                    </h5>
                    <h6>
                      Price: {item.quantity}X{item.prices[0][item.varient]}=
                      {item.price}
                    </h6>
                    <h6>
                      Quantity :&nbsp;
                      <FaMinusCircle
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity - 1, item.varient)
                          );
                        }}
                        className="text-danger"
                      />
                      &nbsp;
                      {item.quantity}&nbsp;
                      <FaPlusCircle
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity + 1, item.varient)
                          );
                        }}
                        className="text-success"
                      />
                    </h6>
                  </Col>
                  <Col md={5}>
                    <img
                      alt={item.name}
                      src={item.image}
                      style={{ width: "150px", height: "80px" }}
                    />
                    <FaTrash
                      style={{ cursor: "pointer",marginLeft:"20px" }}
                      onClick={() => {
                        dispatch(deleteFromCart(item));
                      }}
                      className="text-danger"
                    />
                  </Col>
                  <hr />
                </>
              ))}
            </Row>
          </Col>
          <Col md={4}>
            <h1>Payment Info</h1>
            <h4>Sub Total</h4>
            <h4>RS : {subTotal} /-</h4>
            <Checkout subTotal={subTotal}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartScreen;
