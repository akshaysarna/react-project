const showAndHideInputError = (element, isValueValid) => {
  const parentDiv = element.parentNode.parentNode;
  if (isValueValid) {
    parentDiv.className = "field";
  } else {
    parentDiv.className = "field error";
  }
};

const showAndHideSelectError = (element, isValueValid) => {
  const parentDiv = element.parentNode;
  if (isValueValid) {
    parentDiv.className = "field";
  } else {
    parentDiv.className = "field error";
  }
};

export { showAndHideInputError, showAndHideSelectError };
