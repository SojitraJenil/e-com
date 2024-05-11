import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../../Component/Navbar/Header";

const Product = () => {
  const { id } = useParams();
  
  const [data, setData] = useState({ product_img: "" });

  const getdata = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/Product_Show/${id}`
      );
      setData(response.data.One_product_show);
      console.log("ok" + response.data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Row style={{ width: "100%" }}>
          <Col xl={5}>
            <div className="">
              <img
                src={`http://localhost:8000/images/${data.product_img}`}
                style={{ height: "400px", width: "500px" }}
                className="object-fit-cover"
              />
              <div className="d-flex justify-content-between"></div>
            </div>
          </Col>
          <Col xl={7}>
            <h5>
              <span>product_category -:</span>
              {data.product_category}
            </h5>
            <h6>
              <span>product_name -:</span>
              {data.product_name}
            </h6>
            <h6>{data.description}</h6>
            <h3>${data.product_price}</h3>
            <p>
              <b>Available Product_cards -:</b>
            </p>
            {/* Additional Product_card details */}
            <div>{/* Additional Product_card details */}</div>
            <table border={1} width={"500px"}>
              {/* Additional Product_card details */}
            </table>
            <p className="py-2">
              3 Years Manufacturer Warranty <a href="#">Know More</a>{" "}
            </p>
            <div className="">
              <button className="btn btn-outline-danger  w-25 mx-1 border-3">
                Add to cart
              </button>
              <button className="btn btn-outline-success w-25 mx-1 border-3">
                Buy now
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </> 
  );
};

export default Product;