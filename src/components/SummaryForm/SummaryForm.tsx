import React, { useState } from "react";
import { Button, Form, OverlayTrigger, Popover } from "react-bootstrap";

function SummaryForm() {
  const [termsChecked, setTermsChecked] = useState<boolean>(false);

  const handleTerms = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTermsChecked(event.target.checked);
  };

  const popover = (
    <Popover id="popover">
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={termsChecked}
          onChange={handleTerms}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!termsChecked}>
        Confirm order
      </Button>
    </Form>
  );
}

export default SummaryForm;
