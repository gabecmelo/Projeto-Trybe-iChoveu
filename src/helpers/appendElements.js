export const appendElements = (elements, id) => {
  const fatherElement = document.querySelector(id);
  elements.map((element) => fatherElement.appendChild(element));
};
