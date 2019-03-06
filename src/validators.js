export function isRequired(field) {
  return typeof field !== "string" || field.length === 0
    ? "il campo è richiesto"
    : null;
}

export function minLenght(min) {
  return function minLenght(field) {
    return field.length < min ? `Lunghezza minima ${min} caratteri` : null;
  };
}
