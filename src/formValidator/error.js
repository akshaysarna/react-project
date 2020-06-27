const showAndHideError = (element, isValueValid) => {
  const parentDiv = element.parentNode.parentNode;
  if (isValueValid) {
    parentDiv.className = "field";
  } else {
    parentDiv.className = "field error";
  }
};

export { showAndHideError };
