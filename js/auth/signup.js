//Iplémenter le js de ma page 

const inputNom = document.getElementById("nameInput");
const inputPrenom = document.getElementById("firstNameInput");
const inputEmail = document.getElementById("emailInput");
const inputPassword = document.getElementById("passwordInput");
const inputValidatePassword = document.getElementById("validatePasswordInput");
const btnValidation = document.getElementById("btn-validation-inscription");

inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputEmail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidatePassword.addEventListener("keyup", validateForm);

function validateForm(){
  const nomOk = validateRequired(inputNom);
  const prenomOk = validateRequired(inputPrenom);
  const emailOk = validateEmail(inputEmail);

  if(nomOk && prenomOk&& emailOk){
    btnValidation.disabled = false;
  }
  else{
    btnValidation.disabled = true;
  }
}

function validateEmail(input){
  //Définir mon regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mailUser = input.value;
  if(mailUser.match(emailRegex)){
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  }
  else{
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

function validateRequired(input){
if(input.value != ''){
  input.classList.add("is-valid");
  input.classList.remove("is-invalid");
  return true;
}
else{
  input.classList.remove("is-valid");
  input.classList.add("is-invalid");
  return false;
}
}