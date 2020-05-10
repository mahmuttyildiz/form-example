import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container, FormFeedback } from 'reactstrap';
import { Formik } from "formik";
import * as Yup from "yup";
import "../App.css"

const validation = Yup.object().shape({
  firstname: Yup.string().required("Name is a required field").max(10, "Max length is 10 characters"),
  lastname: Yup.string().required("Last Name is a required field").max(10, "Max length is 10 characters"),
  companyname:Yup.string().required("Last Name is a required field").max(20, "Max length is 20 characters"),
  phonenumber: Yup.number().required("Phone Number is a required field").max(11, "Max length 11 characters"),
  emailadress: Yup.string().email().required("Email is a required field").max(15, "Max length is 15 characters"),
  website: Yup.string().url().required("Website is a required field")
});


const FormApp = (props) => {
    return (
      <div>
        <Container>
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            companyname: "",
            phonenumber: "",
            emailadress: "",
            website: ""
          }}
          validationSchema={validation}
          onSubmit={(values, resetForm) => {
            resetForm({})
        }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            
          }) => (
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
              <FormGroup>
                <Label for="name">First Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="First Name"
                  value={values.firstname}
                  onChange={handleChange}
                  invalid={errors.firstname}
                />
                  {
                      errors.firstname && <FormFeedback>{errors.firstname}</FormFeedback>
                  }
              </FormGroup>
              </Col>
              <Col md={6}>
              <FormGroup>
                <Label for="lastname">Last Name</Label>
                <Input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                  value={values.lastname}
                  onChange={handleChange}
                  invalid={errors.lastname}
                />
                  {
                      errors.lastname && <FormFeedback>{errors.lastname}</FormFeedback>
                  }
              </FormGroup>
              </Col>
              </Row>
              <Row>
              <Col md={6}>
              <FormGroup>
                <Label for="CompanyName">Company Name</Label>
                <Input
                  type="text"
                  name="companyname"
                  id="companyname"
                  placeholder="Company Name"
                  value={values.companyname}
                  onChange={handleChange}
                  invalid={errors.companyname}
                />
                  {
                      errors.companyname && <FormFeedback>{errors.companyname}</FormFeedback>
                  }
              </FormGroup>
              </Col>
              <Col md={6}>
              <FormGroup>
                <Label for="phonenumber">Phone Number</Label>
                <Input 
                  type="tel"
                  name="phonenumber"
                  id="phonenumber" 
                  value={values.category} 
                  onChange={handleChange} 
                  placeholder="Phone Number"
                  invalid={errors.phonenumber}
                 />
                {
                      errors.phonenumber && <FormFeedback>{errors.phonenumber}</FormFeedback>
                }

              </FormGroup>
              </Col>
              </Row>
              
              <Row>
              <Col md={6}>
              <FormGroup>
                <Label for="emailadress">Email Adress</Label>
                <Input type="email" 
                name="emailadress" 
                id="emailadress" 
                value={values.emailadress} 
                onChange={handleChange} 
                placeholder="Email Address" 
                invalid={errors.emailadress}
                />
                    {
                      errors.emailadress && <FormFeedback>{errors.emailadress}</FormFeedback>
                }
              </FormGroup>

              </Col>
              <Col md={6}>
              <FormGroup>
                <Label for="website">Your Website</Label>
                <Input 
                type="text" 
                name="website" 
                id="website" 
                value={values.website} 
                onChange={handleChange} 
                placeholder="Your Website"
                invalid={errors.website}
             
                />
                {
                  errors.website && <FormFeedback>{errors.website}</FormFeedback>
                } 
              </FormGroup>
              </Col>
              </Row>
              
              <Row>
              <Col md={6}>
              <legend className="">When is the best time of day to reach you?</legend>
              <FormGroup check>
                <Label check>
                <Input type="radio" name="radioButton" />{' '}
                  Morning
                </Label>
              </FormGroup>
              </Col>
                </Row>
                <Row>
              <Col md={6}>
              <FormGroup check>
                <Label check>
                <Input type="radio" name="radioButton" />{' '}
                  Evening
                </Label>
              </FormGroup>
              </Col>
                </Row>
                <Row>
                <Col md={6}>
                  <FormGroup>
                  <h4 className="">Would you like to recieve our email newsletter?</h4>
                    <Input type="checkbox" name="check" id="exampleCheck"/>
                    <Label for="Check" check>Check me out</Label>
                  </FormGroup>
                </Col>
              </Row>
              <Button color="primary">Submit</Button>
            </Form>
          )}
        </Formik>
        </Container>
      </div>
    );
  };
  
  
export default FormApp;