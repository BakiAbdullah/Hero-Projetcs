// Adding Function to Money master
// We will use functions for not repeat code again and again
// DRY code
function getId(id) {
  const elementId = document.getElementById(id);
  return elementId;
}

function getValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputAmount = parseInt(inputValue);
  return inputAmount;
}

function ClearInput(inputFieldId) {
  const inputId = document.getElementById(inputFieldId);
  inputId.value = "";
}