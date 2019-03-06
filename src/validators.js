export function isRequired(field) {
  return typeof field !== "string" || field.length === 0
    ? "Field is required"
    : null;
}

export function minLenght(min) {
  return function minLenght(field) {
    return field.length < min ? `Min length of ${min} chars` : null;
  };
}
