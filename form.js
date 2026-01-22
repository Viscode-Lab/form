let userName = document.getElementById("username");
let userEmail = document.getElementById("email");
let userPhoneNumber = document.getElementById("phone-number");
let submitBtn = document.getElementById("submit");
let message = document.getElementById("message");
let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let PhoneNumberError = document.getElementById("phoneNumberError");

const validateInputValues=() => {
  if (userName.value.length > 13) {
    return {
      name: "name",
      message: "User Name is more than 12 figures",
    };
     }

  if (!userEmail.value.endsWith("@gmail.com")) {
    return {
      name: "email",
      message: "User email is not from the gmail domain",
    };
  }

  if (userPhoneNumber.value.length !== 11) {
    return {
      name: "phone-number",
      message: "Phone number is not complete, not up to 11 numbers ",
    };
  }
};

submitBtn.addEventListener("click", function () {
  const errorObject = validateInputValues();

  if (!errorObject) {
    message.textContent = "Resgistered successfully";
    message.style.color = "green";

    emailError.textContent = "";
    emailError.style.color = "";

    PhoneNumberError.textContent = "";
    PhoneNumberError.style.color = "";

    nameError.textContent = "";
    nameError.style.color = "";
    return;
  }

  if (errorObject.name === "email") {
    emailError.textContent = errorObject.message;
    emailError.style.color = "red";
  } else {
    emailError.textContent = "";
    emailError.style.color = "";
  }
  if (errorObject.name === "name") {
    nameError.textContent = errorObject.message;
    nameError.style.color = "red";
  } else {
    nameError.textContent = "";
    nameError.style.color = "";
    }  if (errorObject.name === "phone-number") {
    PhoneNumberError.textContent = errorObject.message;
    PhoneNumberError.style.color = "red";
  } else {
    PhoneNumberError.textContent = "";
    PhoneNumberError.style.color = "";
  }
});

