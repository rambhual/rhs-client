import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const RegisterComponent = () => {
  const [error] = useState(false);
  return (
    <Container>
      <Row className="justify-content-md-center mt-4">
        <Col xs lg="6">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              {!!error && (
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterComponent;
