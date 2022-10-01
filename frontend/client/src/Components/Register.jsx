import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const history = useNavigate()
  const [fname, setFName] = useState("");
  const [file, setFile] = useState("");

  const setData = (e) => {
    const { value } = e.target;
    // console.log(e.target.value)
    setFName(value);
  };

  const setImage = (e) => {
    // console.log(e.target.files[0])
    setFile(e.target.files[0]);
  };

  const addUserData = async(e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("photo", file);
    formdata.append("fname", fname);

    const config = {
      headers:{
        "Content-Type":"multipart/form-data"
      }
    }

    const res = await axios.post("http://localhost:8080/register",formdata,config)
    // console.log(res)
    if(!res.data || res.data.status ===401){
      console.log("error")
    }
    else {
      history('/')
    }
  };
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
            <Form.Control
              type="file"
              placeholder=""
              name="photo"
              onChange={setImage}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={addUserData}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
