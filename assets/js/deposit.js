$("#depositForm").submit(function(e){

    e.preventDefault();

    let monto = Number(
        $("#amount").val()
    );

    $("#resultado").html(
        `Depósito realizado por $${monto}`
    );

});