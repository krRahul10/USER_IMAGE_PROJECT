import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Register = () => {
  const [fname, setFName] = useState("");
  const [file, setFile] = useState("");


  const setData = (e) => {
    const { value } = e.target;
    // console.log(e.target.value)
    setFName(value);
  };

  const setImage = (e)=>{
    // console.log(e.target.files[0])
    setFile(e.target.files[0])
  }
  return (
    <div>
      <div className="container mt-3">
        <h1>Upload Your Image Here</h1>
        <Form className="mt-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              name="fname"
              onChange={setData}
              placeholder="Enter Your Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Select Your Image </Form.Label>
            <Form.Control type="file" placeholder="" name="photo" onChange={setImage}/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
