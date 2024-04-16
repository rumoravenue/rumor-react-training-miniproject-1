import React from "react";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import { Form, Button } from "react-bootstrap";

function Footer() {
  return (
    <>
      <Form >
        <fieldset style={{ border: "none" }}className="footer"  >
          <div className="row mb-3">
            <div className="col">
              <Form.Label className="ftext">Title</Form.Label>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <Form.Control type="text" placeholder="Enter title" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <Form.Label className="ftext">Description</Form.Label>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <Form.Control
                type="text"            
                placeholder="Enter description"
              />
            </div>
          </div>
          <Button type="submit" className="ftext">Add to list</Button>
        </fieldset>
      </Form>
    </>
  );
}

export default Footer;
