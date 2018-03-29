$(document).ready(function () {

    $('#btn-login').on('click', function () {
        let formElements = document.forms.formLogin.elements;

        for (let i = 0; i < formElements.length; i++) {


            //USER NAME
            let userNameRegExp = /^[a-z][a-z0-9]*?([-_.][a-z0-9]+){0,2}$/i;
            let errorName = document.getElementById("errorName");
            let inputUserName = document.getElementById("input-username");

            if (formElements[i].name == 'username') {

                if (formElements[i].value === "") {
                    errorName.style.display = "block";

                    if (errorName.style.display = "block") {
                        errorName.innerHTML = 'Required field'
                    }
                }


                if (formElements[i].value !== "") {
                    if (userNameRegExp.test(inputUserName.value)) {

                        errorName.innerHTML = '';
                        errorName.style.display = "none";

                    } else if (!userNameRegExp.test(inputUserName.value || formElements[i].value)) {

                        errorName.style.display = "block";

                        if (errorName.style.display = "block") {
                            errorName.innerHTML = 'enter correct user name';
                        }

                    }
                }
            }


            //password
            let passwordRegExp = /^[A-zА-яЁё0-9_]{6,18}$/;
            let errorPassword = document.getElementById("errorPassword");
            let inputPassword = document.getElementById("input-password");



            if (formElements[i].name == 'password') {

                if (formElements[i].value === "") {

                    errorPassword.style.display = "block";

                    if (errorPassword.style.display = "block") {
                        errorPassword.innerHTML = 'Required field'
                    }

                }
                if (formElements[i].value !== "") {
                    if (passwordRegExp.test(inputPassword.value)) {

                        errorPassword.innerHTML = '';
                        errorPassword.style.display = "none";


                    } else if (!passwordRegExp.test(inputPassword.value || formElements[i].value)) {

                        errorPassword.style.display = "block";

                        if (errorPassword.style.display = "block") {
                            errorPassword.innerHTML = 'from 6 to 18 symbols'; //from 6 to 18 symbols, can use letters, numbers and symbol "_"
                        }
                    }
                }
            }

            //email
            let EmailRegExp =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            let errorEmail = document.getElementById("errorEmail");
            let inputEmail = document.getElementById("input-email");

            if (formElements[i].name == 'email') {

                if (formElements[i].value === "") {
                    errorEmail.style.display = "block";

                    if (errorEmail.style.display = "block") {
                        errorEmail.innerHTML = 'Required field'
                    }
                }
                if (formElements[i].value !== "") {
                    if (EmailRegExp.test(inputEmail.value)) {

                        errorEmail.innerHTML = '';
                        errorEmail.style.display = "none";

                    } else if (!EmailRegExp.test(inputEmail.value || formElements[i].value)) {

                        errorEmail.style.display = "block";

                        if (errorEmail.style.display = "block") {
                            errorEmail.innerHTML = 'Enter correct email';
                        }
                    }
                }
            }
        }
        event.preventDefault();

    });

});