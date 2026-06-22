$("#loginForm").submit(function(e){

    e.preventDefault();

    const email = $("#email").val();
    const password = $("#password").val();

    if(
        email === "admin@alkewallet.com"
        &&
        password === "123456"
    ){

        window.location.href="menu.html";

    }else{

        $("#mensaje").html(
            "<p class='text-danger'>Credenciales incorrectas</p>"
        );

    }

});