document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
      event.preventDefault();
      document.querySelectorAll(".error").forEach(e => e.remove()); 
  
      //   let phone = document.getElementById("phone").value.trim();
      //   let gender_ele = document.querySelector('input[name=gender]:checked');
      //   let gender = gender_ele ? gender_ele.value : null;
      //   let dob_ele = document.querySelector('input[name=dob]');
      //   let dob = dob_ele ? dob_ele.value : null;
      //   let dept = document.getElementById("dept").value;
      //   let expierence = document.getElementById("expierence").value;
      //   let skills = document.querySelectorAll('input[name=skills]:checked');
      //   let certifications = document.getElementById("certifications").value;
      //   let address = document.getElementById("address").value;
      //   let username = document.getElementById("username").value;
      //   let password = document.getElementById("password").value;
      //   let confirm = document.getElementById("confirm").value;
      
      let isValid = true;
      let firstName = document.getElementById("firstName");
      let firstNameValue = firstName.value.trim();
      let firstNameRegex = /^[a-zA-Z]+$/;
      
      function showError(input, message) {
        let error = document.createElement("span");
        error.className = "error";
        error.style.color = "red";
        error.innerText = message;
        input.parentNode.insertBefore(error,input.nextSibling);
      }
      
      if (firstNameValue.length === 0) {
        showError(firstName, "First name is required.");
        isValid = false;
      } else if (!firstNameRegex.test(firstNameValue)) {
        showError(firstName, "First name must contain only alphabets.");
        isValid = false;
      }
      
      
      let lastname = document.getElementById("lastName")
      let lastname_value= lastname.value.trim();
      let lastname_regex=/^[a-zA-Z]+$/;
      if(lastname_value.length===0){
        showError(lastname, "Last name should not be Empty.");
        isValid=false;
      }
      else if(!lastname_regex.test(lastname_value)){
        showError(lastname, "Last name should only contain Alphabets.");
        isValid=false;
      }
      
      
      let email = document.getElementById("email").value.trim();

      let email_regex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


      if (isValid) {
        event.target.submit(); 
      }
      });
      });  
  