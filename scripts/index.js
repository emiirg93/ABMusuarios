$(function () {

    SetSpinner();
    traerPersonas();

    $('#abrirModal').click(function () {
        $('#modal').show(1000);
    })

    $('.close').click(function () {
        $('#modal').hide(1000);
    })

    $("#alta").click(function () {
        AltaPersona();
        $('#modal').hide(1000);
    })

    $("#modificacion").click(function () {
        Modificar();
        $('#modal').hide(1000);
    })

    $("#baja").click(function () {
        Eliminar();
        $('#modal').hide(1000);
    })
})

function SetSpinner() {
    var spinner = $("<img>").attr("src", "../img/spinner3.gif");
    $(".spinner").append(spinner);
}

function crearTabla(personas) {

    var cuerpoTabla = $("#bodyTabla");

    for (var i in personas) {

        person = [
            personas[i]["id"],
            personas[i]["first_name"],
            personas[i]["last_name"],
            personas[i]["email"],
            personas[i]["gender"]
        ];
        personas[i] = person;

        var fila = $("<tr>");

        for (var j in personas[i]) {

            if (j != "active") {
                var columna = $("<td>").text(personas[i][j]);

                fila.append(columna);
            }
        }

        cuerpoTabla.append(fila).css("text-align", "center");
    }

    $("#bodyTabla tr").click(function () {
        var array = $(this).contents();

        for (var i = 0; i < array.length; i++) {
            array[i] = array[i].textContent;
        }

        $("#nowid").val(array[0]);
        $("#nombre").val(array[1]);
        $("#apellido").val(array[2]);
        $("#email").val(array[3]);

        if (array[4] == "Male") {
            $("#sexo").val("Male");
        }
        else {
            $("#sexo").val("Female");
        }

        $('#modal').show(1000);
    })
}

function AltaPersona() {

    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var email = $("#email").val();
    var sexo = $("#sexo").val();

    var persona = new Persona(nombre, apellido, email, sexo);

    guardarPersona(persona);

}

function Modificar() {
    var id = $("#nowid").val();
    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var email = $("#email").val();
    var sexo = $("#sexo").val();

    var persona = { id: id, first_name: nombre, last_name: apellido, email: email, gender: sexo }

    modificarPersona(persona);

}

function Eliminar() {
    var id = $("#nowid").val();
    eliminarPersona(id);
}

function Persona(nombre, apellido, email, sexo) {
    this.first_name = nombre;
    this.last_name = apellido;
    this.email = email;
    this.gender = sexo;
}