import React, { useState } from "react";
import Footer from "../components/Footer";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import { Col, Container, Row } from "reactstrap";

import products from "../assets/Fakedata/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";

import "../styles/food.css";

const Food = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [pageNum, setPageNum] = useState(0);

  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === "") return item;
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase()))
      return item;
  });

  const productPerPage = 8;
  const visitedPage = pageNum * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNum(selected);
  };

  return (
    <Helmet title="Food">
      <CommonSection title="Food" />

      <section>
        <Container>
          <Row className="mb-5 justify-content-center">
            <div className="search d-flex align-items-center justify-content-between w-50 ">
              <input
                type="text"
                placeholder="I'm looking for..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span>
                <i class="ri-search-line"></i>
              </span>
            </div>
          </Row>
          <Row>
            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={<i class="ri-arrow-left-double-line"></i>}
                nextLabel={<i class="ri-arrow-right-double-line"></i>}
                containerClassName="paginationButtons"
              />
            </div>
          </Row>
        </Container>
      </section>
      <Footer />
    </Helmet>
  );
};

export default Food;
