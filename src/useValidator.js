import { useState, useRef } from "react";

function useValidator(initialValue, validators = []) {
  const [fieldValue, setFieldValue] = useState(initialValue);
  const errors = useRef([]);
  function innerSetState(state) {
    errors.current = validators
      .map(validator => validator(state))
      .filter(error => error);
    setFieldValue(state);
  }

  return [fieldValue, errors, innerSetState];
}

export default useValidator;
