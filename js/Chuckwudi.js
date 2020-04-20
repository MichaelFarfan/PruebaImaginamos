var inicio = 1; //se inicializa una variable en 0

function aumentar() { // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar

    var cantidad = document.getElementById('Num').value = ++inicio; //se obtiene el valor del input, y se incrementa en 1 el valor que tenga.
}

function disminuir() { // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir

    var cantidad = document.getElementById('Num').value = --inicio; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
    if (inicio == 0) {
        alert("El número mínimo de personas es uno, no se puede disminuir más")
        inicio = 1;
        document.getElementById('Num').value = inicio;
        return;
    }
}


var opc1 = document.getElementById("opc1"),
    opc2 = document.getElementById("opc2"),
    opc3 = document.getElementById("opc3"),
    opc4 = document.getElementById("opc4"),
    opc5 = document.getElementById("opc5"),
    opc6 = document.getElementById("opc6"),
    opc7 = document.getElementById("opc7"),
    opc8 = document.getElementById("opc8");

opc1.addEventListener('click', function () {

    opc1.classList.add("Seleccionada");
    opc2.classList.remove("Seleccionada");
    opc3.classList.remove("Seleccionada");
    opc4.classList.remove("Seleccionada");
    opc5.classList.remove("Seleccionada");
    opc6.classList.remove("Seleccionada");
    opc7.classList.remove("Seleccionada");
    opc8.classList.remove("Seleccionada");

});

opc2.addEventListener('click', function () {

    opc1.classList.remove("Seleccionada");
    opc2.classList.add("Seleccionada");
    opc3.classList.remove("Seleccionada");
    opc4.classList.remove("Seleccionada");
    opc5.classList.remove("Seleccionada");
    opc6.classList.remove("Seleccionada");
    opc7.classList.remove("Seleccionada");
    opc8.classList.remove("Seleccionada");

});
opc3.addEventListener('click', function () {

    opc1.classList.remove("Seleccionada");
    opc2.classList.remove("Seleccionada");
    opc3.classList.add("Seleccionada");
    opc4.classList.remove("Seleccionada");
    opc5.classList.remove("Seleccionada");
    opc6.classList.remove("Seleccionada");
    opc7.classList.remove("Seleccionada");
    opc8.classList.remove("Seleccionada");

});
opc4.addEventListener('click', function () {

    opc1.classList.remove("Seleccionada");
    opc2.classList.remove("Seleccionada");
    opc3.classList.remove("Seleccionada");
    opc4.classList.add("Seleccionada");
    opc5.classList.remove("Seleccionada");
    opc6.classList.remove("Seleccionada");
    opc7.classList.remove("Seleccionada");
    opc8.classList.remove("Seleccionada");

});
opc5.addEventListener('click', function () {

    opc1.classList.remove("Seleccionada");
    opc2.classList.remove("Seleccionada");
    opc3.classList.remove("Seleccionada");
    opc4.classList.remove("Seleccionada");
    opc5.classList.add("Seleccionada");
    opc6.classList.remove("Seleccionada");
    opc7.classList.remove("Seleccionada");
    opc8.classList.remove("Seleccionada");

});
opc6.addEventListener('click', function () {

    opc1.classList.remove("Seleccionada");
    opc2.classList.remove("Seleccionada");
    opc3.classList.remove("Seleccionada");
    opc4.classList.remove("Seleccionada");
    opc5.classList.remove("Seleccionada");
    opc6.classList.add("Seleccionada");
    opc7.classList.remove("Seleccionada");
    opc8.classList.remove("Seleccionada");

});
opc7.addEventListener('click', function () {

    opc1.classList.remove("Seleccionada");
    opc2.classList.remove("Seleccionada");
    opc3.classList.remove("Seleccionada");
    opc4.classList.remove("Seleccionada");
    opc5.classList.remove("Seleccionada");
    opc6.classList.remove("Seleccionada");
    opc7.classList.add("Seleccionada");
    opc8.classList.remove("Seleccionada");

});
opc8.addEventListener('click', function () {

    opc1.classList.remove("Seleccionada");
    opc2.classList.remove("Seleccionada");
    opc3.classList.remove("Seleccionada");
    opc4.classList.remove("Seleccionada");
    opc5.classList.remove("Seleccionada");
    opc6.classList.remove("Seleccionada");
    opc7.classList.remove("Seleccionada");
    opc8.classList.add("Seleccionada");

});
document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('slide');
    button.onclick = function () {
        document.getElementById('secciones').scrollLeft += 20;
    };
}, false);
const btnmen = document.querySelector('.btnmenu');

btnmen.addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('active')

})
