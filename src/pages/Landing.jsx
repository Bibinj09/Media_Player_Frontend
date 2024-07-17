import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <Row className="w-100 mt-5 d-flex justify-content-center align-items-center ps-4">
        <Col md={1}></Col>
        <Col md={5} className="p-3">
          <h3>
            Welcome to <span className="text-warning">Media Player</span>
          </h3>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia optio
            aperiam dolore delectus laboriosam accusantium exercitationem
            asperiores modi fugit eius, sapiente blanditiis pariatur omnis
            necessitatibus iure sed similique corporis error.lorem Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Ipsa sapiente ullam
            inventore autem aliquid voluptas iusto eligendi eius deserunt!
            Placeat obcaecati quam facilis rem fugiat dignissimos, nam
            architecto deserunt qui.
          </p>
          <Link to={'/home'}><button className="btn btn-warning mt-5">Get started</button>
          </Link>
        </Col>
        <Col md={1}></Col>
        <Col
          md={5}
          className="d-flex justify-content-center align-items-center p-5"
        >
          <img
            src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif"
            alt="no image"
            className="w-75"
          />
        </Col>
      </Row>

      <div className="container">
        <h3 className="text-center my-5">Features</h3>
        <Row>
          <Col md={1}></Col>
          <Col md={3}>
            <Card style={{ width: "100%" }} className="p-3 mt-4">
              <Card.Img variant="top" src="https://i.pinimg.com/originals/d7/28/26/d728264b7433e62b7c4572c8d129e9be.gif" height={'250px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="px-md-5">
          <Card style={{ width: "100%" }} className="p-3 mt-4">
              <Card.Img variant="top" src="https://i.pinimg.com/originals/6f/5f/f3/6f5ff36fd8ffefa40bf466df6c693ef1.gif" height={'250px'}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
          <Card style={{ width: "100%" }} className="p-3 mt-4">
              <Card.Img variant="top" src="https://64.media.tumblr.com/2aacbf75c2d35891fd49b440b069ddea/tumblr_n7f9izhBcG1shpedgo1_640.gif" height={'250px'}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={1}></Col>
        </Row>
      </div>


      <div className="container-fluid my-5 p-4">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 border border-secondary p-3 my-5 border-2 rounded">
            <div className="row p-4">
              <div className="col-md-6">
                <h3 className="text-warning">Simple fast and Powerful</h3>
                <p className="mt-3"><span className="fs-5">Play Everything&nbsp;</span>Lorem amet consectetur adipisicing elit. Minima non assumenda harum, odit cupiditate omnis qui tempora voluptatem, vel molestias optio explicabo</p>
                <p className="mt-3"><span className="fs-5">Play Everything&nbsp;</span>Lorem amet consectetur adipisicing elit. Minima non assumenda harum, odit cupiditate omnis qui tempora voluptatem, vel molestias optio explicabo</p>
                <p className="mt-3"><span className="fs-5">Play Everything&nbsp;</span>Lorem amet consectetur adipisicing elit. Minima non assumenda harum, odit cupiditate omnis qui tempora voluptatem, vel molestias optio explicabo</p>
              </div>
              <div className="col-md-6">
              <iframe width="100%" height="400" src="https://www.youtube.com/embed/SxTYjptEzZs" title="Atif Aslam: Pehli Dafa Song (Video) | Ileana D’Cruz | Latest Hindi Song 2017 | T-Series" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>

            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>

    </>
  );
}

export default Landing;
