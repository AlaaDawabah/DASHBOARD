(function () {
    $(document).ready(function () {
        const emailReg = /^[A-Za-z_\.]+@[a-z]+\.[a-z]+(\.[a-z]+)?$/gi;
        const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{6,12}$/;
        $("#submit").on("click", function () {
            let emailValue = $("#email").val();
            let passwordValue = $("#password").val();
            if (emailValue == "" || passwordValue == "") {
                swal({
                    title: "Warning!",
                    text: "All Fields are required",
                    icon: "warning",
                    button: "ok",
                  });
            }
            else if(emailReg.test(emailValue)!=true && passwordReg.test(passwordValue)==true){
                swal({
                    title: "Warning!",
                    text: "Email format are wrong",
                    icon: "warning",
                    button: "ok",
                  });
            }
            else if(passwordReg.test(passwordValue)!=true && emailReg.test(emailValue)==true ){
                swal({
                    title: "Warning!",
                    text: "password format are wrong",
                    icon: "warning",
                    button: "ok",
                  });
            }
            else if(emailReg.test(emailValue)!=true && passwordReg.test(passwordValue)!=true){
                swal({
                    title: "Warning!",
                    text: "Password and Email formats are wrong",
                    icon: "warning",
                    button: "ok",
                  });
            }
            else {
                location.href = "../dashboard/index.html"
            }
        })
    })
})();