
const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

//selecting names
nField = form.querySelector(".name"),
nInput = nField.querySelector("input"),

aField = form.querySelector(".age"),
aInput = aField.querySelector("input"),



// let errorTxt = eField.querySelector(".error-txt");


form.onsubmit = (e)=>{
  e.preventDefault(); //preventing from form submitting
  //if email and password is blank then add shake class in it else call specified function
  (eInput.value == "") ? eField.classList.add("error") : checkEmail(); //if email is empty add error - else run the function (function includes correct values for an email address)
  (pInput.value == "") ? pField.classList.add("error") : checkPass();
  (nInput.value == "") ? nField.classList.add("error") : checkName();
  (aInput.value == "") ? aField.classList.add("error") : checkAge();


  //simple way of adding a class list
//  if(eInput.value == ""){
//   eField.classList.add("error")
//  }

  eInput.onkeyup = () => {   //calling checkEmail function on email input keyup
    checkEmail();
  }

  
  pInput.onkeyup = ()=>{
    
    checkPass();} //calling checkPassword function on pass input keyup

   nInput.onkeyup = () => { //this makes the errro go away if the correct value is inputted
    checkName();
   } 

   aInput.onkeyup = () => {
    checkAge();
   }
    

//email function

  function checkEmail(){ //checkEmail function

    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email

    if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class

      eField.classList.add("error");

      eField.classList.remove("valid");

      let errorTxt = eField.querySelector(".error-txt");

      //if email value is not empty then show please enter valid email else show Email can't be blank

      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";

    }else{ //if pattern matched then remove error and add valid class

      eField.classList.remove("error");

      eField.classList.add("valid");

    }
  }

  //password functions

  function checkPass(){ //checkPass function

    if(pInput.value.length < 6){ //if pass is empty then add error and remove valid class

      pField.classList.add("error");

      pField.classList.remove("valid");



    }else{ //if pass is empty then remove error and add valid class

      pField.classList.remove("error");

      pField.classList.add("valid");
    }
  }

  //check name function 


  function checkName(){ //checkPass function

    if(nInput.value.length < 2){ //if pass is empty then add error and remove valid class

      nField.classList.add("error");

      nField.classList.remove("valid");



    }else{ //if pass is empty then remove error and add valid class

      nField.classList.remove("error");

      nField.classList.add("valid");
    }
  }


  //check age function 

  function checkAge(){ //checkPass function

    if(aInput.value.length < 2){ //if pass is empty then add error and remove valid class

      aField.classList.add("error");

      aField.classList.remove("valid");



    }else{ //if pass is empty then remove error and add valid class

      aField.classList.remove("error");

      aField.classList.add("valid");
    }
  }




  
  //if eField and pField doesn't contains error class that mean user filled details properly
  if(!eField.classList.contains("error") && !pField.classList.contains("error")){
    window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
  }
}
//showing the errors 



 