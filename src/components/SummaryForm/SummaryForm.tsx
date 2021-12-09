import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function SummaryForm() {
  const [termsChecked, setTermsChecked] = useState<boolean>(false);

  const handleTerms = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTermsChecked(event.target.checked);
  };

  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: "blue" }}>Terms and Conditions</span>
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
