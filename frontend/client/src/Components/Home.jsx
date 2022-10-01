import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container mt-2">
        <h1 className="text-center mt-2">MERN Imgae Upload Projects</h1>
        <div className="text-end">
           
          <Button variant="secondary"><NavLink to="/register" className="text-decoration-none text-light">Add User</NavLink></Button>{" "}
        </div>
        <div className="row d-flex justify-content-between align-items-center mt-5">
          <Card style={{ width: "22rem", height:"20rem" }} className="mt-3">
            <Card.Img variant="top" style={{ width: "100px", textAlign:"center", margin:"auto" }} className="mt-2" src="/man.png" />
            <Card.Body className="text-center">
              <Card.Title>User Name: Rahul Kumar</Card.Title>
              <Card.Text>
                Date Add :08/15/2022
              </Card.Text>
              <Button variant="danger" className="col-lg-6 text-center">Delete</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "22rem", height:"20rem" }} className="mt-3">
            <Card.Img variant="top" style={{ width: "100px", textAlign:"center", margin:"auto" }} className="mt-2" src="/man.png" />
            <Card.Body className="text-center">
              <Card.Title>User Name: Rahul Kumar</Card.Title>
              <Card.Text>
                Date Add :08/15/2022
              </Card.Text>
              <Button variant="danger" className="col-lg-6 text-center">Delete</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "22rem", height:"20rem" }} className="mt-3">
            <Card.Img variant="top" style={{ width: "100px", textAlign:"center", margin:"auto" }} className="mt-2" src="/man.png" />
            <Card.Body className="text-center">
              <Card.Title>User Name: Rahul Kumar</Card.Title>
              <Card.Text>
                Date Add :08/15/2022
              </Card.Text>
              <Button variant="danger" className="col-lg-6 text-center">Delete</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
