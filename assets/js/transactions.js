const movimientos = [

{
tipo:"Depósito",
monto:50000
},

{
tipo:"Transferencia",
monto:-10000
},

{
tipo:"Depósito",
monto:25000
}

];

movimientos.forEach(mov=>{

$("#transactionList").append(

`<li class="list-group-item">

${mov.tipo}

-

$${mov.monto}

</li>`

);

});