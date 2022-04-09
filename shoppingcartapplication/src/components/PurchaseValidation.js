import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, Route, useNavigate } from 'react-router-dom';

const PurchaseValidation = () => {
  const navigate = useNavigate();
  const initialValues = { name: "", email: "", mobile:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    //console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value }); 
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    //history.pushState("/success");
  };
    //chances to modify
    useEffect(() => {
        console.log(formErrors);
        if (
          Object.values(formValues).some((value) => value !== "") &&
          Object.values(formErrors).every((value) => value === "")
        ) {
          navigate("/success", { replace: true });
        }
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
        }
    }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    //const regexphone = 
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.name) {
      errors.name = "name is required";
    } else if (values.name.length < 8) {
      errors.name =
        "name must be more than 8 characters";
    } else if (values.name.length > 40) {
      errors.name = "name cannot exceed more than 40 characters";
    } 
    if(!values.mobile.length){
      errors.mobile = "name is required and should be in numbers";

    }
    return errors;
  };

  return (
    <div className="container">
     {/*  <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}

        <Form onSubmit={handleSubmit} >
        {/* {
          Object.keys(formErrors).length === 0 && isSubmit ? (
              <div >
                <Link to ='/success'/>
              </div>
          ): (<pre> </pre>)
        
        } */}
                <h1> Payment Validation  Form</h1>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter Ur Name"  
                      value={ formValues.name}
                      onChange = {handleChange}
                      name= "name"/>
                    </Form.Group>
                    {formErrors.name && (
                            <p className="text-danger">{formErrors.name}</p>
                    )}

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={ formValues.email} 
                            onChange = {handleChange}
                            name="email" />
                    </Form.Group>
                    {formErrors.email && (
                          <p className="text-danger">{formErrors.email}</p>
                    )}
                    
                    <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="number" 
                          placeholder="Enter mobile" 
                          value={ formValues.mobile } 
                          onChange = {handleChange} 
                          name = "mobile"/>
                    </Form.Group>
                    {formErrors.mobile && (
                          <p className="text-danger">{formErrors.mobile}</p>
                    )}
                    
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>Stockholm</option>
                        <option>Mälmo</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>

                </Row>

               
                {/* <Link to="/success"> */}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
              {/*   </Link> */}
        </Form>
    </div>
  );
}

export default PurchaseValidation