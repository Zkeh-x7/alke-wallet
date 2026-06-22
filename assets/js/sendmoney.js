let contactos = [
    "Juan",
    "Pedro",
    "María",
    "Camila",
    "Felipe"
];

$("#contact").on("keyup", function(){

    let texto = $(this)
    .val()
    .toLowerCase();

    let resultado =
    contactos.filter(c =>
        c.toLowerCase()
        .includes(texto)
    );

    console.log(resultado);

});

$("#sendForm").submit(function(e){

    e.preventDefault();

    let monto =
    $("#money").val();

    $("#transferMessage").html(
        `<div class="alert alert-success">
        Transferencia realizada por $${monto}
        </div>`
    );

});